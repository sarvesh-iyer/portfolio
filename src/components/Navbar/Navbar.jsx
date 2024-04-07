import { NavLink } from "react-router-dom"
import './navbar.css'

export const Navbar = () => {

    const menuItems = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "Projects",
            link: "/projects"
        },
        {
            id: 3,
            name: "About",
            link: "/about"
        },
        {
            id: 4,
            name: "Extras",
            link: "/extras"
        },
    ]

    return (
        <nav className="nav-bar">
            <ul className="nav-items-list">
                {menuItems?.map(item => {
                    return (
                        <li key={item.id} className="nav-items">
                            <NavLink to={item.link}>{item.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
