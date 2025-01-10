import React, { useEffect, useState } from 'react'
import { heroImgDataList } from '../../../data/heroImgData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const ImageSlider = ({children}) => {
    
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
    };

    return (
            <Slider {...settings}>
                {children}
            </Slider>
        // <>
        //     {/* <div className="indicators">
        //         {heroImgDataList.map((_, index) => (
        //             <span
        //                 key={index}
        //                 className={`indicator ${
        //                 index === currentIndex ? "active" : ""
        //                 }`}
        //                 onClick={() => handleIndicatorClick(index)}
        //             ></span>
        //         ))}
        //     </div> */}
            
        // </>
    )
}
