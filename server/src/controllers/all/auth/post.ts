import { Request, Response } from "express";
import {
  calcTimeRun,
  capChar,
  createTokenHMAC,
  err409,
  hashPwd,
  res201,
  sendEmailAuth,
} from "../../../lib/lib.js";
import { User } from "../../../models/models.js";
import { MailEventType } from "../../../types/types.js";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  const newUser = req.body;

  const existingUser = await User.findOne({
    where: { email: newUser.email },
  });
  if (existingUser) return err409(res, { msg: "User already exists" });

  newUser.password = await calcTimeRun(() => hashPwd(newUser.password));
  const newSqlUser = await User.create({
    ...newUser,
    firstName: capChar(newUser.firstName),
    lastName: capChar(newUser.lastName),
  });
  const accessToken = createTokenHMAC(newSqlUser);

  await sendEmailAuth({
    user: newSqlUser,
    token: accessToken,
    event: MailEventType.VERIFY_ACCOUNT,
  });

  return res201(res, { msg: "Account created", accessToken });
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const user = req.body;

  console.log(user);

  return res.status(200).json({ ok: true });
};
