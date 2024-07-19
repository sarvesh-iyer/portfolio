import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Divider } from '../components/utils/divider/Divider'
import { Contact } from '../components/contact/Contact'

export const Home = () => {
    return (
        <>
            <Hero />
            <Divider />
            <Contact />
        </>
    )
}
