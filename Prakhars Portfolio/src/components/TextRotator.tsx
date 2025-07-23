import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-4xl [text-wrap:balance] text-white">
        I am a {portfolioConfig.title} 
        
      </div>
    </div>
  );
}

export default TextRotator;
