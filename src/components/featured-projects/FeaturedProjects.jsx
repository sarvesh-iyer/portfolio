import React from 'react'
import { ProjectCard } from '../utils/project-card/ProjectCard'
import { projectsData } from '../../data/projectsData'
import { AnimatedLink } from '../utils/animated-link/AnimatedLink'
import { East } from '@mui/icons-material'

export const FeaturedProjects = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container featured-project-container">
                <div className="left-container">
                    <h2>Featured Works</h2>
                    <p className='mt-2'>Here are some of the selected works that showcase my passion for work and technology.</p>
                </div>
                <div className="right-container"></div>
            </div>
            {projectsData.slice(0,3).map(project => (
                <ProjectCard
                    key={project.id}
                    data={project} 
                />
            ))}
            <div className="section-container flex-row">
                <AnimatedLink
                    link="/works"
                    icon={<East />}
                    samePage={true}
                    customClass="more-projects-link -top-10"
                >
                    More projects
                </AnimatedLink>
            </div>
        </section>
    )
}
