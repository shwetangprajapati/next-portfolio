"use client";

import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import InputBox from "@/components/inputbox/InputBox";
import CustomButton from "@/components/buttons/CustomButton";
import Heading from "@/components/heading/Heading";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <>
  
      <div className="flex  flex-1 flex-col justify-center px-6  lg:px-8 h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Heading title={"Sign up for account"} image="./underline.svg" />
      </div>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={formAction}>
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
            />
            <InputBox
              label="Confirm Password"
              id="password"
              name="passwordRepeat"
              type="password"
              required
              minLength={6}
            />

            <div>
              <CustomButton>Sign up</CustomButton>
            </div>
            {state?.error}
          </form>

          <p className="mt-10 text-center  text-gray-600 sm:text-base text-sm ">
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
