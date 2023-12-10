import React from "react";

export const CarouselItem = ({item, selectedColor, onColorChange}) => {
    return (
    <li className="dark:text-white card snap-start flex flex-col justify-center items-center w-full  ">
        <div>
            <img className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] object-cover select-none rounded-xl mt-14 cursor-pointer hover:scale-110 transition-all" src={item.image[selectedColor]} alt="image" draggable="false" />
            <div>
                <h2 className="mt-4 font-montserrat text-[15px] cursor-pointer origin-left hover:scale-110 transition-all">{item.description}</h2>
                <h2 className="font-montserrat text-[17px] cursor-pointer origin-left hover:scale-110 transition-all">{item.price}</h2>
            </div>

            <div className="color-buttons flex gap-4">
            {Object.keys(item.image).map((color, index) => (
            <button
                key={index}
                onClick={() => onColorChange(color)}
                className={
                    `w-5 h-5 rounded-[50%] mt-5
                    dark:after:border-white
                    ${index === 0 ? 'bg-[#E6CA97] hover:bg-[#e1c284]' : index === 1 ? 'bg-[#D9D9D9] hover:bg-[#cdcdcd]' : 'bg-[#E1A4A9] hover:bg-[#e29398]'}
                    ${color === selectedColor ? 'circle-border' : ''}`}
                >
            </button>
        ))}
        </div>
        <div className="mb-10 mt-4 font-avenir text-xs">
            {selectedColor === "yellow" ? "Yellow Gold" : selectedColor === "white" ? "White Gold" : "Rose Gold" }
        </div>
        </div>
    </li>
    )
}