import React, { useEffect, useState } from 'react'
import { projectsData } from '../data/projectsData'
import { ProjectCard } from '../components/utils/project-card/ProjectCard'
import { useNavigate, useParams } from 'react-router-dom'
import { ProjectInfo } from '../components/project-info/ProjectInfo'

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
                            <h1>{project?.name}</h1>
                            {/* <p className='mt-2'>{project.description}</p> */}
                        </>
                    )}
                </div>
                <div className="right-container">
                    <p className='mt-2'>{project?.description}</p>
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
