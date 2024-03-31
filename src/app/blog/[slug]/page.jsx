import { getPost } from "@/lib/data";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
export const dynamic = 'force-dynamic';

const getData = async (slug) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);
  return (
    <>
      <Navbar />
      <section className="overflow-hidden bg-gray-100 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="sm:text-4xl text-3xl  text-gray-900 mb-3 font-bold uppercase text-start">
              {post.title}
            </h1>
          </div>
        </div>
        <Image
          alt={post.title}
          src={post?.img}
          width={624}
          height={388}
          className="object-cover  sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]"
        />
      </section>
      <div className=" my-8">
        <span className="whitespace-nowrap rounded-full bg-indigo-600 px-2.5 py-0.5  sm:text-xl text-lg  text-white ">
          Published: {post.createdAt.toString().slice(4, 16)}
        </span>
      </div>
      <p className="mb-4  sm:text-xl text-lg   text-gray-600 ">{post.desc}</p>
      <Footer />
    </>
  );
};

export default SinglePostPage;
