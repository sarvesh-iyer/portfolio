import React from 'react'
import { AboutMe } from '../components/about-me/AboutMe'
import { ImageCard } from '../components/utils/image-card/ImageCard'
import { Capabilities } from '../components/capabilities/Capabilities'

export const About = () => {
    return (
        <>
            <AboutMe pageHeading={true} />
            <ImageCard />
            <Capabilities />
        </>
    )
}
