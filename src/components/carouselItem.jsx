import React from "react";

export const CarouselItem = ({item, selectedColor, onColorChange}) => {
    return (
    <li className="card snap-start flex flex-col justify-center items-center w-full  ">
        <div>
            <img className="w-[250px] h-[250px] object-cover select-none rounded-xl mt-14" src={item.image[selectedColor]} alt="image" draggable="false" />
            <div>
                <h2 className="mt-2">{item.description}</h2>
                <span>{item.price}</span>
            </div>

            <div className="color-buttons flex gap-4">
            {Object.keys(item.image).map((color, index) => (
            <button
                key={index}
                onClick={() => onColorChange(color)}
                className={
                    `w-5 h-5 rounded-[50%] mt-5
                    bg-[${index === 0 ? "#E6CA97" : index === 1 ? "#D9D9D9" : "#E1A4A9" }] 
                    ${color === selectedColor ? 'circle-border' : ''}`}
                >
            </button>
        ))}
        </div>
        <div className="mb-10 mt-2">
            {selectedColor == "yellow" ? "Yellow Gold" : selectedColor == "white" ? "White Gold" : "Rose Gold" }
        </div>
        </div>
    </li>
    )
}