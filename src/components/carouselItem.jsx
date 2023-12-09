import React from "react";

export const CarouselItem = ({item}) => {
    return (
    <li className="card snap-start h-[340px] flex flex-col justify-center items-center w-full">
        <div>
            <img className="w-[250px] h-[250px] object-cover select-none" src={item.image} alt="image" draggable="false" />
            <div>
                <h2 className="mt-2">{item.description}</h2>
                <span>Lorem, ipsum dolor.</span>
            </div>
        </div>
    </li>
    )
}