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
            {/* Screenshots */}
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

            {project?.dynamicSection && (
                project?.dynamicSection.map(each => (
                    <>
                        <div key={each.id} className="section-container featured-project-container">
                            <div className="left-container">
                                <h2>{each.sectionTitle}</h2>
                            </div>
                            <div className="right-container">
                                <p dangerouslySetInnerHTML={{__html: each.sectionDesc}}></p>
                            </div>
                        </div>
                        <Divider />
                    </>
                ))
            )}
            
            {/* Key features */}
            {project?.features && (
                <>
                    <div className="section-container featured-project-container flex-col">
                        <div className="left-container">
                            <h2>Key Features</h2>
                        </div>
                        <div className="right-container w-full">
                            <ul className="flex gap-5 flex-wrap justify-center">
                                {project?.features?.map(feature => (
                                    <li key={feature.id} className="feature-items pt-5 tracking-wide">
                                        <span className="company-name block">{feature.title}</span> 
                                        <span>{feature.desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Divider />
                </>
            )}

            {/* Technology stack */}
            <div className="section-container featured-project-container flex-col tech-stack-container">
                <div className="left-container w-full">
                    <h2>Technology stack</h2>
                </div>
                <div className="right-container w-full">
                    <div className='flex gap-4 max-[650px]:gap-3 justify-center items-center flex-wrap mt-5'>
                        {project?.techStack?.map(each => (
                            <a 
                                key={each.id}
                                href={each.link} 
                                target='_blank'
                                className="skill-wrapper items-center flex flex-col justify-center p-2 transition-effect hover:bg-[var(--secondary-hover-dark)] rounded-lg" 
                            >
                                <img 
                                    className="skill-icon" 
                                    src={each.img} 
                                    alt={each.name}
                                    width={70}
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
