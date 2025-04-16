import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  fieldsAuth__0,
  fieldsAuth__1,
  groupFieldsByArea,
} from "../../../config/fields/fields.ts";
import ButtonsSwapper from "../../../components/forms/components/ButtonsSwapper/ButtonsSwapper";
import Terms from "./components/Terms";
import BreadCrumbForm from "../../../components/forms/components/BreadCrumbForm";
import Button from "../../../components/common/buttons/Button/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  getErrCurrSwap,
  getErrLen,
  isObjOk,
  makeNoticeTxt,
  saveStorage,
  schemaRegister,
} from "../../../lib/lib.ts";
import CreatePwd from "../../../components/forms/components/CreatePwd";
import { useShowPwd } from "../../../hooks/all/forms/useShowPwd.ts";
import FormField from "../../../components/forms/components/inputs/FormField";
import PwdField from "../../../components/forms/components/inputs/PwdField/PwdField";
import WrapperFocus from "../../../components/forms/components/WrapperFocus/WrapperFocus.tsx";
import { RegisterParamsAPI, useRegisterUserMutation } from "../authSliceAPI.ts";
import { useCb, useWrapAPI } from "@/hooks/hooks.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../authSlice.ts";
import { AllowedFromNotice, EventApp } from "@/types/types.ts";
import { setNotice } from "@/features/Notice/noticeSlice.ts";

type RegisterFormType = z.infer<typeof schemaRegister>;
const Register: FC = () => {
  const [currForm, setCurrFormBeforeCB] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const navigate = useNavigate();

  const { mainPwd, confirmPwd, closeAllPwd } = useShowPwd();
  const { wrapAPI } = useWrapAPI();

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
    reset,
  } = useForm<RegisterFormType>({
    mode: "onChange",
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      firstName: "ddd",
      lastName: "ddd",
      email: "matveevalexander470@gmail.com",
      password: "@2}mX_}^]3#lA^w5",
      confirmPassword: "@2}mX_}^]3#lA^w5",
      terms: true,
      // firstName: "",
      // lastName: "",
      // email: "",
      // password: "",
      // confirmPassword: "",
      // terms: null,
    },
  });

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const { registerCb } = useCb({
    cb: () => dispatch(login()),
    alias: "register",
  });
  const handleSave = handleSubmit(async (formData) => {
    // eslint-disable-next-line
    const { confirmPassword: _, terms: __, ...newUser } = formData;

    const res = await wrapAPI(() =>
      registerUser(newUser as NonNullable<RegisterParamsAPI>)
    );
    if (!isObjOk(res)) return;

    saveStorage({ data: res?.accessToken, key: "accessToken" });
    reset();
    const notice = {
      notice: makeNoticeTxt("to verify your account"),
      type: EventApp.OK,
    };
    saveStorage({ data: notice, key: "notice" });
    dispatch(setNotice({ ...notice, cb: registerCb }));
    navigate("/notice", {
      replace: true,
      state: { from: AllowedFromNotice.REGISTER },
    });
  });

  const vals = watch();
  const isDisabled = useMemo(() => getErrLen(errors, vals), [errors, vals]);

  useEffect(() => {
    const listenErr = () => {
      const currSwapKeys = groupFieldsByArea[currForm];
      let isValid = getErrCurrSwap(errors, currSwapKeys);

      if (isValid)
        for (const key in vals) {
          if (
            currSwapKeys.includes(key) &&
            (typeof vals[key as keyof RegisterFormType] === "string"
              ? !(vals[key as keyof RegisterFormType] as string)?.trim()
              : !vals[key as keyof RegisterFormType])
          ) {
            isValid = false;
            break;
          }
        }

      if (!isValid && !isNextDisabled) setIsNextDisabled(true);
      else if (isValid && isNextDisabled) setIsNextDisabled(false);
    };

    listenErr();
  }, [currForm, errors, isNextDisabled, vals]);

  const setCurrForm = useCallback(
    (val: number) => {
      closeAllPwd();
      setCurrFormBeforeCB(val);
    },
    [closeAllPwd]
  );

  const pwd = watch("password");

  return (
    <div className="parent__form">
      <BreadCrumbForm {...{ currForm, totLen: 2 }} />

      <div className="form__content">
        <form onSubmit={handleSave} className="w-full overflow-hidden p-6">
          <div
            className={`w-[200%] flex transition-all duration-500 ${
              !currForm
                ? "max-h-[300px] min-h-[300px]"
                : "max-h-[350px] min-h-[350px]"
            }`}
            style={{
              transform: `translateX(-${currForm * 50}%)`,
            }}
          >
            <div
              className={`w-full grid gap-5 items-start h-fit el__flow ${
                !currForm ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {fieldsAuth__0.map((el) => (
                <FormField key={el.id} {...{ el, register, errors }} />
              ))}
            </div>
            <div
              className={`w-full grid gap-5 items-start h-fit el__flow ${
                currForm ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {fieldsAuth__1.map((el, i) =>
                !i ? (
                  <WrapperFocus
                    key={el.id}
                    {...{ mainPwd, pwd, register, errors, el }}
                  />
                ) : (
                  <PwdField
                    key={el.id}
                    {...{
                      el,
                      register,
                      errors,
                      ...confirmPwd,
                    }}
                  />
                )
              )}

              <CreatePwd />

              <Terms {...{ setValue, watch, errors }} />
            </div>
          </div>

          <ButtonsSwapper
            {...{ currForm, setCurrForm, totLen: 2, isNextDisabled }}
          >
            <div className="max-w-[250px] justify-self-center">
              <Button
                {...{
                  isAging: isLoading,
                  isDisabled: isDisabled || isNextDisabled,
                  label: "Register",
                }}
              />
            </div>
          </ButtonsSwapper>
        </form>
      </div>
    </div>
  );
};
export default Register;
