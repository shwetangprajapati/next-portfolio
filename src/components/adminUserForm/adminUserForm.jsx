"use client";

import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";
import InputBox from "@/components/inputbox/InputBox";
import CustomButton from "@/components/buttons/CustomButton";
import Heading from "../heading/Heading";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-8">
              <Heading title={"Add New User"} image="./underline.svg" />

      <InputBox
        label="Username"
        id="username"
        name="username"
        type="text"
        required
      />
      <InputBox label="Email" id="email" name="email" type="email" required />
      <InputBox
        label="Password"
        id="password"
        name="password"
        type="password"
        required
      />
      <InputBox label="Image" id="img" name="img" type="text" />
      <select
        name="isAdmin"
        className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      >
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <CustomButton>Add</CustomButton>

      {state?.error}
    </form>
  );
};

export default AdminUserForm;
