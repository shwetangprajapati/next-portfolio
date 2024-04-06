"use client";

import { register } from "../../../lib/action";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputBox from "../../../components/inputbox/InputBox";
import CustomButton from "../../../components/buttons/CustomButton";
import Heading from "../../../components/heading/Heading";
import { errorToast, successToast } from "../../../components/toast/Toast";

export default function RegisterForm() {
  const router = useRouter();
  const ref = useRef(null);
  const [state, formAction] = useFormState(register, undefined);

  useEffect(() => {
    if (state?.success) {
      successToast(state?.message);
      router.push("/login");
    } else if (state?.error) {
      errorToast(state?.error);
    }
  }, [state, router]);

  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6  lg:px-8 h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Heading title={"Sign up for account"} image="/underline.svg" />
        </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction} ref={ref}>
            <InputBox
              label="Username"
              id="username"
              name="username"
              type="text"
              minLength={3}
              required
            />
            <InputBox
              label="Email"
              id="email"
              name="email"
              type="email"
              required
            />
            <InputBox
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              autoComplete="on"
            />
            <InputBox
              label="Confirm Password"
              id="passwordconfirm"
              name="passwordRepeat"
              type="password"
              required
              minLength={6}
              autoComplete="on"
            />

            <div>
              <CustomButton>Sign up</CustomButton>
            </div>
          </form>

          <p className="mt-10 text-center  text-gray-900 sm:text-base text-sm ">
            Already have an account?&nbsp;
            <Link
              href="/login"
              className="font-medium  text-indigo-500 hover:text-indigo-600 "
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
