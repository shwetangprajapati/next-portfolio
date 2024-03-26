import { Inter } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/toploader/TopLoader";
import Head from "next/head";
import AnimatedCursorComp from "@/components/animatedCursor/AnimatedCursorComp";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Software Developer | Shwetang Prajapati",
  description:
    "Showcase my expertise in software development with a captivating portfolio website. Explore my projects, skills, and blogs. Get in touch today!",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <div className="container">
          <TopLoader />
          <AnimatedCursorComp />
          {children}
        </div>
      </body>
    </html>
  );
}
