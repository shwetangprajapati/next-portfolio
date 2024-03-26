import React from "react";
import Heading from "../heading/Heading";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blogs }) => {
  return (
    <>
      <Heading title="Blogs" image="./underline.svg" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
        {blogs.map((blog, index) => {
          const dateStr = blog.createdAt;
          const dateObj = new Date(dateStr);
          const year = dateObj.getFullYear();
          const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
          const date = dateObj.getDate();

          return (
            <div key={index} className="rounded-lg ">
              <article className="flex bg-gray-100 transition hover:shadow-xl">
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    dateTime={`${date}-${month}-${year}`} // Only date, without time
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>{year}</span>
                    <span className="w-px flex-1 bg-gray-600"></span>
                    <span>
                      {date}-{month}
                    </span>
                  </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                  <Image
                    width={224}
                    height={224}
                    alt={blog.title}
                    src={blog.img}
                    className="aspect-square  object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="sm:text-2xl text-xl mb-3 font-bold uppercase text-gray-600 line-clamp-1">
                        {blog.title}
                      </h3>
                    </Link>

                    <p className="mt-2 line-clamp-4  sm:text-xl text-lg   text-gray-600 ">
                      {blog.desc}
                    </p>
                  </div>

                  <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="block bg-indigo-500 px-5 py-3 text-center text-xs  font-bold uppercase text-white transition hover:bg-indigo-600"
                    >
                      Read Blog
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
