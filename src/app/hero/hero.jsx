"use client";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <section
        className="bg-gray-100 dark:bg-[#3C4043] py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative"
        id="home"
      >
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center flex flex-col items-center space-y-10">
            {/* <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
              Vilambo
            </span> */}
            <h1 className="text-2xl md:text-4xl lg:text-4xl/tight xl:text-5xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
              Crafting Technology Solutions That Matter, Across Industries and
              Individuals
            </h1>
            <p className="text-base text-gray-700 dark:text-white text-center max-w-xl">
              We specialize in developing targeted technological solutions that
              address real-world needs. Our diverse portfolio of products and
              services empowers businesses to thrive and individuals to excel in
              an ever-evolving digital landscape.
            </p>
            <div className="flex justify-center">
              <Link
                href="/#services"
                className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-orange-600 text-white hover:bg-opacity-80"
              >
                Explore Our Services
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
