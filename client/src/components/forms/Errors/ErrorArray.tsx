/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormFieldBasic } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { FieldErrors } from "react-hook-form";

type PropsType = {
  errors: FieldErrors;
  styleCont?: string;
  el: FormFieldBasic;
  styleTool?: string;
  index: number;
};

const ErrorArray: FC<PropsType> = ({
  errors,
  styleCont,
  el,
  styleTool,
  index,
}) => {
  const [prevErr, setPrevErr] = useState<string | null>(null);
  const msg = (errors?.items as any)?.[index]?.[el.field]?.message as string;

  useEffect(() => {
    if (msg && !prevErr) {
      setPrevErr(msg);
    }
  }, [msg, prevErr, errors]);

  return (
    <div
      className={`absolute ${
        styleCont ?? "-top-[100%] right-0"
      }  transition-all pointer-events-none duration-[0.4s] text-red-600 border-2 border-red-600 rounded-xl py-1 px-5 bg-[#000] z-40 ${
        msg ? "translate-y-0 opacity-100" : "translate-y-[200%] opacity-0"
      }`}
    >
      <span className="txt__1 text-red-600">{msg || prevErr}</span>

      <div
        className={`absolute w-[30px] h-[30px] right-[25px] -translate-y-1/2 overflow-hidden z-60 ${
          styleTool ?? "top-[128%]"
        }`}
      >
        <div className="w-[30px] h-[30px] border-2 border-red-600 bg-[#000] rotate-45 absolute top-[-15px] left-0"></div>
      </div>
    </div>
  );
};

export default ErrorArray;
