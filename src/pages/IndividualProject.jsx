import React, { useEffect, useState } from 'react'
import { projectsData } from '../data/projectsData'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectInfo } from '../components/project-info/ProjectInfo'
import { ActionButton } from '../components/utils/button/ActionButton'
import { Capsule } from '../components/utils/capsules/Capsule'
import { GitHub, NorthEast } from '@mui/icons-material'

export const IndividualProject = () => {
    let {id} = useParams()
    const navigate = useNavigate()
    
    const [project, setProject] = useState(null)

    useEffect(() => {
        if(id) {
            if(!projectsData.find(each => each.id == id))
                navigate('/')
            setProject(projectsData.find(each => each.id == id))
            window.scrollTo(0, 0)
        }
    }, [id])

    const handleActionBtnClick = (link) => {
        window.open(link)
    }

    return (
        <section className="section-wrapper">
            <div className="section-container featured-project-container">
                <div className="left-container">
                    {project?.name && (
                        <>
                            <h1 className="project-name">{project?.name}</h1>
                            <Capsule customclass="w-fit px-4 mt-3" >
                                {project.tag}
                            </Capsule>
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
            
            {project !== null && (
                <ProjectInfo project={project} />
            )}
        </section>
    )
}
