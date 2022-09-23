import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import banner from "./Images/banner.jpg"
import banner2 from "./Images/b2.webp"
import banner3 from "./Images/painter2.jpg"
import banner5 from "./Images/painter3.webp"
// import banner4 from "./Images/b4.webp"
import banner4 from "./Images/card1.jpg"
import "./slider.css"
import Carousel from 'react-bootstrap/Carousel';
function Slider() {

    return (
        <div className='mainSlider'>
            {/* <img src={banner4} style={{width:"100%"}}/> */}
            <Carousel fade className="mainCarosel">
                <Carousel.Item>
                    <img
                        className="caroImg"
                        src={banner4}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroImg"
                        src={banner3}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="caroImg"
                        src={banner5}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider