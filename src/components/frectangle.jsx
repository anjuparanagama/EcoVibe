import React from "react";

export default function FRectangle(props) {
    return (
        <div  className = "flex justify-center items-center h-full cursor-pointer rounded-lg outline outline-offset-2  outline-1 px-6 py-3 hover:scale-105 transition-transform duration-500"> 
            <img className="w-16 h-16  rounded-full"src = {props.url} alt="icon" />
            <p className="mx-4  "><span className="font-bold">{props.title}</span>{props.text}</p>
        </div>
    )
}
