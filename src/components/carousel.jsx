import React, { useState, useRef, useEffect } from 'react';
import { CarouselItem } from './carouselItem';

export const Carousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const carouselRef = useRef(null);

  const handleArrowClick = (btn) => {
    carouselRef.current.scrollLeft += btn.id === 'left' ? -firstCardWith : firstCardWith;
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    carouselRef.current.classList.add('dragging');
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragStop = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove('dragging');
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    carousel.addEventListener('mousedown', handleDragStart);
    carousel.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', handleDragStop);

    return () => {
      carousel.removeEventListener('mousedown', handleDragStart);
      carousel.removeEventListener('mousemove', handleDragging);
      document.removeEventListener('mouseup', handleDragStop);
    };
  }, [isDragging, startX, startScrollLeft]);

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

  const firstCardWith = items.length > 0 ? carouselRef.current?.querySelector('.card').offsetWidth : 0;

  return (
    <div style={{ maxWidth: '1650px' }} className="wrapper relative w-full m-auto flex items-center">
      <svg
        onClick={() => handleArrowClick({ id: 'left' })}
        className="w-10 h-min cursor-pointer text- fill-zinc-700 hover:fill-zinc-500 mr-6"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="-100 -960 660 960"
        width="24"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>

      <ul
        ref={carouselRef}
        className="carousel scroll-smooth snap-x snap-mandatory w-full overflow-x-scroll grid grid-flow-col gap-3 "
      >
        {items.map((item) => (
          <CarouselItem item={item} />
        ))}
      </ul>

      <svg
        onClick={() => handleArrowClick({ id: 'right' })}
        className="w-10 h-min rotate-180 cursor-pointer fill-zinc-700 hover:fill-zinc-500 ml-6"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="-100 -960 660 960"
        width="24"
      >
        <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
      </svg>
    </div>
  );
};