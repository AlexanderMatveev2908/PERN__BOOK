import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaEmail } from "../../../lib/lib";

const schema = z
  .object({
    ...schemaEmail(),
  })
  .refine((data) => data.email.trim(), {
    message: "Email is required",
    path: ["email"],
  });

export const useMakeFormEmail = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  return {
    register,
    errors,
    handleSubmit,
    watch,
    reset,
  };
};
