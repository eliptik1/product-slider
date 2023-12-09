import React from "react";

export const CarouselItem = ({item}) => {
    return (
    <li className="card h-[340px] flex flex-col justify-center items-center">
            <img className="w-[250px] h-[250px] object-cover" src={item.image} alt="image" />
        
        <h2 className="mt-2">{item.description}</h2>
        <span>Lorem, ipsum dolor.</span>
    </li>
    )
}