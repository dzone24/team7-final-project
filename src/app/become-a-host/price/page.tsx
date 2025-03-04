"use client";
import { MdExpandMore } from "react-icons/md";

import { PriceCounter } from "../../../components/PriceCounter";

export default function Price() {
  return (
    <div className="container mx-auto flex justify-center items-center pt-[373px] animate-fade-left">
      <div className=" w-[630px] h-[480px] ">
        <h1 className="text-3xl font-medium mb-2">Now, set your price </h1>
        <p>You can change it anytime.</p>
        <div className="  rounded-xl h-[30px]  flex justify-center items-center mt-32 mb-3">
          <div className="">
            <PriceCounter />
          </div>
        </div>
      </div>
    </div>
  );
}
