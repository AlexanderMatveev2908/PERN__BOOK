import { NextFunction, Response } from "express";
import { MsgErrSession, ReqApp } from "../../../types/types.js";
import {
  AppJwtPayload,
  err401,
  handleErrAccessToken,
  prepareHeader,
  verifyJWT,
} from "../../../lib/lib.js";

export const getUserID = async (
  req: ReqApp,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const accessToken = prepareHeader(req);
  const { refreshToken } = req.cookies;

  if (!accessToken) {
    if (!refreshToken) return next();
    else return err401(res, { msg: MsgErrSession.ACCESS_NOT_PROVIDED });
  }

  try {
    const decoded: AppJwtPayload = verifyJWT(accessToken);
    req.userID = decoded.id;

    return next();
  } catch (err: any) {
    return handleErrAccessToken(res, err);
  }
};
