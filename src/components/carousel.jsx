import React, { useState } from "react";
import { CarouselItem } from './carouselItem';

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    let items = [
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-Y.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-W.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-W.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-W.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-W.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-W.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-W.jpg")
        },
        {
            description: "test-description",
            image: require("../Assets/Images/EG009/EG009-R.jpg")
        }
    ]

    return (
    <div style={{maxWidth: "1700px"}} className="wrapper relative w-full m-auto flex items-center">

        <svg onClick={()=>{}} className="w-10 h-min cursor-pointer text- fill-zinc-800 hover:fill-zinc-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="-100 -960 660 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
        </svg>
       
        <ul className="carousel w-full overflow-x-scroll grid grid-flow-col gap-2">
            {items.map(item => {
                return <CarouselItem item={item}/>
            })}
        </ul>

        <svg className="w-10 h-min rotate-180 cursor-pointer fill-zinc-800 hover:fill-zinc-600" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="-100 -960 660 960" width="24"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
        </svg>
    </div>
    )
}