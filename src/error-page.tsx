import Button from "antd/es/button";
import React from "react";
import Logo from "./assets/Images/logo.svg";
import NotFound from "./assets/Images/not-found.svg";

export const ErrorPage: React.FC = () => {
  return (
    <div className="h-screen bg-[#003700] relative">
      <div className="pl-10 pt-10">
        <img src={Logo} alt="logo" className="h-[3rem]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={NotFound} alt="not-found" className="my-10 lg:mb-5" />
        <h1 className="text-[#ffffff] text-xl lg:text-3xl font-semibold text-center">
          Oops! Something went wrong...
        </h1>
        <p className="text-[#BAC3D2] text-sm lg:text-lg my-10 text-center">
          Kindly contact the administrator or try again later
          <br /> Thank you
        </p>
        <Button
          type="primary"
          onClick={() => window.history.back()}
          className="py-5 px-10 bg-[#006f01] flex justify-center items-center"
        >
          Return back
        </Button>
      </div>
    </div>
  );
};
