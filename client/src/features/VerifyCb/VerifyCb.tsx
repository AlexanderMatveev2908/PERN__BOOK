import { FC, useCallback, useEffect, useRef } from "react";
import { useVerifyAccountMutation } from "./verifyCbSliceAPI";
import { useSearchParams } from "react-router-dom";
import WrapPageAPI from "@/components/HOC/WrapPageAPI";
import { useWrapAPI } from "@/hooks/hooks";
import { useDispatch } from "react-redux";
import { isObjOk } from "@/lib/lib";
import { TokenEventType } from "@/types/types";

const VerifyCb: FC = () => {
  const [searchParams] = useSearchParams();
  const hasRun = useRef<boolean>(false);

  const userID = searchParams.get("userID") ?? "";
  const token = searchParams.get("token") ?? "";
  const event = searchParams.get("event") ?? "";

  const { wrapAPI } = useWrapAPI();

  const dispatch = useDispatch();
  const [verifyAccount, { isLoading, isError, error }] =
    useVerifyAccountMutation();

  const handleVerifyAccount = useCallback(async () => {
    const params = { token, userID, event: event as TokenEventType };
    const res = await wrapAPI(() => verifyAccount(params));
    if (!isObjOk(res)) return;
  }, [userID, token, event, verifyAccount, wrapAPI]);

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      handleVerifyAccount();
    }
  }, [handleVerifyAccount]);
  return <WrapPageAPI />;
};
export default VerifyCb;
