import React, { useState } from 'react'
import { skillsList } from '../../data/skillsList'
import { Capsule } from '../utils/capsules/Capsule'
import { AnimatedLink } from '../utils/animated-link/AnimatedLink'
import { Collapse } from '@mui/material'

export const Capabilities = () => {

    const [showMore, setShowMore] = useState(false)

    const toggleShowMore = () => {
        setShowMore(!showMore)
    } 

    return (
        <section className="section-wrapper">
            <div className="section-container capabilities-container">
                <div className="left-container">
                    <h2>My Capabilities</h2>
                </div>
                <div className="right-container relative">
                    <p className="tracking-wide">
                        I am always looking to add more and more skills in this list. Here are my technical skills and tools that I have refined over time. 
                    </p>
                    <Collapse in={showMore} collapsedSize={285}>
                        <div className="flex flex-wrap gap-4 mt-8">
                                {skillsList.filter(each => ![25].includes(each.id)).map(skill => (
                                    <Capsule 
                                        key={skill.id} 
                                        icon={skill.img}
                                        link={skill.link}
                                    >
                                        {skill.name}
                                    </Capsule>
                                ))}
                        </div>
                    </Collapse>
                    {!showMore && (<fade />)}
                    <AnimatedLink 
                        isbutton={true} 
                        onClick={toggleShowMore}
                        customClass="mt-4 ml-2"
                    >
                        {!showMore ? "Show more" : "Show less"}
                    </AnimatedLink>
                </div>
            </div>
        </section>
    )
}
