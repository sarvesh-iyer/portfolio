import React from 'react'
import './project_card.css'
import { Divider } from '../divider/Divider'
import { AnimatedLink } from '../animated-link/AnimatedLink'
import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'


export const ProjectCard = (props) => {

    let {data} = props

    const navigate = useNavigate()

    const handleImgCardClick = () => {
        // window.open(data.siteLink)
        navigate(data.pageLink)
    } 

    return (
        <div className="section-container project-card-container">
            <div className="left-container">
                <div className="project-image-container-card" onClick={handleImgCardClick}>
                    {data.tag && (
                        <div className="project-tag">
                            {data.tag}
                        </div>
                    )}
                    <div className="image-container">
                        {/* <img 
                            src={data.images.coverImg.actual} alt={data.name} 
                            width="300" height="200"
                            loading="lazy" decoding="async"
                            className="w-full h-full object-cover object-left-top" 
                        /> */}
                        <picture>
                            <source srcSet={data.images.coverImg.webp} type="image/webp" />
                            <img 
                                src={data.images.coverImg.actual} alt={data.name} 
                                width="300" height="200"
                                loading="lazy" decoding="async"
                                className="w-full h-full object-cover object-left-top" 
                            />
                        </picture>
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
                                <p className="attribute shrink-0">{key}</p>
                                <p className="value flex-wrap">{value}</p>
                            </div>
                            <Divider customClass="my-0" />
                        </React.Fragment>
                    ))}
                    <div className="flex justify-between items-center">
                        <p className="attribute shrink-0">Tech stack</p>
                        <p className="value flex gap-3 flex-wrap ">
                            {data.techStack.map(each => (
                                <Tooltip title={each.name} arrow placement='top' key={each.id}>
                                    <a href={each.link} target='_blank'>
                                        <img 
                                            className="skill-icon" 
                                            src={each.img} 
                                            alt={each.name}
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                </Tooltip>
                            ))}
                        </p>
                    </div>
                    <Divider customClass="my-0" />
                </div>
                <div className="action-link flex items-center space-x-6">
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
