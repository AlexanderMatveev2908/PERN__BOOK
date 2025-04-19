import { isRefreshing } from "@/lib/lib";
import authSlice from "@/features/AuthLayout/authSlice";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { handle401, handleLogoutWithAccessExp } from "./handle401";
import { handlePushErr } from "./utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleErrStatus = (store: any) => (next: any) => (action: any) => {
  const { payload } = action;

  const isLogged = store.getState().auth.isLogged;

  if (payload?.refreshed) {
    if (!isLogged) store.dispatch(authSlice.actions.login());
  }

  // i destructure res 200 cause i do not need config or more info but i need all I work with errors
  if (isRejectedWithValue(action)) {
    const { response } = payload ?? {};
    const { status, data, config } = response ?? {};

    // i do not need `else if` cause in every i return
    if (status === 401 && data?.loggingOut) handleLogoutWithAccessExp(store);
    if (status === 401 && isRefreshing(config?.url))
      handle401({ store, response });
    if ([403, 429].includes(status)) handlePushErr({ store, response });

    return next(action);
  }

  return next(action);
};

/*
  if (isRejectedWithValue(action)) {
    if (status === 401 && data?.loggingOut) {
      handleLogoutWithAccessExp(store);
      return null;
    }
    if (status !== 401 || !isRefreshing(config?.url)) return next(action);

    // store.dispatch(authSlice.actions.setLoggingOut(true));
    const message = getMsg(data, isLogged);
    // const newNotice = { notice: message, type: EventApp.ERR };
    store.dispatch(
      toastSlice.actions.openToast({
        msg: message,
        type: EventApp.ERR,
        statusCode: status,
      })
    );
    // store.dispatch(
    //   noticeSlice.actions.setNotice({
    //     ...newNotice,
    //   })
    // );

    removeStorage();
    // saveStorage({ data: newNotice, key: StorageKeys.NOTICE });

    store.dispatch(authSlice.actions.logout());
    store.dispatch(apiSlice.util.resetApiState());

    // goTo("/auth/login", { replace: true });
    // goTo("/notice", { replace: true, state: { from: AllowedFromNotice.EXP } });

    return null;
  }
    */
