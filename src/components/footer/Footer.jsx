"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { memo } from "react";

 function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const date = new Date();
  const year = date.getFullYear();
  const phoneNumber = "8968966638";
  const linkedinURL =
    "https://www.linkedin.com/in/shwetang-prajapati-81ab97157/";
  const githubURL = "https://github.com/shwetangprajapati";
  const email = "shwetangprajapati11@gmail.com";

  const socialData = [
    {
      index: "0",
      url: linkedinURL,
      icon: "/linkedin.png",
      title: "Linkedin Shwetang",
    },

    {
      index: "1",
      url: githubURL,
      icon: "/github.png",
      title: "Github Shwetang",
    },
    {
      index: "2",
      url: `https://api.whatsapp.com/send?phone=${phoneNumber}`,
      icon: "/whatsappicon.png",
      title: "WhatsApp Shwetang",
    },
    {
      index: "3",
      url: `tel:${phoneNumber}`,
      icon: "/callicon.png",
      title: "Call Shwetang",
    },
    {
      index: "4",
      url: `mailto:${email}`,
      icon: "/mailicon.png",
      title: "Mail Shwetang",
    },
  ];
  return (
    <>
      {isClient && (
        <footer className="text-gray-900 body-font ">
          <div className="container py-8 mx-auto flex justify-center text-center sm:flex-row flex-col">
            <Link href="/" className="-m-1.5 p-1.5 mx-auto sm:mx-0">
              <span className="sr-only">Your Company</span>
              <Image src="/logo.svg" width={44} height={48} alt="logo" />
            </Link>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © Copyright {year} Shwetang Prajapati
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              {socialData.map((socials, index) => {
                return (
                  <a
                    key={index}
                    href={socials.url}
                    target="_blank"
                    title={socials.title}
                    rel="noopener noreferrer"
                    className="text-gray-900 cursor-pointer mx-auto"
                    style={{ marginRight: "0.5rem" }} // Adjust margin as needed
                  >
                    <img
                      src={socials.icon}
                      alt={socials.title}
                      className="w-6 h-6 hover:scale-110"
                    />
                  </a>
                );
              })}
            </span>
          </div>
        </footer>
      )}
    </>
  );
}
export default memo(Footer);