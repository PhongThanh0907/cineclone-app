import React from "react";
import star from "../assets/images/icon-start.png";

const ButtonLoading = () => {
  return (
    <div className="h-20 w-20 relative">
      <img className="w-full h-full" src={star} alt="" />
      <span className="circle h-full w-full absolute top-0"></span>
    </div>
  );
};

export default ButtonLoading;
