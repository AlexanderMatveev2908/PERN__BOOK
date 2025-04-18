/* eslint-disable @typescript-eslint/no-explicit-any */
import { REG_ID } from "@/config/regex";
import { MsgErrSession, TokenEventType } from "@/types/types";

export const isAccessExpired = (msg: string) =>
  [
    MsgErrSession.ACCESS_EXPIRED,
    MsgErrSession.ACCESS_INVALID,
    MsgErrSession.ACCESS_NOT_PROVIDED,
  ].includes(msg as MsgErrSession);

export const isRefreshing = (endpoint: string) => endpoint === "/refresh";

export const canToast = (msg: string, endpoint: string) =>
  !isAccessExpired(msg) && !isRefreshing(endpoint);

export const makeDelay = (cb: () => any) =>
  new Promise((res) =>
    setTimeout(async () => {
      const result = await cb();
      res(result);
    }, 250)
  );

export const addFlagCB = <T>(cb: T) => {
  (cb as T & { run: boolean }).run = true;

  return cb;
};

export const checkQueryAuth = ({
  userID,
  token,
  event,
}: {
  userID: string;
  token: string;
  event: TokenEventType;
}) =>
  REG_ID.test(userID) &&
  !!token.length &&
  Object.values(TokenEventType).includes(event);

export const getData = (obj: any, key: string) => obj?.[key] ?? null;
