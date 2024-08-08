import React from 'react'
import { ActionButton } from '../utils/button/ActionButton'
import './hero.css'
import MyPic from '../../assets/images/hero/mypic.png'
import { socialLinksList } from '../../data/socialLinkData'
import NorthEastIcon from '@mui/icons-material/NorthEast';

export const Hero = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container hero-container">
                <div className="left-container">
                    <h1 className="name">
                        Hi, I am <br />
                        Sarvesh Iyer.
                    </h1>
                    <p>
                        As a front-end developer, I am deeply committed to creating accessible and user-friendly websites.
                    </p>
                    <div className="contact-button-group space-x-4">
                        <ActionButton 
                            icon={<NorthEastIcon />}
                        >
                            Contact me
                        </ActionButton>

                        {socialLinksList.filter(each => [1,2].includes(each.id)).map(item => (
                            <a 
                                key={item.id} 
                                href={item.link}
                                target='_blank'
                                className="contact-icons transition-effect"
                            >
                                <img src={item.icon} alt={item.name} />
                            </a>
                        ))}


                    </div>
                </div>
                <div className="right-container">
                    <div className="image-container">
                        <img 
                            src={MyPic}
                            alt="sarvesh iyer"
                            className='w-full h-full object-cover' 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
