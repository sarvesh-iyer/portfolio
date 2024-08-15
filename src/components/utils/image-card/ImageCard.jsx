import React from 'react'
// import MyPic from '../../../assets/images/hero/sarvesh.png'
import MyPic from '../../../assets/images/hero/pic2.JPG'
import MyPicWebp from '../../../assets/images/hero/pic2.webp'

export const ImageCard = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container">
                <div className='overflow-hidden w-full' style={{maxHeight: '90dvh', borderRadius: 'var(--card-border-radius)'}}>
                    <picture>
                        <source srcSet={MyPicWebp} type="image/webp" />
                        <img 
                            src={MyPic} alt="Sarvesh Iyer"
                            width="300" height="200"
                            loading="lazy" decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </picture>
                </div>
            </div>
        </section>
    )
}
