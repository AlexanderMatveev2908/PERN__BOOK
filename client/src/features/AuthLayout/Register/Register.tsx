/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useMemo, useState } from "react";
import {
  fieldsAuth__0,
  fieldsAuth__1,
  groupFieldsByArea,
} from "../../../config/fields/AuthLayout/fieldsAuth";
import ButtonsSwapper from "../../../components/common/ButtonsSwapper/ButtonsSwapper";
import Terms from "./components/Terms";
import FormField from "../../../components/forms/components/FormField";
import BreadCrumbForm from "../../../components/common/BreadCrumbForm";
import Button from "../../../components/common/buttons/Button/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { REG_NAME, REG_PWD } from "../../../config/regex";
import { useForm } from "react-hook-form";
import { getErrCurrSwap, getErrLen } from "../../../lib/forms";

const schema = z
  .object({
    firstName: z
      .string()
      .min(1, "First Name is required")
      .max(30, "First Name must be less than 30 characters")
      .regex(REG_NAME, "Invalid First Name format"),
    lastName: z
      .string()
      .min(1, "Last Name is required")
      .max(30, "First Name must be less than 30 characters")
      .regex(REG_NAME, "Invalid Last Name format"),
    email: z.string().email("Invalid Email Format"),
    password: z
      .string()
      .min(1, "Password is required")
      .regex(REG_PWD, "Invalid password format"),
    confirmPassword: z.string().min(1, "You must confirm your password"),
    terms: z.boolean().nullable(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email !== data.password, {
    message: "Email and Password must be different",
    path: ["email", "password"],
  })
  .refine((data) => data.terms, {
    message: "You must accept the terms",
    path: ["terms"],
  });

type RegisterFormType = z.infer<typeof schema>;
const Register: FC = () => {
  const [currForm, setCurrForm] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const {
    register,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<RegisterFormType>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: null,
    },
  });

  const isDisabled = useMemo(() => getErrLen(errors), [errors]);
  const vals = watch();

  useEffect(() => {
    const listenErr = () => {
      const currSwapKeys = groupFieldsByArea[currForm];
      let isValid = getErrCurrSwap(errors, currSwapKeys);

      if (isValid)
        for (const key in vals) {
          if (currSwapKeys.includes(key) && !(vals as any)[key]) {
            isValid = false;
            break;
          }
        }

      if (!isValid && !isNextDisabled) setIsNextDisabled(true);
      else if (isValid && isNextDisabled) setIsNextDisabled(false);
    };

    listenErr();
  }, [currForm, errors, isNextDisabled, vals]);

  return (
    <div className="w-full grid justify-items-center gap-5">
      <BreadCrumbForm {...{ currForm, totLen: 2 }} />

      <form className="w-full grid border-[3px] border-blue-600 rounded-xl max-w-[600px] text-[whitesmoke]">
        <div className="w-full grid p-6 overflow-hidden">
          <div
            className={`min-w-[200%] flex transition-all duration-500 ${
              !currForm
                ? "max-h-[300px] min-h-[300px]"
                : " max-h-[350px] min-h-[350px]"
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
              {fieldsAuth__1.map((el) => (
                <FormField key={el.id} {...{ el, register, errors }} />
              ))}

              <Terms {...{ setValue, watch, errors }} />
            </div>
          </div>

          <ButtonsSwapper
            {...{ currForm, setCurrForm, totLen: 2, isNextDisabled }}
          >
            <div className="max-w-[250px] justify-self-center">
              <Button
                {...{
                  isPending: false,
                  isDisabled: isDisabled || isNextDisabled,
                  label: "Register",
                }}
              />
            </div>
          </ButtonsSwapper>
        </div>
      </form>
    </div>
  );
};
export default Register;
