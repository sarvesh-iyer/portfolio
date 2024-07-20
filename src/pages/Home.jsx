import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Divider } from '../components/utils/divider/Divider'
import { AboutMe } from '../components/about-me/AboutMe'

export const Home = () => {
    return (
        <>
            <Hero />
            <Divider />
            <AboutMe />
        </>
    )
}
