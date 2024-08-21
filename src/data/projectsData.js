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
        images: projectsImgData?.find(each => each.id === 1),

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
        tag: "Service website",
        techStack: Helper.filterAndReorderArray(skillsList, [1,3,5,10,12,13,21]),
        images: projectsImgData?.find(each => each.id === 2),
        
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
        tag: "E-commerce",
        techStack: Helper.filterAndReorderArray(skillsList, [17,7,8,9,10,12,13,21]), 
        images: projectsImgData?.find(each => each.id === 3),

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
        images: projectsImgData?.find(each => each.id === 5),
        features: [
            {
                id: 1,
                title: "Detailed Policy Management",
                desc: "Users can add and manage their policy details, including the issuing company, policy number, start and end dates, premium payment dates, and even attach images or PDFs of their policy documents."
            },
            {
                id: 2,
                title: "Dashboard Insights",
                desc: "The application features a dashboard that provides a snapshot of all policies on a single page. It includes a calendar displaying upcoming payment due dates, total amounts to be paid for the month and year, and other key insights."
            },
            {
                id: 3,
                title: "Payment Tracking and Marking",
                desc: "Users can track their premium payments and utilize the 'Mark as Paid' functionality to update the status of a policy's payment for the year."
            },
            {
                id: 4,
                title: "Visual Analytics",
                desc: "The app includes charts that visually represent the distribution of premiums by month and by insurance company, helping users better understand their payment patterns."
            },
            {
                id: 5,
                title: "Firebase Integration",
                desc: "The application leverages Google Firebase for both data storage and user authentication, ensuring secure and reliable management of user data."
            },
            {
                id: 6,
                title: "Insurance Company Management",
                desc: "Users can easily add new insurance companies to the system, ensuring that all relevant information is stored and accessible."
            },
        ],
        dynamicSection: [
            {
                id: 1,
                sectionTitle: "The problem 😣",
                sectionDesc: "My family holds multiple insurance policies from various companies, and I am responsible for <span class='highlighted-text'>managing</span> the payments and <span class='highlighted-text'>tracking</span> of these policies.  <br />I have documented each policy by taking <span class='highlighted-text'>images of the policy documents</span>. 🖼️ However, when it's time to pay premiums, I refer to these images and rely on my <span class='highlighted-text'>memory</span> to manage and <span class='highlighted-text'>track</span> the due dates.🤯 <br /> <br />This reliance on <span class='highlighted-text'>manual tracking</span> and <span class='highlighted-text'>memory</span> has led to occasional <span class='highlighted-text'>miss</span> in premium due dates. To address this issue, I need a more reliable and <span class='highlighted-text'>organized system</span> that ensures timely payments and provides a clear <span class='highlighted-text'>overview</span> of all policy-related information.🤔"
            },
            {
                id: 2,
                sectionTitle: "My Solution 💡",
                sectionDesc: `For efficiently managing my family's various policies from a <span class='highlighted-text'>single platform</span>, I build this. ✌️ <br /> The primary motive was to <span class='highlighted-text'>keep track</span> of policy payments, <span class='highlighted-text'>monitor</span> whether they are up-to-date for the year, and determine how many more years of payments are required. Additionally, I aimed to gain valuable <span class='highlighted-text'>insights</span> into my policies by calculating the total amount needed on a <span class='highlighted-text'>monthly and yearly</span> basis, eliminating the need for <span class='highlighted-text'>manual calculations</span> for all policies.📝 <br /><br />This project not only simplifies the management of <span class='highlighted-text'>multiple policies</span> but also provides a clear overview of <span class='highlighted-text'>financial commitments</span> related to them.📈🤩`
            },
        ]

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
        images: projectsImgData?.find(each => each.id === 7),
        features: [
            {
                id: 1,
                title: "Highly Customizable Components",
                desc: "Each component is built to be fully customizable, allowing developers to adjust styles, behaviors, and interactions to fit the specific needs of their projects."
            },
            {
                id: 2,
                title: "Controlled Components",
                desc: "The components are designed to be controlled, offering precise control over their state and behavior, which is crucial for building dynamic and responsive interfaces."
            },
            {
                id: 3,
                title: "Storybook Integration",
                desc: "Developed using Storybook, the library supports isolated component development, making it easier to visualize, test, and refine each component individually."
            },
            {
                id: 4,
                title: "Efficient Bundling with Rollup",
                desc: "Rollup is used for bundling, ensuring that the components are packaged efficiently for optimal performance in production environments."
            },
            {
                id: 5,
                title: "Peer Dependencies",
                desc: "The library leverages Material UI (MUI) and React Select as peer dependencies, ensuring compatibility with existing UI frameworks while offering advanced customization options."
            },
        ],
        dynamicSection: [
            {
                id: 1,
                sectionTitle: "Why this 🤔",
                sectionDesc: "I developed the UI component library to delve into <span class='highlighted-text'>library development</span> and to gain hands-on experience with <span class='highlighted-text'>Storybook</span>. The primary goal was to create a set of independent, customizable components that can be <span class='highlighted-text'>reused</span> across <span class='highlighted-text'>multiple projects</span>, rather than duplicating code. 👉🏻👈🏻 <br /><br />Building these components within a <span class='highlighted-text'>standalone</span> environment facilitates better <span class='highlighted-text'>development</span> and <span class='highlighted-text'>testing</span>, which is why I chose <span class='highlighted-text'>Storybook</span>. This approach ensures that components are not only <span class='highlighted-text'>reusable</span> but also easily maintainable and adaptable for <span class='highlighted-text'>future projects</span>. 🚀"
            },
        ]

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
        images: projectsImgData?.find(each => each.id === 6),
        features: [
            {
                id: 1,
                title: "Automatic Cookie Validation",
                desc: "The package automatically checks cookies when the document is visible, ensuring that the cookies meet specific criteria without requiring manual intervention."
            },
            {
                id: 2,
                title: "Key-Value Pair Verification",
                desc: "Validates that the cookies contain the required key-value pairs, helping to maintain data integrity and ensure that essential information is always present."
            },
            {
                id: 3,
                title: "Conditional Redirection",
                desc: " If the validation condition is met, the package can redirect the user to a specified URL, streamlining the process of handling cookie-based actions."
            },
            {
                id: 4,
                title: "Enhanced Security",
                desc: "By validating cookies automatically, this package helps to prevent unauthorized or corrupted data from being used within your application, adding an extra layer of security."
            },
            {
                id: 5,
                title: "Simple Integration",
                desc: "The package is easy to integrate into existing projects, requiring minimal setup while providing significant benefits in terms of cookie management."
            },
        ],
        dynamicSection: [
            {
                id: 1,
                sectionTitle: "Why this 🤔",
                sectionDesc: `I developed the "cookie-validator-check" utility package to resolve an issue that I encountered during <span class='highlighted-text'>site authentication</span>. Specifically, when logging in on one tab of a browser, the user was <span class='highlighted-text'>not automatically</span> logged in on other open tabs, as the cookies were not being <span class='highlighted-text'>validated</span> across tabs. 🔍 <br /><br />To address this, I created a utility that validates cookies whenever the <span class='highlighted-text'>document visibility</span> changes, ensuring that users remain logged in consistently across <span class='highlighted-text'>all tabs</span>. 👍 <br />By packaging this functionality as a utility and <span class='highlighted-text'>publishing</span> it to the <span class='highlighted-text'>npm</span> registry, I aimed to provide a <span class='highlighted-text'>reusable</span> solution that can be <span class='highlighted-text'>integrated</span> into various projects, enhancing user <span class='highlighted-text'>experience</span> and <span class='highlighted-text'>authentication reliability</span>. 🔐`
            },
        ]
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
        images: projectsImgData?.find(each => each.id === 8),
        features: [
            {
                id: 1,
                title: "Image Carousels",
                desc: "The website includes sleek image carousels built using the slick-carousel package. These carousels enable a dynamic and responsive display of furniture designs, ensuring a seamless user experience across different devices."
            },
            {
                id: 2,
                title: "Custom Infinite Image Looper",
                desc: "It is a custom-designed infinite image looper, reminiscent of a marquee. This feature creates a continuous scrolling effect, allowing images to flow in an endless loop. It was crafted to challenge and expand my CSS abilities, adding a unique, eye-catching element to the site."
            },
            {
                id: 3,
                title: "Email.js Integration",
                desc: "The site's form is integrated with EmailJS. This form allows users to easily submit their details, which are then sent directly to a designated email address. It showcases my ability to combine frontend form design with backend email handling."
            },
            {
                id: 4,
                title: "Fully Responsive Design",
                desc: "The entire site is built to be fully responsive, providing a smooth and consistent experience across all screen sizes. This aspect of the project was particularly focused on mastering CSS media queries and responsive layout techniques."
            },
            {
                id: 5,
                title: "Modern Technology Stack",
                desc: "Developed using React and Vite, the project leverages the latest web technologies to ensure fast load times and a responsive interface. This project served as a platform to experiment with and apply advanced CSS techniques in a modern development environment."
            },
        ],
        dynamicSection: [
            {
                id: 1,
                sectionTitle: "Why this 🤔",
                sectionDesc: `This landing page was developed as a project to <span class='highlighted-text'>refresh</span> my <span class='highlighted-text'>CSS</span> knowledge and to experiment with <span class='highlighted-text'>EmailJS</span> integration for handling form submissions. Before this, my work was heavily concentrated on React's <span class='highlighted-text'>data management</span>, <span class='highlighted-text'>Rest API</span> integrations, and other <span class='highlighted-text'>data-centric</span> tasks in front-end development. 📑 <br /><br />Building this landing page allowed me to <span class='highlighted-text'>re-engage</span> with the design and styling aspects of <span class='highlighted-text'>web development</span>, and to experiment with implementing a <span class='highlighted-text'>new tool</span> in the process. 🎨`
            },
        ]
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
        images: projectsImgData?.find(each => each.id === 9),
        features: [
            {
                id: 1,
                title: "Custom Menu Bar",
                desc: "The custom menu bar includes file management for opening and downloading files(.docx and .txt), a content edit menu for precise adjustments, a full-screen mode for focused writing, and advanced formatting tools for quick case changes."
            },
            {
                id: 2,
                title: "Word and Character Count",
                desc: "A built-in word and character count component provides real-time tracking of text length, ensuring that users can easily monitor and adhere to content length requirements."
            },
            {
                id: 3,
                title: "Find and Replace Functionality",
                desc: "The editor includes a powerful find and replace tool, allowing users to search for specific words or phrases and replace them across the document effortlessly. This feature is particularly useful for large documents where consistency in terminology is crucial."
            },
            {
                id: 4,
                title: "Help Section Modal",
                desc: "To enhance usability, the editor features a help section modal that displays all available keyboard shortcuts. This makes it easy for users to familiarize themselves with the editor’s capabilities and streamline their workflow."
            },
            {
                id: 5,
                title: "Custom Toolbar",
                desc: "The custom toolbar offers extensive options beyond basic text editing, including the ability to choose from a variety of Google fonts for flexible text presentation, adjust font sizes for precise control, and incorporate basic tables, providing users with a versatile set of tools."
            },
        ],
        dynamicSection: [
            {
                id: 1,
                sectionTitle: "Why this 🤔",
                sectionDesc: `I developed this project as a proof of concept <span class='highlighted-text'>(POC)</span> to explore the <span class='highlighted-text'>customization potential</span> of existing editors. During this process, I evaluated several options, including <span class='highlighted-text'>paid</span> and <span class='highlighted-text'>open-source</span> editors like CKEditor, TinyMCE, Editor.js, Draft.js, and <span class='highlighted-text'>Quill.js</span>. ⚖️ <br />I ultimately chose Quill.js due to its <span class='highlighted-text'>robustness</span>, <span class='highlighted-text'>extensive API</span>, strong <span class='highlighted-text'>customization capabilities</span>, and the fact that it is <span class='highlighted-text'>open-source</span>. 🏆 <br /><br />This project was also one of my <span class='highlighted-text'>early experiences</span> with React, allowing me to develop a flexible and <span class='highlighted-text'>tailored text editor</span> while <span class='highlighted-text'>honing</span> my skills in front-end development. 🏗️`
            },
        ]
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
        images: projectsImgData?.find(each => each.id === 10),
        features: [
            {
                id: 1,
                title: "Add News",
                desc: "The application includes a dedicated 'Add News' page where users can input news details such as the title, description, and an associated image. This feature ensures that the news content is rich and visually engaging, catering to a wide audience."
            },
            {
                id: 2,
                title: "View News",
                desc: "On the 'View News' page, all news entries are displayed in a chronological order, complete with their respective timestamps. This provides users with a clear overview of when each piece of news was created, ensuring that the information is current and relevant."
            },
            {
                id: 3,
                title: "Update News",
                desc: "Users can easily update any news entry through the portal. Upon making changes, the application automatically updates the timestamp, reflecting the most recent modifications. This feature ensures that the news remains accurate and up-to-date."
            },
            {
                id: 4,
                title: "Delete News",
                desc: "The portal allows users to delete any news item when it is no longer relevant or required. This feature, combined with the update function, gives users full control over the content displayed in the portal."
            },
        ],
        dynamicSection: [
            {
                id: 1,
                sectionTitle: "Why this 🤔",
                sectionDesc: `This was the <span class='highlighted-text'>first</span> project that I built while learning the <span class='highlighted-text'>React</span> framework. Rather than building simple static pages, I wanted to develop dynamic <span class='highlighted-text'>web-app</span> that allowed for <span class='highlighted-text'>real-time</span> data interaction. 📊 <br /><br />Coming from a <span class='highlighted-text'>background</span> in <span class='highlighted-text'>Java</span> and <span class='highlighted-text'>databases</span>, I was eager to create something that involved <span class='highlighted-text'>data management</span> and <span class='highlighted-text'>manipulation</span>. 💪🏼 <br />This led to the <span class='highlighted-text'>idea</span> of a News panel where I could add, update, delete, and view <span class='highlighted-text'>news items</span>. 💡 <br />For <span class='highlighted-text'>data storage</span>, I chose <span class='highlighted-text'>Firebase</span> because of my <span class='highlighted-text'>previous experience</span> with it, which made it easy to set up and allowed me to <span class='highlighted-text'>focus</span> more on <span class='highlighted-text'>learning</span> and <span class='highlighted-text'>implementing</span> React logic. 🤩`
            },
        ]
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
        images: projectsImgData?.find(each => each.id === 11),
        features: [
            {
                id: 1,
                title: "Web Vitals Optimization",
                desc: "The site prioritizes core web vitals, including loading performance, interactivity, and visual stability. Special attention was given to optimizing these metrics to ensure a smooth and efficient user experience."
            },
            {
                id: 2,
                title: "Page Speed Metrics",
                desc: "Enhancements were made to improve page speed, reducing load times and ensuring quick, responsive interactions. Techniques such as image optimization and efficient resource loading were employed to achieve this."
            },
            {
                id: 3,
                title: "Responsive Design",
                desc: "The website is designed to be fully responsive, ensuring that it provides an optimal viewing experience across a range of devices, from desktops to smartphones. This involved using flexible grid layouts, media queries, and fluid images."
            },
            {
                id: 4,
                title: "Image Handling",
                desc: "Given the site's heavy use of images, significant effort was made to handle them efficiently. This included optimizing image sizes and formats to minimize impact on load times and overall site performance."
            },
            {
                id: 5,
                title: "Site Accessibility",
                desc: "Accessibility was a key consideration, with efforts made to ensure the site is usable by people with disabilities. This included adhering to best practices for semantic HTML, keyboard navigation, and screen reader support."
            },
            {
                id: 6,
                title: "Development Best Practices",
                desc: "Throughout the project, best practices in frontend development were followed, including clean code practices, efficient use of resources, and thorough testing across different devices and browsers."
            },
        ]
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
        techStack: Helper.filterAndReorderArray(skillsList, [22, 25]),
        images: projectsImgData?.find(each => each.id === 12),
        features: [
            {
                id: 1,
                title: "Real-Time Slot Display",
                desc: "Continuously monitors and displays available parking slots in real-time for efficient parking management."
            },
            {
                id: 2,
                title: "IoT Integration",
                desc: "Utilizes Raspberry Pi for reliable and responsive control, connecting sensors and gate mechanisms for seamless operation."
            },
            {
                id: 3,
                title: "Automated Gate Control",
                desc: "Automatically opens the gate when a parking spot is available, ensuring smooth and hassle-free entry."
            },
            {
                id: 4,
                title: "Enhanced User Experience",
                desc: "Streamlines the parking process by reducing manual intervention and offering a convenient, automated solution."
            },
            {
                id: 5,
                title: "Scalability",
                desc: "The system can be easily scaled to manage multiple parking lots or integrated with additional features like payment processing or mobile app control."
            },
        ]
    },
]