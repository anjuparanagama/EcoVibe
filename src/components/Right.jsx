import React from "react";
import Circle from './Cicle';

export default function Right() {
    return (
        <div className="relative justify-center items-center z-30">
            <div className="flex w-11/12 md:mt-32  md:mr-5 md:basis-1/2">
                <div className="flex justify-center items-center relative  z-50 w-full">
                    <img
                        className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[800px]   h-auto max-h-[646px] relative z-30"
                        src="/images/right.png"
                        alt="right image"/>

                    <div><Circle/></div>
                </div>
            </div>
        </div>
    );
}