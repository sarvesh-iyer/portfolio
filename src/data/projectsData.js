import Ailaysa from '../assets/images/projects/ailaysa.png'
import AilaysaPlaceholder from '../assets/images/projects-placeholders/ailaysa.png'
import Langsmart from '../assets/images/projects/langsmart.png'
import LangsmartPlaceholder from '../assets/images/projects-placeholders/langsmart.png'
import MonksOfMethod from '../assets/images/projects/monks-of-method.png'
import MonksOfMethodPlaceholder from '../assets/images/projects-placeholders/monks-of-method.png'
import InteriorHarmony from '../assets/images/projects/interior-harmony.png'
import InteriorHarmonyPlaceholder from '../assets/images/projects-placeholders/interior-harmony.png'
import CityEcommerce from '../assets/images/projects/city-ecommerce.png'
import CityEcommercePlaceholder from '../assets/images/projects-placeholders/city-ecommerce.png'
import ParkingSystem from '../assets/images/projects/parking-system.png'
import ParkingSystemPlaceholder from '../assets/images/projects-placeholders/parking-system.png'
import RTE from '../assets/images/projects/custom-rte.png'
import RTEPlaceholder from '../assets/images/projects-placeholders/custom-rte.png'
import ComponentLib from '../assets/images/projects/component-library.png'
import ComponentLibPlaceholder from '../assets/images/projects-placeholders/component-library.png'
import NewsPortal from '../assets/images/projects/news-portal.png'
import NewsPortalPlaceholder from '../assets/images/projects-placeholders/news-portal.png'
import { skillsList } from './skillsList'

export const projectsData = [
    {
        id: 1,
        pageLink: "/works/1",
        name: "Ailaysa",
        description: "Ailaysa is an AI-powered, multilingual, and multimodal content development and localization platform. It provides provide content, translation and localization solutions to users using AI technologies.",
        attributes: {
            "Role": "Front-end(React) developer",
            "Technologies": "",
        },
        siteLink: "https://ailaysa.com/",
        githubLink: "",
        coverImage: Ailaysa,
        placeholderImg: AilaysaPlaceholder,
        tag: "SaaS product",
        techStack: skillsList.filter(each => [
            1,2,3,4,5,6,10,11,13,14,15,20,21
        ].includes(each.id))
    },
    {
        id: 2,
        pageLink: "/works/2",
        name: "Langsmart",
        description: "Langsmart provides a wide range of partnership opportunities for both sell-side and buy-side entities. It provides a broad spectrum of content and language services tailored to meet cutomer's diverse needs.",
        attributes: {
            "Role": "Front-end(React) developer",
            "Technologies": "",
        },
        siteLink: "https://langsmart.com/",
        githubLink: "",
        coverImage: Langsmart,
        placeholderImg: LangsmartPlaceholder,
        tag: "",
        techStack: skillsList.filter(each => [
            1,3,5,10,12,13,21
        ].includes(each.id))
    },
    {
        id: 3,
        pageLink: "/works/3",
        name: "Monks of Methods",
        description: "Monks of Methods is an e-commerce platform that provides fully customized and tailored wardrobes for men, delivered right to their doorstep, while maintaining transparency in their methods.",
        attributes: {
            "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://monksofmethod.com/",
        githubLink: "",
        coverImage: MonksOfMethod,
        placeholderImg: MonksOfMethodPlaceholder,
        tag: "",
        techStack: skillsList.filter(each => [
            17,7,8,9,10,12,13,21
        ].includes(each.id))
    },
    {
        id: 7,
        pageLink: "/works/7",
        name: "UI Component Library",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://ui-component-storybook.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/ui-component-library",
        coverImage: ComponentLib,
        placeholderImg: ComponentLibPlaceholder,
        tag: "Component library",
        techStack: skillsList.filter(each => [
            1,4,5,13
        ].includes(each.id))
    },
    {
        id: 5,
        pageLink: "/works/5",
        name: "Policy Manager",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://polymanager.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/electron-policy-manager",
        coverImage: "",
        placeholderImg: "",        
        tag: "Web Application",
        techStack: skillsList.filter(each => [
            1,2,3,5,10,12,13,16,21
        ].includes(each.id))
    },
    {
        id: 6,
        pageLink: "/works/6",
        name: "Cookie Validator Check",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://www.npmjs.com/package/cookie-validator-check",
        githubLink: "https://github.com/sarvesh-iyer/cookie-validator-check",
        coverImage: "",
        placeholderImg: "",        
        tag: "Npm package",
        techStack: skillsList.filter(each => [
            23,5
        ].includes(each.id))
    },
    
    {
        id: 8,
        pageLink: "/works/8",
        name: "Interior Harmony",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://my-interior-website.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/interior-designing-website-landing-page",
        coverImage: InteriorHarmony,
        placeholderImg: InteriorHarmonyPlaceholder,
        tag: "Static Website",
        techStack: skillsList.filter(each => [
            1,8,9,7,13,24
        ].includes(each.id))
    },
    {
        id: 9,
        pageLink: "/works/9",
        name: "Custom Rich Text Editor",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://custom-rte.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/custom-rich-text-editor",
        coverImage: RTE,
        placeholderImg: RTEPlaceholder,
        tag: "Wysiwyg editor",
        techStack: skillsList.filter(each => [
            1,57,8,9,13
        ].includes(each.id))
    },
    {
        id: 10,
        pageLink: "/works/10",
        name: "Firebase News Panel",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://firebase-news-panel.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/Firebase-News-Panel-react.js",
        coverImage: NewsPortal,
        placeholderImg: NewsPortalPlaceholder,
        tag: "Web Application",
        techStack: skillsList.filter(each => [
            1,5,7,8,9,12,13,16
        ].includes(each.id))
    },
    {
        id: 11,
        pageLink: "/works/11",
        name: "City E-commerce",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://city-ecommerce.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/City-Ecommerce-Website",
        coverImage: CityEcommerce,
        placeholderImg: CityEcommercePlaceholder,
        tag: "Static website",
        techStack: skillsList.filter(each => [
            8,9,11,7,13
        ].includes(each.id))
    },
    {
        id: 12,
        pageLink: "/works/12",
        name: "Smart Parking System",
        description: "",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "",
        githubLink: "https://github.com/sarvesh-iyer/Smart-Parking-System-IOT",
        coverImage: ParkingSystem,
        placeholderImg: ParkingSystemPlaceholder,
        tag: "IOT",
        techStack: skillsList.filter(each => [
            22
        ].includes(each.id))
    },
]