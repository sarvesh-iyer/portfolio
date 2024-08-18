import { skillsList } from './skillsList'
import { projectsImgData } from './projectsImgData'
import { Helper } from '../helpers/Helper'

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
        tag: "SaaS product",
        techStack: Helper.filterAndReorderArray(skillsList, [1,2,3,4,5,6,10,11,13,14,15,20,21]),
        images: projectsImgData?.find(each => each.id === 1)
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
        tag: "",
        techStack: Helper.filterAndReorderArray(skillsList, [1,3,5,10,12,13,21]),
        images: projectsImgData?.find(each => each.id === 2)

        
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
        tag: "",
        techStack: Helper.filterAndReorderArray(skillsList, [17,7,8,9,10,12,13,21]), 
        images: projectsImgData?.find(each => each.id === 3)

    },
    {
        id: 5,
        pageLink: "/works/5",
        name: "Policy Manager",
        description: "Policy Manager is a powerful web app designed to streamline insurance policy management. Perfect for users who need an organized way to track policies, it offers robust features for policy oversight and payment tracking.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://polymanager.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/electron-policy-manager",
        tag: "Web Application",
        techStack: Helper.filterAndReorderArray(skillsList, [1,2,3,5,10,12,13,16,21]), 
        images: projectsImgData?.find(each => each.id === 5)

    },
    {
        id: 7,
        pageLink: "/works/7",
        name: "UI Component Library",
        description: "UI Component Library offers highly customizable and controlled React components, designed for flexibility and ease of use in web applications. Built with Storybook and bundled with Rollup, it integrates seamlessly into your projects.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://ui-component-storybook.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/ui-component-library",
        tag: "Component library",
        techStack: Helper.filterAndReorderArray(skillsList, [1,4,5,13]),
        images: projectsImgData?.find(each => each.id === 7)

    },
    {
        id: 6,
        pageLink: "/works/6",
        name: "Cookie Validator Check",
        description: "cookie-validator-check is a utility package for validating cookies to ensure they contain specific key-value pairs. It triggers validation when the document becomes visible, allowing for redirection if the condition is met.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://www.npmjs.com/package/cookie-validator-check",
        githubLink: "https://github.com/sarvesh-iyer/cookie-validator-check",
        tag: "Npm package",
        techStack: Helper.filterAndReorderArray(skillsList, [23,5]),
        images: projectsImgData?.find(each => each.id === 6)

    },
    
    {
        id: 8,
        pageLink: "/works/8",
        name: "Interior Harmony",
        description: "Interior Harmony is a React-based landing page for the furniture industry, featuring image carousels, an infinite image looper, and a responsive contact form with EmailJS integration. Optimized for all devices, it ensures a seamless user experience.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://my-interior-website.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/interior-designing-website-landing-page",
        tag: "Static Website",
        techStack: Helper.filterAndReorderArray(skillsList, [1,8,9,7,13,24]),
        images: projectsImgData?.find(each => each.id === 8)

    },
    {
        id: 9,
        pageLink: "/works/9",
        name: "Custom Rich Text Editor",
        description: "This custom WYSIWYG editor is built on top of Quill.js to explore and customize WYSIWYG editors, offering versatile features and a user-friendly experience for text formatting and content management.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://custom-rte.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/custom-rich-text-editor",
        tag: "Wysiwyg editor",
        techStack: Helper.filterAndReorderArray(skillsList, [1,57,8,9,13]),
        images: projectsImgData?.find(each => each.id === 9)

    },
    {
        id: 10,
        pageLink: "/works/10",
        name: "Firebase News Panel",
        description: "Firebase News Portal is a dynamic web app built with React and Google Firebase. It offers full CRUD functionality, allowing users to efficiently manage news content.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://firebase-news-panel.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/Firebase-News-Panel-react.js",
        tag: "Web Application",
        techStack: Helper.filterAndReorderArray(skillsList, [1,5,7,8,9,12,13,16]),
        images: projectsImgData?.find(each => each.id === 10)

    },
    {
        id: 11,
        pageLink: "/works/11",
        name: "City E-commerce",
        description: "City E-commerce is a static website developed as part of my initial learning of frontend development, including HTML, CSS, and responsive design, during my internship. The project emphasizes high performance, and optimizing web vitals.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "https://city-ecommerce.netlify.app/",
        githubLink: "https://github.com/sarvesh-iyer/City-Ecommerce-Website",
        tag: "Static website",
        techStack: Helper.filterAndReorderArray(skillsList, [8,9,11,7,13]),
        images: projectsImgData?.find(each => each.id === 11)

    },
    {
        id: 12,
        pageLink: "/works/12",
        name: "Smart Parking System",
        description: "This is an IoT project build using a Raspberry Pi to manage parking spaces. It displays available slots in real-time and automatically opens the gate when spots are free, streamlining parking and enhancing convenience.",
        attributes: {
            // "Role": "Front-end(Shopify theme) developer",
            "Technologies": "",
        },
        siteLink: "",
        githubLink: "https://github.com/sarvesh-iyer/Smart-Parking-System-IOT",
        tag: "IOT - College",
        techStack: Helper.filterAndReorderArray(skillsList, [22]),
        images: projectsImgData?.find(each => each.id === 12)

    },
]