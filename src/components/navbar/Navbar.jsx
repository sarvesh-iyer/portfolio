import React from 'react'
import { NavLink } from 'react-router-dom'
import { navDataList } from '../../data/navData'
import './navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar-wrapper py-6 px-16 flex justify-between items-center gap-4">
            <div className="name-logo">
                Sarvesh Iyer
            </div>
            <ul className='flex space-x-8 items-center'>
                {navDataList.map(item => (
                    <li key={item.id}>
                        <NavLink to={item.link} >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
