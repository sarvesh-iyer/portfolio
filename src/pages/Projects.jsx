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

    let {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation() 
    
    const [project, setProject] = useState(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(window.scrollY)
    //       setScrollPosition(window.scrollY);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []); 

    // useEffect(() => {
    //     if (location.pathname === '/works') {
    //         window.scrollTo(0, scrollPosition); // Scrolls to the remembered position
    //     }
    // }, [location.pathname, scrollPosition]);

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
