import React from "react";

// Job details object
const jobDetails = {
  title: "Reverse Recruiter",
  description:
    "We are currently seeking skilled and motivated Reverse Recruiters to join our dynamic team at Vilambo Private Limited. As a Reverse Recruiter, you will play a crucial role in assisting our clients with their job search process. Your responsibilities will include tailoring resumes based on job descriptions, extracting contact information of HR professionals and colleagues within target companies, establishing connections within the industry, and reaching out to HR professionals through email for referral requests. Additionally, you will be responsible for maintaining accurate documentation of all applied jobs.",
  responsibilities: [
    "Conduct thorough job searches based on candidates' profiles and qualifications",
    "Tailor resumes to match job descriptions and optimize client profiles for maximum impact",
    "Extract and compile contact information of HR professionals and colleagues within target companies",
    "Establish connections and networks within the industry to expand reach and opportunities",
    "Draft and send personalized email communication to HR professionals, requesting referrals and expressing interest in job opportunities",
    "Maintain thorough and organized documentation of all applied jobs and corresponding communications",
  ],
  requirements: [
    "Excellent writing and reading skills to effectively communicate with HR professionals and clients",
    "Proficient in the latest software technologies to tailor resumes and profiles accordingly",
    "Strong attention to detail and ability to accurately match job descriptions with client qualifications",
    "Proactive and resourceful mindset, with the ability to extract contact information and establish connections",
    "Ability to work independently and meet deadlines in a fast-paced environment",
    "Prior experience in recruitment or HR is preferred, but not required",
  ],
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScXKtO_yF6aEnIZHde1zG7UtsvRVWelSKxEXxcybO2-gtwVvg/viewform?usp=sf_link",
};

const JobApplication = () => {
  return (
    <section
      className="py-20 bg-gray-100 dark:bg-gray-900"
      id="job-application"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
          Apply for {jobDetails.title} Position
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Description Column */}
          <div className="lg:w-1/2">
            <div
              className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 overflow-y-auto"
              style={{ maxHeight: "800px" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Job Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {jobDetails.description}
              </p>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">
                Responsibilities:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
                {jobDetails.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">
                Requirements:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                {jobDetails.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form Column */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
              <iframe
                src={jobDetails.googleFormUrl}
                width="100%"
                height="800px"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Job Application Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplication;
