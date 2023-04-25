import React from "react";
import { heroCookie } from "../Assets";

function Hero() {
  return (
    <div className="h-screen bg-custom-red-light">
      <div className="flex items-center justify-center lg:flex-nowrap flex-wrap-reverse">
        <div className="lg:ml-9  text-center md:text-left mt-10">
          <p className="text-2xl lg:text-6xl font-light text-custom-red-dark">
            Made from scratch and baked fresh
            <p className="text-3x lg:text-5xl font-bold text-custom-red-dark">
              All Day, Everyday.
            </p>
          </p>
        </div>
        <div className="flex justify-center w-full">
          <img
            className="sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[500px]"
            src={heroCookie}
            alt="chocolate chip cookie"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
