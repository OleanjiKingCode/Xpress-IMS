import React from "react";

export const ErrorPage: React.FC = () => {
  return (
    <div className="h-screen bg-[#003700] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#ffffff] text-xl lg:text-3xl font-semibold text-center">
          Oops! Something went wrong...
        </h1>
      </div>
    </div>
  );
};
