import React from 'react'
import { socialLinksList } from '../../data/socialLinkData'
import './contact.css'
import { InputField } from '../utils/input-field/InputField'
import { ActionButton } from '../utils/button/ActionButton'

export const Contact = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container contact-container">
                <div className="left-container">
                    <div>
                        <h2>Let's Connect</h2>
                        <p className='mb-2'>Say hello at <a 
                                href='mailto:sarvesh.iyer3@gmail.com' 
                                className="animated-underline transition"
                            >
                                sarvesh.iyer3@gmail.com
                            </a>
                        </p>
                        <p>For more info, here's my <span className="animated-underline transition">
                            resume
                        </span></p>

                        <div className="social-link-wrapper space-x-6 ">
                            {socialLinksList.map(item => (
                                <a
                                    key={item.id} 
                                    href={item.link}
                                    target='_blank'
                                    className="transition social-icons p-2"
                                >
                                    <img src={item.icon} alt={item.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="foot-note">
                        © 2024 Sarvesh Iyer
                    </div>
                </div>
                <div className="right-container">
                    <form className="space-y-5">
                        <InputField 
                            label="Name"
                            name="name"
                        />
                        <InputField 
                            label="Email"
                            name="email"
                        />
                        <InputField 
                            label="Subject"
                            name="subject"
                        />
                        <InputField 
                            label="Message"
                            name="message"
                            type="textarea"
                        />
                        <ActionButton>
                            Submit
                        </ActionButton>
                    </form>
                </div>
            </div>
        </section>
    )
}
