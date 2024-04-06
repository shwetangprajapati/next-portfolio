"use client";
import CustomButton from "../../components/buttons/CustomButton";
import Heading from "../../components/heading/Heading";
import InputBox from "../../components/inputbox/InputBox";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { errorToast, successToast } from "../toast/Toast";
import { contactMe } from "../../lib/action";
const ContactForm = () => {
  const ref = useRef(null);
  const [state, formAction] = useFormState(contactMe, undefined);

  useEffect(() => {
    if (state?.success) {
      ref.current?.reset();
      successToast(state?.message);
    } else if (state?.error) {
      errorToast(state?.error);
    }
  }, [state]);
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <Heading title="Get in touch" image="/underline.svg" />
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl sm:text-xl text-lg   text-gray-900">
              I will absolutely love to hear from you. Whether you have
              questions, feedback, or just want to say hello, don&apos;t
              hesitate to reach out!
            </p>

            <div className="mt-8">
              <a
                href={`tel:8968966638`}
                className="sm:text-3xl text-xl font-bold text-indigo-500"
              >
                8968966638
              </a>
              <div>
                <a
                  href="mailto:shwetangprajapati11@gmail.com"
                  className="mt-4 sm:text-xl text-lg   text-gray-900"
                >
                  shwetangprajapati11@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form 
            className="space-y-4" 
            ref={ref}
            action={formAction}
            >
              <InputBox
                label="Name"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputBox
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <InputBox
                  label="Phone"
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter your mobile"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium leading-6 text-gray-900"
                  htmlFor="message"
                >
                  Message
                </label>

                <textarea
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your message"
                  rows="8"
                  id="message"
                  name="message"
                  required
                />
              </div>

              <div className="mt-4">
                <CustomButton>Send Enquiry</CustomButton>
                {state?.success}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
