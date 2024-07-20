import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Contact } from '../components/contact/Contact'
import { Divider } from '../components/utils/divider/Divider'

export const RootLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Divider />
            <footer>
                {/* <Footer /> */}
                <Contact />
            </footer>
        </>
    )
}
