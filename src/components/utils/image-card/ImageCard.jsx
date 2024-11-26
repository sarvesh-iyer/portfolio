import React, { useEffect, useState } from 'react'
// import MyPic from '../../../assets/images/hero/sarvesh.png'
import MyPic from '../../../assets/images/hero/pic2.JPG'
import MyPicWebp from '../../../assets/images/hero/pic2.webp'
import Img5 from '../../../assets/images/hero/my-pics/img5.jpg'
import Img8 from '../../../assets/images/hero/my-pics/img8.jpg'

export const ImageCard = () => {
    let images = [MyPic, Img5, Img8]
    const [currentIndex, setCurrentIndex] = useState(0)

    // setInterval for auto-play slides
    useEffect(() => {
      let interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);

      return () => {
        clearInterval(interval)
      }
    }, [])

    return (
        <section className="section-wrapper">
            <div className="section-container">
                <div 
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
                    {/* <source srcSet={MyPicWebp} type="image/webp" />
                    <picture>
                        <img 
                            src={images[currentIndex]} alt="Sarvesh Iyer"
                            width="300" height="200"
                            loading="lazy" decoding="async"
                            className="w-full h-full object-cover"
                        />
                    </picture> */}
                </div>
            </div>
        </section>
    )
}
