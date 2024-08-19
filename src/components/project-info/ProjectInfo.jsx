import React from 'react'
import './project_info.css'
import { ImgCarousel } from '../utils/img-carousel/ImgCarousel'
import { ActionButton } from '../utils/button/ActionButton'
import { GitHub, NorthEast } from '@mui/icons-material'
import { Divider } from '../utils/divider/Divider'

export const ProjectInfo = (props) => {
    let { project } = props

    const handleActionBtnClick = (link) => {
        window.open(link)
    } 

    return (
        <>            
            <div className="section-container featured-project-container flex-col">
                <div className="left-container">
                    <h2>Screenshots</h2>
                </div>
                <div className="right-container w-full">
                    <ImgCarousel 
                        imageList={project.images.projectImg}
                    />
                </div>
            </div>

            <Divider />

            <div className="section-container featured-project-container">
                <div className="left-container">
                    <h2>Why</h2>
                </div>
                <div className="right-container">
                    <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                </div>
            </div>

            <Divider />
            
            <div className="section-container featured-project-container flex-col">
                <div className="left-container">
                    <h2>Features</h2>
                </div>
                <div className="right-container w-full">
                    
                </div>
            </div>

            <Divider />

            <div className="section-container featured-project-container flex-col tech-stack-container">
                <div className="left-container w-full">
                    <h2>Technology stack</h2>
                </div>
                <div className="right-container w-full">
                    <div className='flex gap-5 max-[650px]:gap-3 justify-center items-center flex-wrap mt-5'>
                        {project?.techStack?.map(each => (
                            <a 
                                key={each.id}
                                href={each.link} 
                                target='_blank'
                                className="items-center flex flex-col justify-center p-3 transition hover:bg-[var(--secondary-hover-dark)] rounded-lg" 
                            >
                                <img 
                                    className="skill-icon" 
                                    src={each.img} 
                                    alt={each.name}
                                    width={80}
                                />
                                <span className='mt-3'>{each.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="cta-links flex justify-center space-x-6 mt-14">
                        <ActionButton
                            icon={<NorthEast />}
                            onClick={() => handleActionBtnClick(project.siteLink)}
                        >
                            Live site
                        </ActionButton>
                        {project.githubLink && (
                            <ActionButton
                                icon={<GitHub />}
                                onClick={() => handleActionBtnClick(project.githubLink)}
                            >
                                Github
                            </ActionButton>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
