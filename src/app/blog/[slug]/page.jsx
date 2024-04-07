import { getPost } from "../../../lib/data";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import BlogDetail from "../../../components/blogDetail/BlogDetail";
import BlogCard from "../../../components/blog/BlogCard";
import Heading from "../../../components/heading/Heading";

const getData = async (slug) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/blog/${slug}`,{ cache: 'no-store' });

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

const getBlogsData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/blog`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  const blogsData = await getBlogsData();
  const uniqueBlogs=blogsData.filter((blogs)=>blogs.slug!==slug)
  return (
    <>
      <Navbar />
      <BlogDetail post={post} />
      <Heading title="More blogs" image="/underline.svg" />
      <p className="mb-4  sm:text-xl text-lg   text-gray-900">
        Stay informed with our curated content.
      </p>
      <BlogCard blogs={uniqueBlogs.slice(0, 6)} />
      <Footer />
    </>
  );
};

export default SinglePostPage;
