import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-24" id="about">
      <div className="rounded-lg bg-blue-50 dark:bg-gray-950 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white">
        About Us
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        <div className="flex md:flex-1">
          <Image
            src="/aboutus.jpg"
            alt="working on housing"
            width={1300}
            height={900}
            className="w-full md:h-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2 lg:w-[54%] space-y-12 text-gray-700 dark:text-white">
          <h1 className="text-gray-900 dark:text-white font-semibold text-2xl sm:text-3xl md:text-4xl">
            We help drive your business forward faster
          </h1>
          <p>
            Vilambo Private Limited is a pioneering tech company at the
            crossroads of artificial intelligence and human potential. We
            develop innovative AI solutions that address diverse needs across
            multiple sectors, creating a unique ecosystem where cutting-edge
            technology meets real-world challenges. Founded by tech visionaries,
            we're committed to delivering products and services that drive
            efficiency, enhance user experiences, and unlock growth
            opportunities. Our expert team combines deep technical knowledge
            with a keen understanding of industry trends. Crucially, we're not
            confined to any single niche. Our versatile approach allows us to
            adapt our expertise across various sectors, addressing diverse
            challenges with tailored solutions.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
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
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                Our mission
              </h2>
              <p>
                At Vilambo, our mission is to harness AI's power to transform
                how businesses and individuals interact with technology. We
                strive to enhance human capabilities, not replace them, opening
                new frontiers of efficiency and innovation.
              </p>
            </div>
            <div className="space-y-6 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <span className="rounded-full bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 w-max p-3 flex">
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                Our vision
              </h2>
              <p>
                We envision a future where AI seamlessly integrates with human
                intelligence, driving unprecedented advancements across
                industries. Vilambo aspires to be at the forefront of this
                technological revolution, continuously innovating and adapting
                to emerging needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
