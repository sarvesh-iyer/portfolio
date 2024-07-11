import { Helper } from '../../helpers/helper'
import './hero.css'
import MyPic from '../../assets/images/hero/mypic2.png'

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { heroWorkList } from '../../data/heroWorkList';
import { useState } from 'react';


export const Hero = () => {

    const [heroImg, setHeroImg] = useState(MyPic)

    const handleMouseEnter = (image) => {
        setHeroImg(image)
    } 
    const handleMouseOut = () => {
        setHeroImg(MyPic)
    } 

    return (
        <section className="main-component-section hero-section">
            <div className="main-section-container hero-container">
                <div className="content-box d-flex items-center">
                    <div className="left-box">
                        <div className="accent-heading">
                            Sarvesh Iyer
                        </div>
                        <h1 className="role">
                            React developer <br />
                            Based in Chennai
                        </h1>
                        <ul className="work-list">
                            {heroWorkList?.map(item => {
                                return (
                                    <li 
                                        key={item.id}
                                        onMouseEnter={() => handleMouseEnter(item.image)}
                                        onMouseOut={handleMouseOut}
                                        className="work-list-item d-flex items-center transition"
                                    >
                                        {item.name} 
                                        <ArrowForwardRoundedIcon className="right-arrow " />
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="info-box">
                            <div className="exp-wrapper d-flex items-center">
                                <h3>2+</h3>
                                <span className="exp-text">Years of <br /> Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <div className="image-container extra-card"></div>
                        <div className="image-container transition" style={Helper.imageContainerStyle(heroImg)}></div>
                    </div>
                </div>

            </div>
        </section>
    )
}
