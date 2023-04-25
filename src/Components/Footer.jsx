import React from "react";
import { logo } from "../Assets";

function Footer() {
  return (
    <div className="bg-custom-red-dark py-10">
      <div className="text-white text-center">
        <p className="font-bold">Location</p>
        <p className="">926 Broxton Avenue | Westwood, CA | 310.208.0448</p>
        <p>Unofficial Website</p>
        <div className="flex justify-center mt-2">
          <img
            className="w-[75px] md:border-solid border-8 border-white rounded"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
