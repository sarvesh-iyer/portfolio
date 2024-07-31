import React from 'react'
import './project_card.css'
import Ailaysa from '../../../assets/images/projects/ailaysa.png'
import Langsmart from '../../../assets/images/projects/langsmart.png'
import { Divider } from '../divider/Divider'
import { AnimatedLink } from '../animated-link/AnimatedLink'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'

export const ProjectCard = (props) => {

    let {data} = props

    return (
        <div className="section-container project-card-container">
            <div className="left-container">
                <div className="project-image-container-card">
                    {data.tag && (
                        <div className="project-tag">
                            {data.tag}
                        </div>
                    )}
                    <div className="image-container">
                        <img 
                            src={data.coverImage} 
                            alt={data.name}
                            className="w-full h-full object-cover object-top" 
                        />
                    </div>
                </div>
            </div>
            <div className="right-container">
                <h3 className="project-name relative inline-block pb-2 overflow-hidden"><Link to={data.pageLink}>{data.name}</Link></h3>
                <p className="mt-3 mb-8">{data.description}</p>
                <div className="project-info-wrapper space-y-4">
                    <p className="title">Project Info</p>
                    <Divider customClass="my-0" />
                    {Object.entries(data.attributes).map(([key, value], index) => (
                        <React.Fragment key={index}>
                            <div key={index} className="flex justify-between items-center">
                                <p className="attribute">{key}</p>
                                <p className="value">{value}</p>
                            </div>
                            <Divider customClass="my-0" />
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center space-x-6 mt-12">
                    {data.siteLink && (
                        <AnimatedLink 
                            link={data.siteLink}
                            icon={<NorthEastIcon />}
                        >
                            Live Site
                        </AnimatedLink>
                    )}
                    {data.githubLink && (
                        <AnimatedLink 
                            link={data.githubLink}
                            icon={<GitHubIcon />}
                        >
                            See on Github
                        </AnimatedLink>
                    )}
                </div>
            </div>
        </div>
    )
}
