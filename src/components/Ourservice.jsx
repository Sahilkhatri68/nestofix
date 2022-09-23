import React from 'react'
import "./ourservice.css"
import { CarouselWrapper } from "react-pretty-carousel";
// import { CarouselWrapper, prev, next, moveTo, switchTo, presentIndex } from "react-pretty-carousel";
function Ourservice() {
    return (
        <div>
            <div className="">
                <CarouselWrapper items={3} mode="gallery">
                    <div className="image image1"></div>
                    <div className="image image2"></div>
                    <div className="image image3"></div>
                    <div className="image image4"></div>
                    <div className="image image5"></div>
                    <div className="image image6"></div>
                </CarouselWrapper>
            </div>
        </div>
    )
}

export default Ourservice