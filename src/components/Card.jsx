import { motion } from "motion/react";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para,hover="false" }) {
  return (
  
    <motion.div whileHover={{backgroundColor:hover === "true" ? "#7443ff" : "#3F3F46",padding:"25px"}}
      className={`${width}  min-h-[27rem] bg-zinc-800 rounded-xl p-5 flex flex-col justify-between`}
    >
      <div>
        <div className="w-full flex items-center justify-between">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="font-medium text-3xl mt-8">Some heading</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            <h1 className="text-7xl capitalize leading-none tracking-tight font-semibold">
              Start a project
            </h1>
            <button className="px-3 py-2 border-[1px] rounded-full border-zinc-50 mt-5">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-zinc-500 font-medium text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
