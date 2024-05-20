import React from "react";

const ProductCard = ({ item }) => {
//   console.log(item);
  return (
    <>
      <div className="mt-4 m-3 hover:scale-105 duration-200 cursor-pointer ">
        <div className="card  bg-base-100 shadow-xl dark:bg-slate-600 dark:text-white">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">$ {item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white py-2">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
