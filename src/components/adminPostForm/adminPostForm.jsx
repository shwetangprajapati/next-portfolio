"use client";
import { useState } from "react";
import { successToast, errorToast } from "../../components/toast/Toast";
import InputBox from "../../components/inputbox/InputBox";
import CustomButton from "../../components/buttons/CustomButton";
import Heading from "../heading/Heading";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AdminPostForm = ({ userId }) => {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    desc: "",
    slug: "",
    userId: userId,
    img: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (response.ok) {
        const data = await response.json();
        successToast(data.message);
      } else {
        throw new Error("Failed to add post");
      }
    } catch (error) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData();
    setBlogData((prevData) => ({
      ...prevData,
      desc: data,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Heading title={"Add New Post"} image="/underline.svg" />
      <input type="hidden" name="userId" value={userId} />
      <InputBox
        label="Title"
        id="title"
        name="title"
        type="text"
        value={blogData.title}
        onChange={handleChange}
        required
      />
      <InputBox
        label="Slug"
        id="slug"
        name="slug"
        type="text"
        value={blogData.slug}
        onChange={handleChange}
        required
      />
      <InputBox
        label="Image"
        id="img"
        name="img"
        type="text"
        value={blogData.img}
        onChange={handleChange}
      />
      <CKEditor
        editor={ClassicEditor}
        data={blogData.desc}
        onChange={handleCKEditorChange} 
      />
      <CustomButton>{loading ? "Adding Post..." : "Add"}</CustomButton>
    </form>
  );
};

export default AdminPostForm;
