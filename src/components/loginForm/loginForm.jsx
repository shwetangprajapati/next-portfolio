"use client";

import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import Link from "next/link";
import InputBox from "../inputbox/InputBox";
import CustomButton from "@/components/buttons/CustomButton";
import { GithubIcon } from "@/lib/SVG";
import { handleGithubLogin } from "@/lib/action";
import Heading from "@/components/heading/Heading";
import { useEffect } from "react";
import { errorToast } from "../toast/Toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [state, formAction] = useFormState(login, undefined);

  useEffect(() => {
    if (state?.error) {
      errorToast(state?.error);
    } else return;
  }, [state, router]);
  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6  lg:px-8 h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Heading title={"Sign in to your account"} image="./underline.svg" />
        </div>
        <form action={handleGithubLogin} className="flex justify-center">
          <button
            type="submit"
            className=" my-4 py-2 px-4 sm:max-w-sm flex justify-center items-center bg-gray-600 hover:bg-gray-700 text-white w-full transition ease-in duration-200 text-center  font-semibold shadow-md focus:outline-none rounded-lg"
          >
            <GithubIcon />
            Sign in with GitHub
          </button>
        </form>
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <span className="flex items-center my-4">
            <span className="h-px flex-1 bg-black"></span>
            <span className="shrink-0 px-6 ">OR</span>
            <span className="h-px flex-1 bg-black"></span>
          </span>
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
              label="Password"
              id="password"
              name="password"
              type="password"
              minLength={6}
              required
              autoComplete="on"
            />

            <div>
              <CustomButton>Sign in</CustomButton>
            </div>
          </form>

          <p className="mt-10 text-center  text-gray-600 sm:text-base text-sm ">
            Don&apos;t have an account?
            <Link
              href="/signin"
              className="font-medium  text-indigo-500 hover:text-indigo-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
