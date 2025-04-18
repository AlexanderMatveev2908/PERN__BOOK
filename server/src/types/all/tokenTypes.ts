export enum TokenEventType {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
  VERIFY_ACCOUNT = "VERIFY_ACCOUNT",
  FORGOT_PWD = "FORGOT_PWD",
  CHANGE_PWD = "CHANGE_PWD",
  CHANGE_EMAIL = "CHANGE_EMAIL",
}

export enum MsgCheckToken {
  NOT_FOUND = "VERIFY_TOKEN_NOT_FOUND",
  NOT_EMITTED = "VERIFY_TOKEN_NOT_EMITTED",
  INVALID = "VERIFY_TOKEN_INVALID",
  EXPIRED = "VERIFY_TOKEN_EXPIRED",
  OK = "OK",
}

export enum MsgErrSession {
  ACCESS_EXPIRED = "ACCESS_EXPIRED",
  ACCESS_INVALID = "ACCESS_INVALID",
  ACCESS_NOT_PROVIDED = "ACCESS_NOT_PROVIDED",

  REFRESH_NOT_EMITTED = "REFRESH_NOT_EMITTED ",
  REFRESH_EXPIRED = "REFRESH_EXPIRED ",
  REFRESH_INVALID = "REFRESH_INVALID ",
  REFRESH_NOT_PROVIDED = "REFRESH_NOT_PROVIDED ",
}

export const KeyAlgRSA = {
  RSA: "RSA-OAEP-256",
} as const;
export const TokAlg = {
  SHA: "sha256",
  CBC_HMAC: "aes-256-cbc",
  GCM: "A256GCM",
} as const;

export type KeyAlgType = (typeof KeyAlgRSA)[keyof typeof KeyAlgRSA];
export type TokAlgType = (typeof TokAlg)[keyof typeof TokAlg];
