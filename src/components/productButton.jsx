import React from "react";
import mysvg from "../Assets/SVG/solar_wallet-money-linear.svg"

export const ProductButton = () => {
    return (
        <button className='mt-16 px-1 sm:px-3 p-1 sm:p-[5px] sm:text-[17px] font-montserrat flex gap-2 border-[1px] rounded-md border-black group hover:bg-black'>
            <img className="group-hover:invert select-none" src={mysvg} alt=""/>
            <div className="group-hover:text-white"> VIEW ALL PRODUCTS </div>
        </button>
    )
}

