import React from "react";
import Circle from './Cicle';

export default function Right() {
    return (
        <div className="relative justify-center items-center z-30">
            <div className="flex w-11/12 md:mt-20 dx:mt-32 md:mr-5 md:basis-1/2">
                <div className="flex justify-center items-center relative  z-50 w-full">
                    <img
                        className="w-[400px] sm:ml-0 ml-4 sm:w-[500px] md:w-[750px] lg:w-[750px]  h-auto max-h-[800px] relative z-30"
                        src="/images/right.png"
                        alt="right image"/>

                    <div><Circle/></div>
                </div>
            </div>
        </div>
    );
}