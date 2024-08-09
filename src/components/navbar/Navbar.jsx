import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navDataList } from '../../data/navData'
import './navbar.css'
import { Helper } from '../../helpers/Helper'

export const Navbar = () => {

    const location = useLocation()

    const [navMenuList, setNavMenuList] = useState([])
    const [screenWidth, setScreenWidth] = useState(0)

    useEffect(() => {
        setScreenWidth(Helper.getScreenSize())
        window.addEventListener('resize', () => {
            setScreenWidth(Helper.getScreenSize())
        })
        
        return () => {
            window.removeEventListener('resize', () => {
                setScreenWidth(Helper.getScreenSize())
            })
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const intersecting = entry.isIntersecting
                if(intersecting) {
                    let newArr = Helper.toggleKeysValueInList(navDataList, 3, "isActive", true)
                    setNavMenuList(newArr)
                }
                else {
                    changeActiveStateBasedOnPathname()
                }
            })
        }, { threshold: 0.4 })
        
        observer.observe(document.getElementById("contact"))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        changeActiveStateBasedOnPathname()
    }, [location.pathname, navDataList])
    
    const changeActiveStateBasedOnPathname = () => {
        let pathname = window.location.pathname
        if(pathname === "/"){
            console.log("home");
            let newArr = Helper.toggleKeysValueInList(navDataList, 4, "isActive", navMenuList?.find(each => each?.id === 3)?.isActive ? false : true)
            setNavMenuList(newArr)
        }else if(pathname.includes("works")){
            console.log('work')
            let newArr = Helper.toggleKeysValueInList(navDataList, 1, "isActive", navMenuList.find(each => each?.id === 3)?.isActive ? false : true)
            setNavMenuList(newArr)
        } else if(pathname.includes("about")) {
            console.log('about')
            let newArr = Helper.toggleKeysValueInList(navDataList, 2, "isActive", navMenuList.find(each => each?.id === 3)?.isActive ? false : true)
            setNavMenuList(newArr)
        }
    }

    return (
        <nav className="navbar-wrapper flex justify-between items-center gap-4">
            <Link to="/" className="name-logo">
                Sarvesh Iyer
            </Link>
            <ul className='flex space-x-8 items-center'>
                {navMenuList?.slice(screenWidth >= 650 ? 1 : 0, 4).map(item => (
                    <li 
                        key={item.id}
                        className={[
                            'p-2 rounded-full',
                            // item.isActive && "bg-[var(--secondary-hover-dark)]"
                        ].join(' ')}
                    >
                        <NavLink to={item.link}>
                            {screenWidth >= 650 ?
                                item.name :
                                <img 
                                    src={item.isActive ? item.activeIcon : item.icon} 
                                    alt={item.name} 
                                    width={32}
                                />
                            }
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
