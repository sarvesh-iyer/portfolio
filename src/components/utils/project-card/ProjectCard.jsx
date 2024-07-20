import React from 'react'
import './project_card.css'
import Ailaysa from '../../../assets/images/projects/ailaysa.png'
import Langsmart from '../../../assets/images/projects/langsmart.png'
import { Divider } from '../divider/Divider'
import { AnimatedLink } from '../animated-link/AnimatedLink'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectCard = (props) => {

    let {langsmart} = props

    return (
        <div className="section-container project-card-container">
            <div className="left-container">
                <div className="project-image-container-card">
                    <div className="project-tag">
                        Conceptual work
                    </div>
                    <div className="image-container">
                        <img 
                            src={langsmart ? Langsmart : Ailaysa} 
                            alt="ailaysa"
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h3>Promotional landing page for our favorite show</h3>
                <p className="mt-3 mb-8">Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                <div className="project-info-wrapper space-y-4">
                    <p className="title">Project Info</p>
                    <Divider customClass="my-0" />
                    <div className="flex justify-between items-center">
                        <p className="attribute">Year</p>
                        <p className="value">2023</p>
                    </div>
                    <Divider customClass="my-0" />
                    <div className="flex justify-between items-center">
                        <p className="attribute">Role</p>
                        <p className="value">Front-end Developer</p>
                    </div>
                    <Divider customClass="my-0" />
                </div>
                <div className="flex items-center space-x-6 mt-12">
                    <AnimatedLink 
                        link="https://ailaysa.com/"
                        icon={<NorthEastIcon />}
                    >
                        Live Site
                    </AnimatedLink>
                    <AnimatedLink 
                        icon={<GitHubIcon />}
                    >
                        See on Github
                    </AnimatedLink>
                </div>
            </div>
        </div>
    )
}
