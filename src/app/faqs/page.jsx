import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Heading from "../../components/heading/Heading";
import Navbar from "../../components/navbar/Navbar";

const FAQs = () => {
  return (
    <>
      <Navbar />
      <Heading title="Frequently Asked Questions" image="/underline.svg" />
      <p className="mb-4  sm:text-xl text-lg   text-gray-900">
        Answers to commonly asked questions.
      </p>
      <Faq />
      <Footer />
    </>
  );
};

export default FAQs;
