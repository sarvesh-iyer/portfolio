import { ActionButton } from '../utils/button/ActionButton'
import './hero.css'
// import MyPic from '../../assets/images/hero/mypic.png'
import MyPic from '../../assets/images/hero/pic1-compress.jpg'
import MyPicWebp from '../../assets/images/hero/pic1-compress.webp'
import { socialLinksList } from '../../data/socialLinkData'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useNavigate } from 'react-router-dom'

import pic1_b8srcr_c_scalew_180 from '../../assets/images/hero/responsive-hero/pic1_b8srcr_c_scale,w_180.webp' 
import pic1_b8srcr_c_scalew_602 from '../../assets/images/hero/responsive-hero/pic1_b8srcr_c_scale,w_602.webp' 
import pic1_b8srcr_c_scalew_924 from '../../assets/images/hero/responsive-hero/pic1_b8srcr_c_scale,w_924.webp' 
import pic1_b8srcr_c_scalew_1205 from '../../assets/images/hero/responsive-hero/pic1_b8srcr_c_scale,w_1205.webp' 
import pic1_b8srcr_c_scalew_1380 from '../../assets/images/hero/responsive-hero/pic1_b8srcr_c_scale,w_1380.webp' 

export const Hero = () => {
    
    const navigate = useNavigate()

    const handleContactBtn = () => {
        navigate("#contact")
    } 

    return (
        <section className="section-wrapper">
            <div className="section-container hero-container">
                <div className="left-container">
                    <h1 className="name">
                        Hi, I am <br />
                        Sarvesh Iyer.
                    </h1>
                    <p className='tracking-wide'>
                        As a front-end developer with <span className="highlighted-text">2.5+ years</span> of extensive experience in the <span className="highlighted-text">React framework</span>, I specialize in building intuitive, high-performance websites and web apps, while also leading the development and deployment of products from concept to production. 
                    </p>

                    <div className="contact-button-group space-x-4">
                        <ActionButton 
                            icon={<NorthEastIcon />}
                            onClick={handleContactBtn}
                        >
                            Contact me
                        </ActionButton>

                        {socialLinksList.filter(each => [1,2,6].includes(each.id)).map(item => (
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
                        {/* <picture>
                            <source srcSet={MyPicWebp} type="image/webp" />
                            <img 
                                src={MyPic} alt="Sarvesh Iyer" 
                                width="300" height="200"
                                className='w-full h-full object-cover' 
                            />
                        </picture> */}
                        <picture>
                            <img
                                sizes="(min-width: 1380px) 580px, (min-width: 940px) 42.38vw, (min-width: 660px) calc(45.77vw - 30px), 91.76vw"
                                srcSet={`${pic1_b8srcr_c_scalew_180} 180w,
                                    ${pic1_b8srcr_c_scalew_602} 602w,
                                    ${pic1_b8srcr_c_scalew_924} 924w,
                                    ${pic1_b8srcr_c_scalew_1205} 1205w,
                                    ${pic1_b8srcr_c_scalew_1380} 1380w`}
                                src={pic1_b8srcr_c_scalew_1380}
                                alt="sarvesh iyer"
                                className='w-full h-full object-cover'
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}
