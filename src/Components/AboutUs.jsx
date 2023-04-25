import React from "react";
import { aboutUs, aboutUsLogo } from "../Assets";

function AboutUs() {
  return (
    <div className="bg-custom-red-light" id="aboutus">
      <div>
        <p className="text-5xl font-bold text-custom-red-dark text-center py-10">
          About Us
        </p>
      </div>
      <div className="pb-20">
        <div className="flex justify-center items-center ">
          <img
            className="w-[350px] 	 md:border-solid border-8 border-custom-red-dark rounded"
            src={aboutUs}
          />
        </div>
        <div>
          <p className="text-custom-red-dark mt-10 px-4 leading-7 md:px-36 lg:px-72">
            Diddy Riese Cookies first opened its doors in 1983 and has been
            serving high quality cookies, brownies and ice cream – at very
            reasonable prices – to the Los Angeles community ever since. We are
            known far and wide for the original custom-made ice cream sandwich,
            first featured in 1995. Choose from a variety of ten freshly baked
            cookies and twelve flavors of Dreyer’s premium grand ice cream. Our
            mission is to sell high quality desserts at very affordable prices.
            We are known for our ability to supply larger orders of cookies and
            brownies quickly and affordably to both private and commercial
            parties – ranging anywhere from one dozen to 100 dozen and beyond.
            Please see our catering menu for more info. Stop by today and try
            one of our famous ice cream sandwiches, cookies or brownies. And,
            please think of Diddy Riese when planning your next occasion. We
            would be delighted to help make your event a great success!
          </p>
          <p className="font-bold text-custom-red-dark mt-10 px-4 leading-7 md:px-36 lg:px-72">
            Oh, in case you were wondering about the name, Diddy Riese is
            proudly named in honor of our beloved grandmother.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
