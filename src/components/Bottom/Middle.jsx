import React from "react";

export default function BMiddle() {
  return (
    <div className="m-auto bg-[url('images/mbm.jpeg')] bg-center bg-cover h-[550px] w-full" >
        <div className="p-10 pb-[150px]">
        <h1 className="text-[48px] leading-[60px] ">Get inspired from our <br/> Instagram</h1>
        <p className="text-[14px] pt-4">If you use the hashtag #bloomey on instagram,<br/> well spotlight you.</p>
        
        <button className="mt-5 flex flex-row gap-3 bg-black text-white px-[20px] rounded-2xl py-[3px]"> Check it Out 
          <img className="h-[20px] w-[20px]" src="images/mb.png"/> 
        </button>

        </div>
    </div>
  );
}