import React from 'react'
import { AnimatedLink } from '../utils/animated-link/AnimatedLink'
import { ActionButton } from '../utils/button/ActionButton'
import { socialLinksList } from '../../data/socialLinkData'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { East, Help } from '@mui/icons-material';
import { Helper } from '../../helpers/Helper';

export const AboutMe = (props) => { 
    let {
        showMore,
        pageHeading
    } = props

    return (
        <section className="section-wrapper">
            <div className="section-container about-me-container">
                <div className="left-container">
                    {pageHeading ? (
                        <h1>About Me</h1>
                    ) : (
                        <h2>About Me</h2>
                    )}
                </div>
                <div className="right-container">
                    <h3>
                        I am a front-end developer based in India. <br />
                        Has Computer Science background.
                    </h3>
                    <p className='mt-4 tracking-wide'>
                        {/* I am a front-end developer based in India looking for exciting opportunities. Has computer science engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill. */}

                        As a front-end developer with an extensive experience in the React framework, I focus on not just building applications but also ensuring they are production-ready and efficiently deployed. I approach challenges with a progressive mindset and excel in problem-solving, constantly seeking to improve my skills and methodologies.
                        <br />
                        I am also adept at learning and teaching others, having successfully mentored and guided individuals in the past. 🫱🏻‍🫲🏼
                        <br /> <br />
                        {
                            window.location.pathname.includes("about") && 
                            "Currently, I am expanding my expertise by exploring React Native and Electron.js for mobile and desktop app development. Outside of work, I enjoy playing badminton, traveling, and contributing to Google Maps by reviewing and sharing images of the places I visit. My passion for technology and my commitment to continuous learning drive me to deliver high-quality, impactful solutions."
                        }
                    </p>
                    {showMore ? (
                        <AnimatedLink 
                            link="/about"
                            samePage={true}
                            icon={<East />}
                            customClass="mt-12"
                        >
                            More about me
                        </AnimatedLink>
                    ) : (
                        <div className="contact-button-group space-x-4">
                            <ActionButton 
                                icon={<FileDownloadOutlinedIcon />}
                                onClick={() => Helper.openLinkInNewTab(Helper.RESUME_LINK)}
                            >
                                Download resume
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
                    )}
                    
                </div>
            </div>
        </section>
    )
}
