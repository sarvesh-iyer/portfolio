import React from 'react'
import { AnimatedLink } from '../utils/animated-link/AnimatedLink'

export const AboutMe = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container about-me-container">
                <div className="left-container">
                    <h2>About Me</h2>
                </div>
                <div className="right-container">
                    <h3>
                        I am a front-end developer based in India. <br />
                        Has Computer Science background.
                    </h3>
                    <p className='mt-4'>
                        I am a front-end developer based in India looking for exciting opportunities. Has computer science engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                    </p>

                    <AnimatedLink 
                        link="/about"
                        samePage={true}
                        customClass="mt-12"
                    >
                        More about me
                    </AnimatedLink>
                    
                </div>
            </div>
        </section>
    )
}
