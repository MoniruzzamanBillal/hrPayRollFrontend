"use client";

import { usePost } from "@/hooks/useApi";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { loginSchema } from "./schema/login.schema";

import ControlledInput from "@/components/shared/input/ControlledInput";
import PrimaryButton from "@/components/shared/PrimaryButton/PrimaryButton";
import { setTokens } from "@/utils/tokenManager";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
type TLoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [textMode, setTextModel] = useState<boolean>(false);

  const { mutateAsync: loginMutate, isPending } = usePost([]);

  const methods = useForm<TLoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const handleToggleEye = () => {
    setTextModel((prev) => !prev);
  };

  const handleLogin = async (data: TLoginForm) => {
    try {
      const result = await loginMutate({
        url: "/auth/login",
        payload: data,
      });

      console.log("result  - ", result);

      if (result?.access_token) {
        toast.success("Logged in successfully");

        setTokens(result?.access_token, result?.refresh_token);

        setTimeout(() => {
          // redirect("/setup/material");
          redirect("/");
        }, 100);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message ?? "Something went wrong!!", {
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleLogin)}
          className="space-y-6 "
        >
          <ControlledInput
            name="email"
            label="Email Address / Username"
            placeholder="Enter email or user name"
          />

          <div className=" relative ">
            <ControlledInput
              name="password"
              label="Password"
              placeholder="Enter Password Here"
              type={textMode ? "text" : "password"}
            />

            {/* eye icon  */}
            <div
              className=" inline absolute top-[70%] right-0 transform -translate-x-1/2 -translate-y-1/2  "
              onClick={() => handleToggleEye()}
            >
              {textMode ? (
                <EyeOff className=" cursor-pointer " />
              ) : (
                <Eye className=" cursor-pointer " />
              )}
            </div>
          </div>

          <PrimaryButton
            disabled={isPending}
            type="submit"
            className=" w-full text-sm sm:text-base leading-6 tracking-normal "
          >
            Login
          </PrimaryButton>
        </form>
      </FormProvider>
    </div>
  );
}
