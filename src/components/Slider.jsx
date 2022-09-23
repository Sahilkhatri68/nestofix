import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import banner from "./Images/banner.jpg"
import banner2 from "./Images/b2.webp"
import banner3 from "./Images/b3.webp"
import banner4 from "./Images/b4.webp"
import "./slider.css"
  
function Slider() {
    
    return (
        <div className='mainSlider'>
            <img src={banner4} style={{width:"100%"}}/>
            
        </div>
    )
}

export default Slider