import React, { useEffect, useRef } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { Contact } from '../components/contact/Contact'
import { Divider } from '../components/utils/divider/Divider'

export const RootLayout = () => {
    
    const navBarRef = useRef(null)

    // listen to page scroll and add shadow to navbar when scrolled down
    // useEffect(() => {
    //     const handlePageScroll = () => {
    //         if(window.scrollY > 23){
    //             navBarRef.current.classList.add("navbar-shadow");
    //         }else {
    //             navBarRef.current.classList.remove("navbar-shadow");
    //         }
    //     } 
    //     window.addEventListener('scroll', handlePageScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handlePageScroll)
    //     }
    // }, [])
    

    return (
        <>
            <header ref={navBarRef} className='main-header'>
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
            <ScrollRestoration />
        </>
    )
}
