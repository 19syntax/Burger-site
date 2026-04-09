import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative flex justify-between items-center"
    >
      <span className="md:text-[30px] font-semibold">BURGER HEAVEN</span>
      <span className="md:hidden block" onClick={() => setIsMobile((s) => !s)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 512 512"
          className={`${isMobile ? "text-[#D1EF53]" : ""}`}
        >
          <path
            fill="currentColor"
            d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96m16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16M58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224M384 112a16 16 0 1 1-16 16a16 16 0 0 1 16-16M256 80a16 16 0 1 1-16 16a16 16 0 0 1 16-16m-128 32a16 16 0 1 1-16 16a16 16 0 0 1 16-16"
          />
        </svg>
      </span>
      <ul className="md:flex gap-12 items-center hidden">
        <li className="cursor-pointer hover:text-[#D1EF53]">ABOUT</li>
        <li className="cursor-pointer hover:text-[#D1EF53]">MENU</li>
        <li className="px-6 py-2 bg-[#B3A0CD] hover:bg-[#D1EF53] text-[#1E1E1E] cursor-pointer rounded-md">
          ORDER ONLINE
        </li>
      </ul>

      {isMobile && (
        <ul className="bg-[#D1EF53] text-[#1E1E1E] text-center absolute top-15 w-full gap-12 items-center rounded-xl">
          <li className="p-6 border-b-2 cursor-pointer">ABOUT</li>
          <li className="p-6 border-b-2 cursor-pointer">MENU</li>
          <li className="p-6 border-b-2 bg-[#B3A0CD] text-[#1E1E1E] cursor-pointer">
            ORDER ONLINE
          </li>
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
