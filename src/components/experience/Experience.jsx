import React from 'react'
import './experience.css'
import { ExperienceDataCard } from '../utils/epxerience-data-card/ExperienceDataCard'

export const Experience = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container experience-container">
                <div className="left-container">
                    <h2>My Experience</h2>
                </div>
                <div className="right-container space-y-20">
                    <ExperienceDataCard />
                    <ExperienceDataCard />
                    <ExperienceDataCard />
                </div>
            </div>
        </section>
    )
}
