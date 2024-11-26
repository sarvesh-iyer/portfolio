import React, { useEffect, useState } from 'react'
import { heroImgDataList } from '../../../data/heroImgData'


export const ImageSlider = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    // setInterval for auto-play slides
    useEffect(() => {
      let interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === heroImgDataList.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => {
        clearInterval(interval)
      }
    }, [])

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };
    
    return (
        <>
            <div className="image-container">
                <picture>
                    {/* <source media="(min-width:1250px)" type="image/webp" srcSet={pic1_b8srcr_c_scalew_1380} />
                    <source media="(min-width:1024px)" type="image/webp" srcSet={pic1_b8srcr_c_scalew_1205} />
                    <source media="(min-width:950px)" type="image/webp" srcSet={pic1_b8srcr_c_scalew_924} />
                    <source media="(min-width:600px)" type="image/webp" srcSet={pic1_b8srcr_c_scalew_602} />
                    <source media="(min-width:280px)" type="image/webp" srcSet={pic1_b8srcr_c_scalew_400} /> */}
                    <img src={heroImgDataList[currentIndex]} alt="sarvesh iyer" className='w-full h-full object-cover slide-image' />
                </picture>
            </div>
            <div className="indicators">
                {heroImgDataList.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${
                        index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => handleIndicatorClick(index)}
                    ></span>
                ))}
            </div>
        </>
    )
}
