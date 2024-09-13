"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { InstagramIcon, LoaderCircleIcon } from "lucide-react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const FooterItem = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

const FooterBlockItem = ({ title, items }) => {
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

const footerBlocks = [
  {
    id: 1,
    title: "Navigation",
    items: [
      {
        id: 1,
        text: "Home",
        link: "/",
      },
      {
        id: 2,
        text: "About",
        link: "/#about",
      },
      {
        id: 3,
        text: "Careers",
        link: "/careers",
      },
      {
        id: 4,
        text: "Contact",
        link: "/#contact",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    items: [
      {
        id: 1,
        text: "Human-centric Interaction AI Bots",
        link: "/#services",
      },
      {
        id: 2,
        text: "Reverse Recruiting",
        link: "/#services",
      },
    ],
  },
];

const FooterBlock = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_obadbum",
        "template_kasuzen",
        form.current,
        "PP0n_lkIudkdNTMXn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully");
          e.target.reset();
          setLoader(false);
        },
        (error) => {
          console.log(error.text);
          setMessage("An error occured, Please try again");
        }
      );
  };
  return (
    <footer
      className="pt-16 md:pt-20 bg-gray-100 dark:bg-gray-800"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        {/* <div className="w-full text-gray-700 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 border-b border-b-gray-200 dark:border-b-gray-700">
          <div className="flex">
            <Link href="#">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-[80px] lg:h-[80px] h-[80px]"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Lubumbashi-RDC</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
            <span>+243 ......</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <span>info@dcssarl</span>
          </div>
        </div> */}
        <div className="grid gird-cols-1 lg:grid-cols-2">
          <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-10 gap-8 py-10 text-gray-700 dark:text-gray-300">
            {footerBlocks.map((footerBlock) => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))}
          </nav>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Contact Us
            </h2>
            {message && <span className="text-green-600">{message}</span>}

            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                required
                className="w-full outline-none px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-100"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full outline-none px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-100"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                required
                className="w-full outline-none px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 h-24 resize-none text-gray-100"
                placeholder="Your Message"
              ></textarea>
              <button
                className="w-full py-2 px-4 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition duration-300 ease-in-out"
                disabled={loader}
              >
                {loader ? "Sending...." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center sm:justify-between py-3 border-t border-gray-200 dark:border-t-gray-700 text-gray-700 dark:text-gray-300 mt-1">
          <div className="flex text-center sm:text-left sm:min-w-max">
            <p> © 2024 Vilambo Private Limited. All right reserved </p>
          </div>
          <div className="flex justify-center sm:justify-end w-full gap-3">
            <a
              href="https://linkedin.com/company/vilambo-private-limited"
              aria-label="social link"
              rel="noreferer"
              target="_blank"
            >
              <LinkedInLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/vilamboofficial"
              aria-label="social link"
              rel="noreferer"
              target="_blank"
            >
              <TwitterLogoIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/vilamboofficial/"
              aria-label="social link"
              rel="noreferer"
              target="_blank"
            >
              <InstagramLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
