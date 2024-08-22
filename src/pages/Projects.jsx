import React, { useEffect, useState } from 'react'
import { projectsData } from '../data/projectsData'
import { ProjectCard } from '../components/utils/project-card/ProjectCard'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProjectInfo } from '../components/project-info/ProjectInfo'
import { IconButton } from '@mui/material'
import { ArrowBack, GitHub, NorthEast } from '@mui/icons-material'
import { ActionButton } from '../components/utils/button/ActionButton'
import { Capsule } from '../components/utils/capsules/Capsule'

export const Projects = () => {

    return (
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
    )
}
