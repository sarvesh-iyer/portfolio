import React from 'react'
import { ProjectCard } from '../utils/project-card/ProjectCard'
import { projectsData } from '../../data/projectsData'

export const FeaturedProjects = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container featured-project-container">
                <div className="left-container">
                    <h2>Featured Projects</h2>
                    <p className='mt-2'>Here are some of the selected projects that showcase my passion for front-end development.</p>
                </div>
                <div className="right-container"></div>
            </div>
            {projectsData.slice(0,3).map(project => (
                <ProjectCard
                    key={project.id}
                    data={project} 
                />
            ))}
        </section>
    )
}
