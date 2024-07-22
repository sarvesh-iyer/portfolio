import React from 'react'
import { ExperienceDataCard } from '../utils/epxerience-data-card/ExperienceDataCard'
import { educationData } from '../../data/educationData'

export const Education = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container experience-container">
                <div className="left-container">
                    <h2>My Education</h2>
                </div>
                <div className="right-container space-y-20">
                    {educationData.map(exp => (
                        <ExperienceDataCard key={exp.id} data={exp} />
                    ))}
                </div>
            </div>
        </section>
    )
}
