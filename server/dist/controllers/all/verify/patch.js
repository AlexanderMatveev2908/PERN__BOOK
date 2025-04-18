var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MsgCheckToken } from "../../../types/types.js";
import { checkCbcHmac, err401, err404, err409, formatMsgApp, genAccessJWT, genTokenJWE, res200, setCookie, } from "../../../lib/lib.js";
import { User } from "../../../models/models.js";
export const verifyAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token, userID, event } = req.body;
    const user = yield User.findByPk(userID, {
        include: {
            all: true,
        },
    });
    if (!user)
        return err404(res, { msg: "user not found" });
    if (user.isVerified)
        return err409(res, { msg: "user already verified" });
    const result = yield checkCbcHmac({
        user,
        token,
        event,
    });
    if (result !== MsgCheckToken.OK)
        return err401(res, { msg: formatMsgApp(result) });
    yield user.verify();
    yield user.clearTokens();
    const accessToken = genAccessJWT(user);
    const refreshToken = yield genTokenJWE(user);
    setCookie(res, refreshToken);
    return res200(res, { msg: "account verified", accessToken });
});
