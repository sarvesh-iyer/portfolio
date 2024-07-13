import React from 'react'
import './skills.css'
import { Card } from '@mui/material'
import { skillsList } from '../../data/skillsList'

export const Skills = () => {
    return (
        <section className="main-component-section experience-section skills-section">
            <div className="main-section-container experience-container">
                <div className="accent-heading">
                    Expertise
                </div>
                <h3 className="section-heading">
                    My Skills
                </h3>
                
                <div className="skills-card-container flex flex-wrap gap-4   justify-center">
                    {skillsList.map(skill => (
                        <div 
                            key={skill.id} 
                            className="skill-card grid items-center"
                        >
                            <img 
                                src={skill.img} 
                                alt={skill.name} 
                                className='mx-auto'
                                width={65}
                            />
                            <span className="mt-3 text-center leading-6">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
