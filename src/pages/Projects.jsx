import React, { useEffect, useState } from 'react'
import { projectsData } from '../data/projectsData'
import { ProjectCard } from '../components/utils/project-card/ProjectCard'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectInfo } from '../components/project-info/ProjectInfo'
import { IconButton } from '@mui/material'
import { ArrowBack, GitHub, NorthEast } from '@mui/icons-material'
import { ActionButton } from '../components/utils/button/ActionButton'

export const Projects = () => {

    let {id} = useParams()
    let navigate = useNavigate()
    
    const [project, setProject] = useState(null)

    useEffect(() => {
        if(id) {
            if(!projectsData.find(each => each.id == id))
                navigate('/')
            setProject(projectsData.find(each => each.id == id))
        } else {
            setProject(null)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }, [id])

    const handleActionBtnClick = (link) => {
        window.open(link)
    }

    return (
        <section className="section-wrapper">
            <div className="section-container featured-project-container">
                <div className="left-container">
                    {!project?.name ? (
                        <>
                            <h1>My Works</h1>
                            <p className='mt-2'>Here are my main projects that that I've done so far.</p>
                        </>
                    ) : (
                        <>
                            <h1 className="project-name">{project?.name}</h1>
                        </>
                    )}
                </div>
                <div className="right-container">
                    <p>{project?.description}</p>
                    {project !== null && (
                        <div className="cta-links flex space-x-6 mt-6">
                            <ActionButton
                                icon={<NorthEast />}
                                onClick={() => handleActionBtnClick(project.siteLink)}
                            >
                                Live site
                            </ActionButton>
                            {project?.githubLink && (
                                <ActionButton
                                    icon={<GitHub />}
                                    onClick={() => handleActionBtnClick(project.githubLink)}
                                >
                                    Github
                                </ActionButton>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            {project === null && projectsData.map(project => (
                <ProjectCard 
                    key={project.id}
                    data={project}
                />
            ))}

            {project !== null && (
                <ProjectInfo project={project} />
            )}
        </section>
    )
}
