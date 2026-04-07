import React from "react";

const BestSection = () => {
  return (
    <div className="md:mt-24 mt-12 text-center">
      <h1 className="md:text-[60px] text-[30px] text-[#D1EF53]">
        “ THE BEST BURGER I'VE EVER HAD “{" "}
      </h1>
      <div className="w-full h-125.75 mt-14 bg-[url('../src/assets/burger2.jpg')] bg-cover border-4 border-[#E9E3DC] rounded-[30px]"></div>
      <div className="md:mt-28 mt-14 text-center">
        <h1 className="md:w-223.75 mx-auto md:text-[70px] text-[35px] leading-[101.9%] mb-6">
          ORDER ONLINE OR COME VISIT US TODAY
        </h1>
        <button className="bg-[#D1EF53] hover:bg-[#B3A0CD] border-[#E9E3DC] text-[#1E1E1E] px-6 py-3 md:m-0 mx-auto cursor-pointer font-medium border-4">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default BestSection;
