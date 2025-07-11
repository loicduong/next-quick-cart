"use client";

import arrowIcon from "@/assets/icons/arrow.svg";
import headerHeadphoneImage from "@/assets/images/header-headphone.png";
import headerMacbookImage from "@/assets/images/header-macbook.png";
import headerPlaystationImage from "@/assets/images/header-playstation.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeaderSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: headerHeadphoneImage,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: headerPlaystationImage,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: headerMacbookImage,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
            >
              <div className="md:pl-8 mt-10 md:mt-0">
                <p className="md:text-base text-brink-pink-600 pb-1">{slide.offer}</p>

                <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">{slide.title}</h1>

                <div className="flex items-center mt-4 md:mt-6">
                  <button className="md:px-10 px-7 md:py-2.5 py-2 bg-brink-pink-600 rounded-full text-white font-medium">
                    {slide.buttonText1}
                  </button>

                  <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                    {slide.buttonText2}

                    <Image className="group-hover:translate-x-1 transition" src={arrowIcon} alt="arrow icon" />
                  </button>
                </div>
              </div>

              <div className="flex items-center flex-1 justify-center">
                <Image
                  className="md:w-72 w-48"
                  src={slide.imgSrc}
                  alt={`Slide ${slide.id}`}
                />
              </div>
            </div>
          ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-brink-pink-600" : "bg-gray-500/30"}`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
      </div>
    </div>
  )
}