import React, { useEffect, useState } from 'react'
import { ImageSlider } from '../hero-img-slider/ImageSlider'
import { landscapeImgList } from '../../../data/heroImgData'

export const ImageCard = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container">
                 <div className='overflow-hidden w-full' style={{maxHeight: '90dvh', borderRadius: 'var(--card-border-radius)'}}>
                    <ImageSlider>
                        {landscapeImgList.map((img, ind) => (
                            <picture key={ind}>
                                <source srcSet={img} type="image/webp" />
                                <img 
                                    src={img} alt="Sarvesh Iyer"
                                    width="300" height="200"
                                    loading="lazy" decoding="async"
                                    className="w-full h-full object-cover"
                                />
                            </picture>
                        ))}
                    </ImageSlider>
                 </div>
                {/* <div 
                    className='my-cover-img overflow-hidden w-full' 
                    style={{
                        maxHeight: '90dvh', 
                        borderRadius: 'var(--card-border-radius)',
                        height: "620px",
                        backgroundImage: `url(${images[currentIndex]})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: "center",
                        transition: "background 0.5s ease-in-out"
                    }}

                >
                </div> */}
            </div>
        </section>
    )
}
