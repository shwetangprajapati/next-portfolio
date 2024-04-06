import { Inter } from "next/font/google";
import "./globals.css";
import TopLoader from "../components/toploader/TopLoader";
import AnimatedCursorComp from "../components/animatedCursor/AnimatedCursorComp";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Software Developer | Shwetang Prajapati",
  description:
    "Showcase my expertise in software development with a captivating portfolio website. Explore my projects, skills, and blogs. Get in touch today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <TopLoader />
          <AnimatedCursorComp />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
