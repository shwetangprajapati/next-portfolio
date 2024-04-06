
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contactForm/ContactForm";
export const metadata = {
  title: "Contact - Shwetang Prajapati",
  description:
    "Get in touch with Shwetang Prajapati for any inquiries or collaborations. Fill out the form to reach out.",
};
export default function Contact() {
  return (
    <>
      <Navbar />
    <ContactForm/>
      <Footer />
    </>
  );
}
