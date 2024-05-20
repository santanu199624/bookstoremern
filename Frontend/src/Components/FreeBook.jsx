import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import ProductCard from "./ProductCard";

const FreeBook = () => {
  // Get all the books
  const filteredData = list.filter((data) => data.category === "Free");
  // console.log(filteredData)

  // Slider code

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-6 md:mt-16">
        <div>
          <h1 className="text-2xl font-semibold pb-2 md:text-left text-center">
            Free Offered Courses
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            voluptatem iure reprehenderit illo, ab enim nulla velit voluptatibus
            distinctio eos minus accusantium corrupti voluptas aliquid?
          </p>
        </div>

        {/* Slider */}
        <div>
          <Slider {...settings}>
            {
                filteredData.map((item) => {
                    return(
                        <ProductCard item={item} key={item.id} />
                    )
                })
            }
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
