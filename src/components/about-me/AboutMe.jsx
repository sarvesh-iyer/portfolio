import React from 'react'
import { AnimatedLink } from '../utils/animated-link/AnimatedLink'
import { ActionButton } from '../utils/button/ActionButton'
import { socialLinksList } from '../../data/socialLinkData'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

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
                    <p className='mt-4'>
                        I am a front-end developer based in India looking for exciting opportunities. Has computer science engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                    </p>
                    {showMore ? (
                        <AnimatedLink 
                            link="/about"
                            samePage={true}
                            customClass="mt-12"
                        >
                            More about me
                        </AnimatedLink>
                    ) : (
                        <div className="contact-button-group space-x-4">
                            <ActionButton 
                                icon={<FileDownloadOutlinedIcon />}
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
