import Heading from "../../components/heading/Heading";
import { AboutData } from "../../lib/constant";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { RightArrowrIcon } from "../../lib/SVG";
import Image from "next/image";

export const metadata = {
  title: "About Me - Shwetang Prajapati",
  description:
    "Crafting exceptional software solutions. Learn more about my skills and experience as a software developer.",
};

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="  py-12 mx-auto ">
        <div className=" mx-auto flex  py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start md:text-left mb-16 md:mb-0">
            <Heading title="About me" image="/underline.svg" />

            <p className="mb-4 sm:text-xl text-lg   text-gray-900">
              Welcome to <strong>Shwetang&apos;s</strong> corner of the digital
              world!{" "}
            </p>
            <p className="mb-4 sm:text-xl text-lg text-gray-900">
              I&apos;m a <strong>software developer</strong> with more than{" "}
              <strong>2.5 years</strong> of hands-on experience in crafting
              exceptional software solutions.
            </p>

            <p className="mb-4 sm:text-xl text-lg   text-gray-900">
              Currently, I am thriving in my role as a{" "}
              <strong>software developer</strong> at{" "}
              <strong>DEVtrust - DevTech Enterprises Private Limited</strong>,
              based in the vibrant city of Lucknow, India.
            </p>
            <i className="mb-4 sm:text-xl text-lg   text-gray-900">
              &apos;Lifelong learner who understands the importance of
              authenticity and building relationships.&apos;
            </i>
          </div>

          <Image src="/about.svg" width={512} height={288} alt="about me" />
        </div>

        <Heading title="Education" image="/underline.svg" />
        <p className="mb-4  sm:text-xl text-lg   text-gray-900">
          Here&apos;s what I did in my studies.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {AboutData.map((item, index) => (
            <div key={index} className="p-6 border bg-gray-100 rounded-lg">
              <h2 className="sm:text-2xl text-xl  mb-3 font-bold uppercase text-gray-900 ">
                {item.college}
              </h2>
              <p className=" sm:text-xl text-lg   text-gray-900 mb-2">
                {item.branch}
              </p>
              <p className="  mb-2 sm:text-xl text-lg   text-gray-900">
                {" "}
                {item.year}
              </p>

              <a
                className="text-indigo-500 inline-flex items-center sm:text-xl text-lg   hover:text-indigo-600 hover:scale-105"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Know more
                <RightArrowrIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
