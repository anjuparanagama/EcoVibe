import React from "react";

export default function FRectangle(props) {
    return (
        <div  className = "flex justify-center items-center h-full  rounded-lg outline outline-offset-2  outline-1 px-6 py-3"> 
            <img className="w-16 h-16  rounded-full"src = {props.url} alt="icon" />
            <p className="mx-4 px-8 ">{props.text}</p>
        </div>
    )
}
