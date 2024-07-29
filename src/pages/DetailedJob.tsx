import { useContext, useEffect, useState } from "react";
import { Job } from "../types/JobTypes";
import { JobsContext, IsLoadingContext } from "../App";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import NotFound from "./NotFound";
import SelectedJobCard from "../components/JobCards/SelectedJobCard";

const DetailedJob = () => {
  const { id } = useParams<{ id: string }>();
  const jobs = useContext(JobsContext);
  const isLoading = useContext(IsLoadingContext);
  const [isJobLoading, setIsJobLoading] = useState<boolean>(true);
  const [selectedJob, setSelectedJob] = useState<Job>();

  useEffect(() => {
    if (isLoading) return;
    const selected = jobs.filter((job) => job.jobSlug === id);
    setSelectedJob(selected[0]);
    setIsJobLoading(false);
  }, [id, jobs, isLoading]);

  if (isJobLoading) return <Loading />;
  if (!selectedJob) return <NotFound page="Job" />;

  return <SelectedJobCard job={selectedJob} />;
};

export default DetailedJob;
