import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#B3A0CD] text-[#1E1E1E] mt-24  rounded-xl">
      <div className="md:flex justify-between md:p-17.5 p-8.5 items-start">
        <h1 className="w-33.75 leading-[96.9%] text-[30px]">BURGER HEAVEN</h1>
        <div className="md:m-0 my-10">
          <h1>MORE</h1>
          <ul className="custom-sans font-medium mt-2">
            <li>About</li>
            <li>Menu</li>
            <li>Locations</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h1>HOURS</h1>
          <ul className="custom-sans font-medium mt-2">
            <li>Opens from</li>
            <li>11AM to</li>
            <li>11PM daily</li>
          </ul>
        </div>
        <div className="my-10">
          <h1 className="">JOIN OUR NEWSLETTER</h1>
          <div className="border p-2 mt-3 rounded-md">
            <input type="email" className="text-[12px] font-medium outline-0" />
            <input
              className="text-[12px] hover:text-[#D1EF53] cursor-pointer font-medium"
              type="button"
              value="SUBMIT"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between md:px-17.5 px-8.5 pb-10">
        <h1 className="custom-sans md:text-[15px] text-[12px] font-normal">
          Copyright Burger Heaven
        </h1>
        <p className="custom-sans md:text-[15px] text-[12px] font-normal">
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
