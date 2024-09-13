import React from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  GraduationCap,
} from "lucide-react";

const JobCard = ({ title, location, type, description }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4 space-x-4">
      <span className="flex items-center">
        <MapPin size={18} className="mr-1" /> {location}
      </span>
      <span className="flex items-center">
        <Clock size={18} className="mr-1" /> {type}
      </span>
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
    <button className=" text-blue-600 dark:text-blue-400 font-semibold hover:underline">
      <a href="/careers/applicationform" className=" flex items-center">
        Apple Here <ArrowRight size={18} className="ml-1" />
      </a>
    </button>
  </div>
);

const CulturePoint = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    {icon}
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Job Search Speacilist",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our team to develop cutting-edge AI solutions for businesses across industries.",
    },
    {
      id: 2,
      title: "Job Search Speacilist Intern",
      location: "Remote",
      type: "Internship",
      description:
        "Help revolutionize the job search process with our innovative reverse recruiting approach.",
    },
    // Add more job openings as needed
  ];

  const culturePoints = [
    {
      icon: <Briefcase size={40} className="text-blue-500" />,
      title: "Innovation-Driven",
      description:
        "We encourage creative thinking and novel approaches to problem-solving.",
    },
    {
      icon: <MapPin size={40} className="text-green-500" />,
      title: "Flexible Work",
      description:
        "Enjoy the freedom to work remotely or from our vibrant offices.",
    },
    {
      icon: <Users size={40} className="text-purple-500" />,
      title: "Collaborative Environment",
      description:
        "We foster a culture of teamwork and open communication, where every voice is valued and heard.",
    },
    // {
    //   icon: <GraduationCap size={40} className="text-orange-500" />,
    //   title: "Continuous Learning",
    //   description:
    //     "We support your professional growth with ongoing training, workshops, and opportunities to expand your skills.",
    // },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900" id="careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Careers
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Join Our Team of Specialists
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            At Vilambo, we're always looking for talented individuals to help us
            craft technology solutions that matter.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Current Openings
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Our Culture
          </h3>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {culturePoints.map((point, index) => (
              <CulturePoint key={index} {...point} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
