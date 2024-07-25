import React from "react";
import { AnnualSalaryCardProps } from "../../interfaces/AnnualSalaryCardInterface";


export const AnnualSalaryCard: React.FC<AnnualSalaryCardProps> = ({
  annualSalaryMax,
  annualSalaryMin,
  salaryCurrency,
}) => {
  function formatNumber(number: number) {
    return new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 0,
    }).format(number);
  }

  return (
    <>
      {annualSalaryMax && annualSalaryMin && (
        <p
          className="text-xs font-bold text-gray-700 bg-red-100 p-1 rounded-md text-center w-fit"
          title="Annual Salary Information"
        >
          {salaryCurrency} {formatNumber(annualSalaryMin)}-
          {formatNumber(annualSalaryMax)}
        </p>
      )}
    </>
  );
};
