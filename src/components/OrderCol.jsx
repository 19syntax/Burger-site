import React from "react";
import { motion } from "framer-motion";

const OrderCol = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      className="w-full md:h-187.5 mt-24 md:flex gap-10 "
    >
      <div className="md:w-[50%] w-full md:h-187.5 h-125 flex items-end md:p-8 p-4 border-4 border-[#E9E3DC] rounded-[30px] bg-[url('../src/assets/burger5.jpg')] bg-cover">
        <div className="md:w-96.5  p-5 bg-[#1E1E1E] rounded-xl">
          <h3 className="md:text-[30px] text-[20px]">
            SALT & VINEGAR FRENCH FRIES
          </h3>
          <p className="md:text-[15px] text-[12px] mt-3 text-[#B3A0CD] cursor-pointer">
            ORDER ONLINE
          </p>
        </div>
      </div>
      <div className="md:w-[50%] w-full md:h-187.5 h-125 flex items-end md:p-8 p-4 md:m-0 mt-10 border-4 border-[#E9E3DC] rounded-[30px] bg-[url('../src/assets/burger1.webp')] bg-cover">
        <div className="md:w-96.5  p-5 bg-[#1E1E1E] rounded-xl">
          <h3 className="md:text-[30px] text-[20px]">
            CRISPY CHICKEN SANDWICH
          </h3>
          <p className="md:text-[15px] text-[12px] mt-3 text-[#B3A0CD] cursor-pointer">
            ORDER ONLINE
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderCol;
