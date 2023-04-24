import React, { useState, useEffect, useCallback } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import pic01 from "../assets/images/pic01.jpg";
import pic02 from "../assets/images/pic02.jpg";
import pic03 from "../assets/images/pic3.jpg";

const Banner = () => {
  const listBanner = [pic01, pic02, pic03];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const autoSlide = false;
  const autoSlideInterval = 3000;

  const next = useCallback(() => {
    setCurrentIndex(
      currentIndex === listBanner.length - 1 ? 0 : currentIndex + 1
    );
  }, [listBanner.length, currentIndex]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next, autoSlideInterval, autoSlide]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {listBanner.map((item, index) => (
          <img key={index} src={item} />
        ))}
      </div>

      <div className="absolute lg:bottom-24 lg:right-20  right-[20rem] bottom-4">
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          {listBanner.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
          transition-all w-2 h-2 lg:w-3 lg:h-3  rounded-full cursor-pointer
          ${
            currentIndex === i
              ? "px-2 lg:px-4 bg-mainColor"
              : "bg-white opacity-80"
          }
        `}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-24 border p-2 rounded-full hover:bg-black hover:opacity-60 duration-200 hidden lg:inline">
        <ChevronDownIcon className="h-10 w-10 text-stone-100 opacity-80 cursor-pointer" />
      </div>
    </div>
  );
};

export default Banner;
