import BlogCard from "../components/blog/BlogCard";
import HeroSection from "../components/herosection/HeroSection";
import ProjectCards from "../components/project/ProjectCards";
import Skills from "../components/skills/Skills";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TopLoader from "../components/toploader/TopLoader";
export const metadata = {
  title: "Software Developer | Shwetang Prajapati",
  description:
    "Showcase my expertise in software development with a captivating portfolio website. Explore my projects, skills, and blogs. Get in touch today!",
};

const getData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/api/blog`, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const Home = async () => {
  const posts = await getData();

  return (
    <>
      <TopLoader />
      <Navbar />
      <HeroSection />
      <ProjectCards />
      <Skills />
      <BlogCard blogs={posts.slice(0, 6)} />
      <Footer />
    </>
  );
};

export default Home;
