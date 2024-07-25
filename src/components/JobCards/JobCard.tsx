import { Link } from "react-router-dom";
import IndustryCard from "../JobDetails/IndustryCard";
import { AnnualSalaryCard } from "../JobDetails/AnnualSalaryCard";
import { JobDetails } from "../JobDetails/JobDetailsCard";
import CompanyName from "../JobDetails/CompanyNameCard";
import { JobCardProps } from "../../interfaces/JobCardInterface";

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div>
      <Link
        to={"./jobs/" + job.jobSlug}
        className="flex flex-col justify-between gap-4 w-full p-5 cursor-pointer border-2 border-gray-200 bg-blue-50 rounded-lg hover:border-blue-400 transition-all md:flex-row"
      >
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
            <div>
              <h2 className="font-medium text-base">{job.jobTitle}</h2>
              <span
                className="text-sm text-gray-700 font-medium hover:underline hover:text-gray-600 "
                dangerouslySetInnerHTML={{ __html: job.jobExcerpt }}
              />
            </div>
          </div>

          <CompanyName name={job.companyName} />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <IndustryCard industries={job.jobIndustry} />

          <AnnualSalaryCard
            annualSalaryMax={job.annualSalaryMax}
            annualSalaryMin={job.annualSalaryMin}
            salaryCurrency={job.salaryCurrency}
          />
        </div>
        <div className="flex flex-row gap-1 text-gray-600 text-xs font-medium md:flex-col md:justify-center">
          <JobDetails jobGeo={job.jobGeo} pubDate={job.pubDate} />
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
