"use client";
import dynamic from "next/dynamic";
import animationData from "../../../public/stock-market.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Scene() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} className="w-60 h-60 md:w-80 md:h-80" />
    </div>
  );
}
