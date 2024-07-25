import { Job } from "../types/JobTypes";
import React, { useContext } from "react";
import { HomeProps } from "../interfaces/HomeInterface";
import JobSearch from "../components/JobSearch/JobSearch";
import LoadingPulse from "../components/Loading/LoadingPulse";
import JobCard from "../components/JobCards/JobCard";
import { IsLoadingContext, JobsContext } from "../App";

const Home: React.FC<HomeProps> = ({
  getData,
  setCount,
  setGeo,
  setIndustry,
  setTag,
  errorMsg,
  lastUpdate,
  count,
}) => {
  const jobs = useContext(JobsContext);
  const isLoading = useContext(IsLoadingContext);
  return (
    <>
      <JobSearch
        getData={getData}
        setCount={setCount}
        setGeo={setGeo}
        setIndustry={setIndustry}
        setTag={setTag}
      />
      {isLoading ? (
        <div className="mt-12 space-y-4">
          {[...Array(count)].map((_, index) => (
            <LoadingPulse key={index} />
          ))}
        </div>
      ) : errorMsg ? (
        <p className="text-red-500 italic mt-5">{errorMsg}</p>
      ) : (
        jobs.length > 0 && (
          <>
            <div className="flex flex-col text-gray-600 self-start mt-5 mb-2">
              <p>Jobs Found: {jobs.length}</p>
              <p>Last Updated: {lastUpdate}</p>
            </div>
            <div className="flex flex-col gap-4">
              {jobs.map((job: Job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </>
        )
      )}
    </>
  );
};

export default Home;
