import React from "react";
import Burger from "../assets/Burgers.webp";

const Hero = () => {
  return (
    <>
      <div>
        <h1 className="md:text-[107.09px] text-[40px] leading-[88.9%] tracking-[-2%] text-center mt-24">
          NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT
        </h1>
        <img src={Burger} alt="Burger" className="-mt-10" />
      </div>

      <div className="md:flex items-center mt-24 bg-[#D1EF53] text-[#1E1E1E] md:p-17.5 p-6.25 rounded-md">
        <h1 className="md:w-[50%] w-full md:text-[70px] text-[32px] md:text-start text-center leading-[88.9%] tracking-[-2%] font-semibold mb-5">
          THE BURGER ABOVE ALL BURGERS
        </h1>
        <div className="md:w-[40%] w-full flex flex-col items-start gap-12">
          <p className="custom-sans font-bold text-justify text-xl font-[Inter]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
            ornare neque.
          </p>
          <button className="bg-[#E9E3DC] hover:bg-[#B3A0CD] hover:border-[#E9E3DC] text-[#1E1E1E] px-6 py-3 md:m-0 mx-auto cursor-pointer font-medium border-4">
            ABOUT US
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
