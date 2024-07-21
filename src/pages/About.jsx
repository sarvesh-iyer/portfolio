import React from 'react'
import { AboutMe } from '../components/about-me/AboutMe'
import { ImageCard } from '../components/utils/image-card/ImageCard'
import { Capabilities } from '../components/capabilities/Capabilities'
import { Divider } from '../components/utils/divider/Divider'
import { Experience } from '../components/experience/Experience'

export const About = () => {
    return (
        <>
            <AboutMe pageHeading={true} />
            <ImageCard />
            <Capabilities />
            <Divider />
            <Experience />
        </>
    )
}
