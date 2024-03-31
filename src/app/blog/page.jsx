import BlogCard from "@/components/blog/BlogCard";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Blogs on - Shwetang Prajapati portfolio",
  description:
    "Explore insightful blogs on Shwetang Prajapati's portfolio, unveiling exceptional software solutions.",
};
const getData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/blog`, {
    next: { revalidate: 3600 },
  });

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
      <BlogCard blogs={posts} />
      <Footer />
    </>
  );
};

export default BlogPage;
