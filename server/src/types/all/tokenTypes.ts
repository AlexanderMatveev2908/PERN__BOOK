export enum TokenEventType {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
  VERIFY_ACCOUNT = "VERIFY_ACCOUNT",
  FORGOT_PWD = "FORGOT_PWD",
  CHANGE_PWD = "CHANGE_PWD",
  CHANGE_EMAIL = "CHANGE_EMAIL",
}

export enum MsgHMAC {
  NOT_FOUND = "VERIFY_TOKEN_NOT_FOUND",
  NOT_EMITTED = "VERIFY_TOKEN_NOT_EMITTED",
  EXPIRED = "VERIFY_TOKEN_EXPIRED",
  OK = "OK",
}

export enum ErrAppMsgCode {
  ACCESS_EXPIRED = "ACCESS TOKEN EXPIRED",
  ACCESS_INVALID = "ACCESS_TOKEN_INVALID",
  ACCESS_NOT_PROVIDED = "ACCESS TOKEN NOT PROVIDED",

  REFRESH_EXPIRED = "REFRESH TOKEN EXPIRED",
  REFRESH_INVALID = "REFRESH TOKEN INVALID",
  REFRESH_NOT_PROVIDED = "REFRESH TOKEN NOT PROVIDED",
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
