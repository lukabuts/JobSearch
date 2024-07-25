import React from "react";
import { jobDetailsProps } from "../../interfaces/JobDetailsCardInterface";

export const JobDetails: React.FC<jobDetailsProps> = ({ jobGeo, pubDate }) => {
  function timeDifference(current: Date, previous: Date): string {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current.getTime() - previous.getTime();

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " sec";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " min";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hr";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " d";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " mnth";
    } else {
      return Math.round(elapsed / msPerYear) + " yr";
    }
  }

  const currentDate = new Date();
  return (
    <>
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p>{jobGeo}</p>
      </div>
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="text-nowrap">
          {timeDifference(currentDate, new Date(pubDate))}
        </p>
      </div>
    </>
  );
};
