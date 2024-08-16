import React from 'react'
import { Carousel } from 'react-responsive-3d-carousel'

export const ImgCarousel = ({imageList}) => {
    
    const handleCenterItemClick = (e) => {
        console.log(e)
    } 
    
    return (
        <Carousel
            showStatus={false}
            onClickCenteredItem={handleCenterItemClick}
        >
            {imageList.map(img => (
                <picture>
                    <source srcSet={img.webp} type="image/webp" />
                    <img 
                        src={img.actual} 
                        className="w-full h-full object-cover" 
                    />
                </picture>
            ))}
        </Carousel>
    )
}
