import React from "react";
import { IndustryCardProps } from "../../interfaces/IndustryCardInterface";

const IndustryCard: React.FC<IndustryCardProps> = ({ industries }) => {
  return (
    <ul className="gap-4 flex items-center">
      {industries.map((industry, index) => (
        <li
          key={index}
          className="text-blue-600 bg-purple-100 text-xs font-bold p-1 rounded-md text-center md:w-full"
          dangerouslySetInnerHTML={{ __html: industry }}
          title="Industry"
        />
      ))}
    </ul>
  );
};

export default IndustryCard;
