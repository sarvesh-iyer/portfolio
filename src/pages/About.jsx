import React from 'react'
import { AboutMe } from '../components/about-me/AboutMe'
import { ImageCard } from '../components/utils/image-card/ImageCard'
import { Capabilities } from '../components/capabilities/Capabilities'
import { Divider } from '../components/utils/divider/Divider'
import { Experience } from '../components/experience/Experience'
import { Education } from '../components/education/Education'
import { Helmet } from 'react-helmet'
import { Helper } from '../helpers/Helper'

export const About = () => {
    const pathname = window.location.pathname
    const canonicalUrl = `${Helper.SITE_URL}${pathname}`;

    return (
        <>
            <Helmet>
                <meta name="description" content="Experienced front-end developer specializing in React, with nearly 3 years of expertise in building production-ready web applications. Passionate about problem-solving, continuous learning, and mentoring others. Currently expanding skills in React Native, Electron js and Node js. Enjoys playing badminton, traveling, and contributing to Google Maps." />
                <meta name="keywords" content="Frontend developer, React developer, web development, React Native, Electron js, Node js, problem-solving, mentoring, team player, technology enthusiast, badminton, travel, Google Maps contributor" />
                <link rel="canonical" href={canonicalUrl} />
                <title>About | Sarvesh Iyer</title>
            </Helmet>
            <AboutMe pageHeading={true} />
            <ImageCard />
            <Capabilities />
            <Divider />
            <Experience />
            <Divider />
            <Education />
        </>
    )
}
