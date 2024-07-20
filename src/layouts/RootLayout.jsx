import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Contact } from '../components/contact/Contact'

export const RootLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* <Footer /> */}
                <Contact />
            </footer>
        </>
    )
}
