import React from "react";
import { Link } from "react-router-dom";
import { NotFoundProps } from "../interfaces/NotFoundInterface";

const NotFound: React.FC<NotFoundProps> = ({ page }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full flex flex-col gap-4 items-center justify-center">
      <p className="text-red-500 text-3xl">{page} Not Found</p>
      <p className=" text-8xl">404</p>
      <Link to="/" className="hover:underline text-blue-700 text-xl">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
