import React from "react";

export default function Circle() {
    return (
        <div className="absolute -top-4 -right-8 bg-white rounded-full p-2 pt-10 z-20">
        <img
            className="w-[80px] h-[80px] animate-slowSpin sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] hidden md:block"
            src="/images/Font circle.png"
            alt="Circle image"/>
        </div>
    )
}

  