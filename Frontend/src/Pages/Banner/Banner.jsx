import React from "react";
import banner from "../../images/banner.jpg"

const Banner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row dark:bg-slate-900 dark:text-white pt-12">
      {/* Banner Content */}
      <div className="md:w-1/2 w-full md:mt-32 mt-12 order-2 md:order-1">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold md:text-left text-center">
            Hello, welcome here to learn something{" "} 
            <span className="text-pink-600">new everyday!!!</span>
          </h1>
          <p className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sed error aut quam quas adipisci delectus non ullam fuga voluptatum.
          </p>
          {/* Input */}
          <label className="border rounded-md md:w-11/12 py-2 px-1 flex items-center gap-2">
            Email :
            <input type="text" className="dark:bg-slate-900 dark:text-white grow outline-none" placeholder="" />
          </label>
        </div>
          {/* Button */}
          <button className="btn btn-secondary mt-3">Secondary</button>
      </div>
      {/* Banner Image */}
      <div className="md:w-1/2 w-full order-1  ">
        <img src={banner} alt="banner_image" />
      </div>
    </div>
  );
};

export default Banner;
