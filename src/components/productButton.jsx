import React from "react";
import mysvg from "../Assets/SVG/solar_wallet-money-linear.svg"

export const ProductButton = () => {
    return (
        <button className='mt-16 px-1 sm:px-3 p-1 sm:p-[5px] sm:text-[17px] font-montserrat flex gap-2 border-[1px] rounded-md border-black dark:border-white group hover:bg-black dark:hover:bg-white'>
            <img className="group-hover:invert dark:invert dark:group-hover:invert-0 select-none" src={mysvg} alt=""/>
            <div className="group-hover:text-white dark:text-white dark:group-hover:text-black"> VIEW ALL PRODUCTS </div>
        </button>
    )
}

