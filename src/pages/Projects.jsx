import React, { useEffect, useState } from 'react'
import { projectsData } from '../data/projectsData'
import { ProjectCard } from '../components/utils/project-card/ProjectCard'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProjectInfo } from '../components/project-info/ProjectInfo'
import { IconButton } from '@mui/material'
import { ArrowBack, GitHub, NorthEast } from '@mui/icons-material'
import { ActionButton } from '../components/utils/button/ActionButton'
import { Capsule } from '../components/utils/capsules/Capsule'
import { Helmet } from 'react-helmet'
import { Helper } from '../helpers/Helper'

export const Projects = () => {

    const pathname = window.location.pathname
    const canonicalUrl = `${Helper.SITE_URL}${pathname}`;

    return (
        <>
            <Helmet>
                <meta name="description" content="Explore my portfolio featuring a diverse range of projects, from dynamic web applications and custom UI components to innovative proof of concepts. With expertise in React, Firebase, and front-end development, these projects showcase my ability to create functional, scalable, and user-focused solutions." />
                <meta name="keywords" content="Frontend development, React development, React projects, Firebase, UI component library, WYSIWYG editor, dynamic web applications, portfolio, web development, custom components, JavaScript, CSS, Storybook, proof of concept, responsive design, API integration" />
                <link rel="canonical" href={canonicalUrl} />
                <title>Works | Sarvesh Iyer</title>
            </Helmet>
            <section className="section-wrapper">
                <div className="section-container featured-project-container">
                    <div className="left-container">
                        <h1>My Works</h1>
                        <p className='mt-2'>Here are my main projects that that I've done so far.</p>
                    </div>
                    <div className="right-container">
                    </div>
                </div>
                
                {projectsData.map(project => (
                    <ProjectCard 
                        key={project.id}
                        data={project}
                    />
                ))}
            </section>
        </>
    )
}
