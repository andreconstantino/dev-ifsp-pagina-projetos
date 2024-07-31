import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './styles.css'

export default function Slider({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider-container-main">
            <button onClick={prevSlide}>
                <IoIosArrowBack size={19} />
            </button>
            <div className="image-container">
                <img src={images[currentIndex]} />
            </div>
            <button onClick={nextSlide}>
                <IoIosArrowForward size={19} />
            </button>
        </div>
    )
}

