"use client";
import { CheckCircle } from "lucide-react";

const ServiceCard = ({ title, description, points }) => {
  return (
    <div className="flex flex-col p-6 space-y-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <span className="text-gray-700 dark:text-gray-200">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: "Human-centric Interaction AI Bots",
    description:
      "Revolutionize your business operations with our intelligent AI solutions that put human needs at the forefront.",
    points: [
      "Tailored Intelligence: Custom AI bots and agents designed for your unique business challenges.",
      "Human-AI Collaboration: Augment your team's capabilities without replacing human expertise.",
      "Adaptive Learning: AI models that evolve with your business, continuously improving.",
      "Scalable Solutions: Flexible AI tools that grow with your business, from startup to enterprise.",
      "Real-Time Insights: Instant access to data-driven analytics for informed decision-making.",
      "Seamless Integration: Smooth implementation with your existing systems.",
      "Empowering Innovation: Automate routine tasks, freeing your team to focus on strategic initiatives.",
    ],
  },
  {
    id: 2,
    title: "Recruform: Reverse Recruiting Service",
    description:
      "Transform your job search experience with our innovative reverse recruiting approach.",
    points: [
      "Proactive Job Applications: We apply to positions on your behalf, saving you time and stress.",
      "ATS Optimization: Resumes tailored to pass through Applicant Tracking Systems.",
      "Personalized Service: Dedicated account managers and specialized resume writers.",
      "Comprehensive Support: LinkedIn optimization, interview preparation, and networking guidance.",
      "Data-Driven Approach: Leverage industry-specific keywords and data-informed resume formats.",
      "Strategic Outreach: Active engagement with hiring managers at your target companies.",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="rounded-lg bg-blue-50 dark:bg-gray-950 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 dark:text-white">
            Services
          </div>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Empowering businesses and individuals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Our services are tailored to meet the evolving needs of the modern
            digital landscape.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
