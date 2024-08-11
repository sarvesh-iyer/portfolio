import React, { useRef, useState } from 'react'
import { socialLinksList } from '../../data/socialLinkData'
import './contact.css'
import { InputField } from '../utils/input-field/InputField'
import { ActionButton } from '../utils/button/ActionButton'
import { AnimatedLink } from '../utils/animated-link/AnimatedLink'
import { Helper } from '../../helpers/Helper'
import emailjs from '@emailjs/browser';
import { CircularProgress } from '@mui/material'
import { SuccessModal } from '../utils/modal/SuccessModal'
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const Contact = () => {

    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const initialFormValidationData = {
        name: false,
        email: false,
        subject: false,
        message: false
    }

    const [formState, setFormState] = useState(initialFormData)
    const [formValidationState, setFormValidationState] = useState(initialFormValidationData)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    const formRef = useRef(null)

    const handleFormInputChange = (e) => {
        let {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
        setFormValidationState({
            ...formValidationState,
            [name]: value?.trim() !== "" && false
        })
    } 

    const isFormValid = () => {
        if(
            formState.name === "" || formState.email === "" || 
            formState.subject === "" || formState.message === ""
        ){
            setFormValidationState({
                ...formValidationState,
                name: formState.name.trim() === "" ? true : false,
                email: formState.email.trim() === "" ? true : false,
                subject: formState.subject.trim() === "" ? true : false,
                message: formState.message.trim() === "" ? true : false,
            })
            return false
        }
        return true
    }

    const handleFormSubmit = async(e) => {
        e.preventDefault()
        
        if(!isFormValid()) return

        try{
            setIsSubmitting(true)

            let resposne = await emailjs.sendForm(Helper.SERVICE_ID, Helper.TEMPLATE_ID, formRef.current, {
                publicKey: Helper.PUBLIC_KEY,
            })

            setIsSubmitting(false)
            setOpenSuccessModal(true)
            setFormState(initialFormData)
            setFormValidationState(initialFormValidationData)

        }catch(e){
            console.log(e)
        }
    } 

    return (
        <section id='contact' className="section-wrapper">
            <div className="section-container contact-container">
                <div className="left-container">
                    <div>
                        <h2>Let's Connect</h2>
                        <p className='mb-2'>Say hello at <AnimatedLink 
                            link="mailto:sarvesh.iyer3@gmail.com"
                            customClass="normal-case font-normal"
                            noAccentColor={true}
                            inheritFontSize={true}
                        >
                                sarvesh.iyer3@gmail.com
                            </AnimatedLink>
                        </p>
                        <p>For more info, here's my <AnimatedLink 
                            link=""
                            customClass="normal-case font-normal"
                            noAccentColor={true}
                            inheritFontSize={true}
                        >
                                resume
                            </AnimatedLink>
                        </p>

                        <div className="social-link-wrapper space-x-6 ">
                            {socialLinksList.map(item => (
                                <a
                                    key={item.id} 
                                    href={item.link}
                                    target='_blank'
                                    className="social-icons transition-effect p-2"
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
                    <form className="space-y-5" ref={formRef}>
                        <InputField 
                            label="Name"
                            name="name"
                            value={formState.name}
                            onChange={handleFormInputChange}
                            isError={formValidationState.name}
                        />
                        <InputField 
                            label="Email"
                            name="email"
                            value={formState.email}
                            onChange={handleFormInputChange}
                            isError={formValidationState.email}
                        />
                        <InputField 
                            label="Subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleFormInputChange}
                            isError={formValidationState.subject}
                        />
                        <InputField 
                            label="Message"
                            name="message"
                            type="textarea"
                            value={formState.message}
                            onChange={handleFormInputChange}
                            isError={formValidationState.message}
                        />
                        <ActionButton 
                            onClick={handleFormSubmit}
                            icon={<EastRoundedIcon />}
                        >
                            {isSubmitting && (
                                <CircularProgress 
                                    sx={{color: "#0A0A0A"}}
                                    style={{ width: "22px", height: "22px" }} 
                                    className="mr-2 text-black"
                                />
                            )}
                            {!isSubmitting ? "Submit" : "Submitting"}
                        </ActionButton>
                    </form>
                    <div className="foot-note foot-note-bottom my-12">
                        © 2024 Sarvesh Iyer
                    </div>
                </div>
            </div>
            <SuccessModal 
                open={openSuccessModal}
                setOpen={setOpenSuccessModal}
            />
        </section>
    )
}
