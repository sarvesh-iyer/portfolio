import React, { useState } from 'react'
import { Carousel } from 'react-responsive-3d-carousel'
import { ImageModal } from '../image-modal/ImageModal'
import './img_carousel.css'

export const ImgCarousel = ({imageList}) => {
    
    const [clickedImg, setClickedImg] = useState(null)
    const [openImgModal, setOpenImgModal] = useState(false)

    const handleCenterItemClick = (index) => {
        setClickedImg(imageList.find(each => each.id == index + 1))
        setOpenImgModal(true)
    } 

    return (
        <>
            <Carousel
                showStatus={false}
                onClickCenteredItem={handleCenterItemClick}
                isArrowsShadow={false}
                arrowsHoveredColor="var(--secondary-hover-dark)"
                indicatorsInactiveColor="var(--secondary-hover-dark)"
            >
                {imageList.map(img => (
                    <picture key={img.id}>
                        <source srcSet={img.webp} type="image/webp" />
                        <img 
                            src={img.actual} 
                            className="w-full h-full object-cover" 
                        />
                    </picture>
                ))}
            </Carousel>
            <ImageModal 
                image={clickedImg}
                open={openImgModal} 
                setOpen={setOpenImgModal}
            />
        </>
    )
}
