import React from "react";
import { Link } from "react-router-dom";
import list from "../../../public/list.json";
import ProductCard from "../../Components/ProductCard";

const Course = () => {
  // console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="py-28 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nobis,
            at quod odio iure exercitationem fugiat libero repudiandae error
            laborum esse ab porro necessitatibus ut autem iste id quibusdam
            adipisci.
          </p>
          {/* Back button */}
          <Link
            to="/"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700"
          >
            Back
          </Link>
        </div>
        {/* Product Card */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-3">
          {list.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
