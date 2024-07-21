import React from 'react'
import { skillsList } from '../../data/skillsList'
import { Capsule } from '../utils/capsules/Capsule'

export const Capabilities = () => {
    return (
        <section className="section-wrapper">
            <div className="section-container capabilities-container">
                <div className="left-container">
                    <h2>My Capabilities</h2>
                </div>
                <div className="right-container">
                    <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        {skillsList.map(skill => (
                            <Capsule 
                                key={skill.id} 
                                icon={skill.img}
                                link={skill.link}
                            >
                                {skill.name}
                            </Capsule>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
