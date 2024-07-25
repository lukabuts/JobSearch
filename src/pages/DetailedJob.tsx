import { useContext, useEffect, useState } from "react";

import { Job } from "../types/JobTypes";
import { IsLoadingContext, JobsContext } from "../App";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import NotFound from "./NotFound";
import SelectedJobCard from "../components/JobCards/SelectedJobCard";

const DetailedJob = () => {
  const jobs = useContext(JobsContext);
  const isLoading = useContext(IsLoadingContext);
  const [selectedJob, setSelectedJob] = useState<Job>();
  const { pathname } = useLocation();

  useEffect(() => {
    const splitedPath = pathname.split("/");
    const slug = splitedPath[2];
    if (slug && splitedPath.length === 3) {
      const selected = jobs.filter((job) => job.jobSlug === slug);
      setSelectedJob(selected[0]);
    }
  }, [pathname, jobs]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : selectedJob ? (
        <SelectedJobCard job={selectedJob} />
      ) : (
        <NotFound page="Job" />
      )}
    </>
  );
};

export default DetailedJob;
