import React, { useState } from "react";
import { Arrow, DoubeQuoteIcon } from "../../../common/appIcons";
import { heroPageData } from "@/data/heroPageData";

var imageSliderAnimationIndex = 0;

const reviews = heroPageData.content4.testimonials;

export default function Testimonials() {
  const [imgDisplay, setImgDisplay] = useState({ transform: "translateX(0%)" });

  const imageSliderAnimation = reviews.map((val, index) => {
    return { transform: "translateX(-" + index * 100 + "%)" };
  });

  const reviewBlock = (review) => {
    return (
      <div className="">
        <div className="flex flex-row items-start gap-2">
          {/* <DoubeQuoteIcon className="hidden sm:block text-stone-400 h-20 w-24" /> */}
          <span className="text-sm md:text-base shrink">
            {review.testimony}
          </span>
        </div>

        <div className="mt-7 sm:flex sm:flex-row gap-2 sm:items-center font-semibold">
          <div className="hidden sm:block h-0.5 rounded-full w-10 bg-stone-300" />
          <span className="sm:ml-3 capitalize">{review.authorName}, </span>
          <span className="text-sm text-gray-600">{review.designation}</span>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        {heroPageData.content4.heading2}
        <div className="flex flex-row items-center gap-5">
          <button
            onClick={() => {
              let temp_val;
              temp_val =
                imageSliderAnimationIndex > 0
                  ? imageSliderAnimationIndex - 1
                  : imageSliderAnimation.length - 1;
              imageSliderAnimationIndex = temp_val;
              setImgDisplay(imageSliderAnimation[temp_val]);
            }}
            className="text-gray-800 hover:text-white transform duration-300 bg-opacity-0 hover:bg-opacity-100 bg-gray-700 border-2 border-stone-300 hover:border-gray-700 rounded-full p-2.5 h-10 w-10 flex items-center justify-center"
          >
            <Arrow className="transform rotate-180" />
          </button>
          <button
            onClick={() => {
              let temp_val =
                imageSliderAnimationIndex + 1 < imageSliderAnimation.length
                  ? imageSliderAnimationIndex + 1
                  : 0;

              imageSliderAnimationIndex = temp_val;
              setImgDisplay(imageSliderAnimation[temp_val]);
            }}
            className="text-gray-800 hover:text-white transform duration-300 bg-opacity-0 hover:bg-opacity-100 bg-gray-700 border-2 border-stone-300 hover:border-gray-700 rounded-full p-2.5 h-10 w-10 flex items-center justify-center"
          >
            <Arrow className="" />
          </button>
        </div>
      </div>
      <div
        className={
          "flex flex-row w-full flex-nowrap mt-10 overflow-hidden -mx-5"
        }
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            style={{
              ...imgDisplay,
              minWidth: "100%",
            }}
            className="transition duration-500 ease-in-out delay-100"
          >
            {reviewBlock(review)}
          </div>
        ))}
      </div>

      <div className="mt-6 px-4 flex flex-row justify-between items-center w-full"></div>
    </div>
  );
}
