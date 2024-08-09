import Home from '../assets/images/navbar-icon/home.svg'
import HomeActive from '../assets/images/navbar-icon/home_fill.svg'
import Work from '../assets/images/navbar-icon/work.svg'
import WorkActive from '../assets/images/navbar-icon/work_fill.svg'
import Person from '../assets/images/navbar-icon/person.svg'
import PersonActive from '../assets/images/navbar-icon/person_fill.svg'
import Message from '../assets/images/navbar-icon/message.svg'
import MessageActive from '../assets/images/navbar-icon/message_fill.svg'

export const navDataList = [
    {
        id: 4,
        name: "Home",
        link: "/",
        icon: Home,
        activeIcon: HomeActive
    },
    {
        id: 1,
        name: "Works",
        link: "/works",
        icon: Work,
        activeIcon: WorkActive 
    },
    {
        id: 2,
        name: "About",
        link: "/about",
        icon: Person,
        activeIcon: PersonActive
    },
    {
        id: 3,
        name: "Contact",
        link: "#contact",
        icon: Message,
        activeIcon: MessageActive
    },
]