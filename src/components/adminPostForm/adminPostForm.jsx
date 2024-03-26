"use client";

import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";
import InputBox from "@/components/inputbox/InputBox";
import CustomButton from "@/components/buttons/CustomButton";
import Heading from "../heading/Heading";
const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <Heading title={"Add New Post"} image="./underline.svg" />
      <input type="hidden" name="userId" value={userId} />
      <InputBox
        label="Title"
        id="title"
        name="title"
        type="text"
        value={userId}
        required
      />
      <InputBox
        label="Slug"
        id="slug"
        name="slug"
        type="text"
        value={userId}
        required
      />
      <InputBox label="Image" id="img" name="img" type="text" value={userId} />
      <textarea 
      type="text" 
      name="desc" 
      placeholder="desc" 
      rows={10} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      />
      <CustomButton>Add</CustomButton>

      {state?.error}
    </form>
  );
};

export default AdminPostForm;
