import BlogCard from "../../components/blog/BlogCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Heading from "../../components/heading/Heading";

export const metadata = {
  title: "Blogs on - Shwetang Prajapati portfolio",
  description:
    "Explore insightful blogs on Shwetang Prajapati's portfolio, unveiling exceptional software solutions.",
};
const getData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/blog`, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <>
      <Navbar />
      <Heading title="Blogs" image="/underline.svg" />
      <p className="mb-4  sm:text-xl text-lg   text-gray-900">
        Stay informed with our curated content.
      </p>
      <BlogCard blogs={posts} />
      <Footer />
    </>
  );
};

export default BlogPage;
