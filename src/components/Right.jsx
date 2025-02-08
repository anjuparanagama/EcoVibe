import React from "react";
import Circle from './Cicle';

export default function Right() {
    return (
        <div className="relative z-30">
            <div className="flex w-11/12 md:mt-12 md:mr-5 md:basis-1/2">
                <div className="flex justify-center items-center relative  z-50 w-full">
                    <img
                        className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-auto max-h-[646px]"
                        src="/images/right.png"
                        alt="right image"/>

                    <div><Circle/></div>
                </div>
            </div>
        </div>
    );
}