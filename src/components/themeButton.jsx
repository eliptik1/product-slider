import React from "react";
import { useState, useEffect } from 'react';

export const ThemeButton = () => {
    const [theme, setTheme] = useState("light")
    useEffect(()=>{
        if(theme === "dark"){
        document.documentElement.classList.add("dark")
        } else {
        document.documentElement.classList.remove("dark")
        }
    }, [theme])
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    
    return (
      <button onClick={handleThemeSwitch} className='mt-4 px-1 sm:px-3 p-1 sm:p-[5px] sm:text-[17px] font-montserrat flex gap-2 border-[1px] rounded-md border-black dark:border-white group hover:bg-black dark:hover:bg-white'>
            <svg className="group-hover:fill-white dark:fill-white dark:group-hover:fill-black" width="24px" height="24px" viewBox="0 0 24 24">
                <path xmlns="http://www.w3.org/2000/svg" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
            </svg>
            <div className="group-hover:text-white dark:text-white dark:group-hover:text-black"> DARK MODE </div>
      </button>
    )
}