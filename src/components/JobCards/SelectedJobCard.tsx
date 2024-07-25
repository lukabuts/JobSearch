import React from "react";
import CompanyName from "../JobDetails/CompanyNameCard";
import IndustryCard from "../JobDetails/IndustryCard";
import { AnnualSalaryCard } from "../JobDetails/AnnualSalaryCard";
import { JobDetails } from "../JobDetails/JobDetailsCard";
import { JobCardProps } from "../../interfaces/JobCardInterface";

const SelectedJobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="shadow-md mt-5">
      <div className="flex md:flex-row flex-col gap-7 justify-between py-2 md:px-8 px-5 ">
        <div className="flex items-center gap-10">
          <div className="md:flex shrink-0 hidden items-center">
            <img
              src={job.companyLogo}
              alt="company logo"
              className="w-20 h-20 rounded-xl"
              title="Company Logo"
            />
          </div>
          <div className="space-y-2">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 flex-shrink-0 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
              <h2 className="font-medium text-base text-gray-700 hover:underline hover:text-blue-500 transition-colors">
                <a href={job.url} target="_blank">
                  {job.jobTitle}
                </a>
              </h2>
            </div>
            <CompanyName name={job.companyName} />
          </div>
        </div>
        <div className="flex items-center gap-10 justify-between">
          <div className="flex flex-col justify-center gap-2">
            <ul className="gap-4 flex items-center">
              {job.jobType.map((type: string, index: number) => (
                <li
                  className="text-green-600 bg-green-100 text-xs font-bold p-1 rounded-md text-center"
                  key={index}
                  title="Type"
                >
                  {type}
                </li>
              ))}
            </ul>
            <p
              title="Level"
              className="text-yellow-600 bg-yellow-100 text-xs font-bold p-1 rounded-md text-center w-fit"
            >
              {job.jobLevel} Level
            </p>
            <IndustryCard industries={job.jobIndustry} />
            <AnnualSalaryCard
              annualSalaryMax={job.annualSalaryMax}
              annualSalaryMin={job.annualSalaryMin}
              salaryCurrency={job.salaryCurrency}
            />
          </div>
          <div className="flex flex-col justify-center gap-1 text-gray-600 text-xs font-medium ">
            <JobDetails jobGeo={job.jobGeo} pubDate={job.pubDate} />
          </div>
        </div>
      </div>

      <div
        className="py-3 mx-5 md:mx-20 md:py-7 prose max-w-full"
        dangerouslySetInnerHTML={{ __html: job.jobDescription }}
      />
      <div className="text-end md:mr-20 mr-5 pb-5">
        <p className="text-gray-500">
          View Full Job Application{" "}
          <a className="text-blue-500" href={job.url} target="_blank">
            Here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default SelectedJobCard;
