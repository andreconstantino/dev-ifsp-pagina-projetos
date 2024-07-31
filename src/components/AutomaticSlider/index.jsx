import React from 'react'
import './styles.css'

export default function AutomaticSlider() {
    return (
        <div className='slider'>
            <div className='slide-track'>
                {[...Array(30)].map((_, index) => (
                    <div className='slide' key={index}>
                        <img src={`src/assets/images/slider/image-${index % 5 + 1}.png`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

