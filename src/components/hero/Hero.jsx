import { ActionButton } from '../utils/button/ActionButton'
import './hero.css'
// import MyPic from '../../assets/images/hero/mypic.png'
import MyPic from '../../assets/images/hero/pic1-compress.jpg'
import MyPicWebp from '../../assets/images/hero/pic1-compress.webp'
import { socialLinksList } from '../../data/socialLinkData'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useNavigate } from 'react-router-dom'

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
                        As a front-end developer with <span className="text-[var(--accent-color)] font-semibold">2.5+ year</span> of extensive experience in the <span className="text-[var(--accent-color)] font-semibold">React framework</span>, I specialize in building intuitive, high-performance websites and web apps, while also leading the development and deployment of products from concept to production. 
                    </p>

                    <div className="contact-button-group space-x-4">
                        <ActionButton 
                            icon={<NorthEastIcon />}
                            onClick={handleContactBtn}
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
                        <picture>
                            <source srcSet={MyPicWebp} type="image/webp" />
                            <img 
                                src={MyPic} alt="Sarvesh Iyer" 
                                width="300" height="200"
                                className='w-full h-full object-cover' 
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}
