import React from 'react'
import './experience.css'
import { ExperienceDataCard } from '../utils/epxerience-data-card/ExperienceDataCard'
import { experienceData } from '../../data/experienceData'

export const Experience = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container experience-container">
                <div className="left-container">
                    <h2>My Experience</h2>
                </div>
                <div className="right-container space-y-20">
                    {experienceData.map(exp => (
                        <ExperienceDataCard key={exp.id} data={exp} />
                    ))}
                </div>
            </div>
        </section>
    )
}
