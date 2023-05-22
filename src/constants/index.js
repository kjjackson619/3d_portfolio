
import {
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    tedTalk,
    github,
    express,
    materialize,
    osu,
    expeditors,
    fairchild,
    shirt,
    aiImage,
    shop,
    book,
    pinIt,
    pizza,
    mySQL,
} from "../../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Web Developer",
        icon: web,
    },
    {
        title: "JavaScript Developer",
        icon: javascript,
    },
    {
        title: "React Developer",
        icon: reactjs,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },

];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "Materialize",
        icon: materialize,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "github",
        icon: github,
    },
    {
        name: "mySQL",
        icon: mySQL,
    },
];

const experiences = [
    {
        title: " Bachelor's Degree of Arts in Sociology",
        company_name: "Ohio State University",
        icon: osu,
        iconBg: "#fff",
        date: "August 2013 - December 2017",
        points: [
            "Graduated with a Bachelor's of Arts Degree in Sociology at The Ohio State University.",
        ],
    }, 
    {
        title: "Ocean Import Agent",
        company_name: "Expeditors",
        icon: expeditors,
        iconBg: "#fff",
        date: "August 2018 - September 2022",
        points: [
            "Coordinated the delivery of 40 shipments per day utilizing diligent time management and organizational skills.",
            "Managed 6 TMS systems daily showcasing the ability to migrate different programs and learn their nuances quickly.",
            "Effectively communicated with a team of 7 to provide maximum client satisfaction through dedicated team work.",
        ],
    },

    {
        title: "Full Stack Web Developer Certificate",
        company_name: "Ohio State University",
        icon: osu,
        iconBg: "#fff",
        date: "October 2021 - April 2022",
        points: [
            "Graduated after going back to school with a certificate in Full Stack Web Development from the OSU College of Engineering.",
            "Finished program with a 4.0 GPA.",
        ],
    },
    {
        title: "Capacity Manager",
        company_name: "Fairchild Freight LLC",
        icon: fairchild,
        iconBg: "#fff",
        date: "September 2022 - Present",
        points: [
            "Oversee operations on 7 different client accounts to ensure efficient and timely shipment delivery for 60 loads per week.",
            "Work within a team of 4 to ensure the branch operations and deadlines are completed in a timely efficient manner.",
            "Communicate daily within the organization as well as with customers to ensure regular updates on statuses and progress.",
            "Sales skills and the ability to negotiate as well as maximize market value.",
            "Promoted to management role within first 3 months of employment for work ethic, problem solving, and exemplary service.",
            "April Employee of the Month 2023"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Endorses Kevin Jackson as a Full Stack Web Developer.",
        name: "Judy Cook",
        designation: "Programming Expert",
        company: "TED",
        image: tedTalk,
    },
];

const projects = [
    {
        name: "Three.js Shirt Customizer w/ DALLE AI",
        description:
            "User can customize a 3D shirt model powered by three.js. Change color of shirt from hundreds of options via full color palette, add a personal logo from your desktop, or use the interactive AI interface to create a logo or pattern for you!",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "three.js",
                color: "green-text-gradient",
            },
            {
                name: "openai",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "blue-text-gradient",
            },
        ],
        image: shirt,
        source_code_link: "https://github.com/kjjackson619/three-js-site",
    },
    {
        name: "AI Image Generator",
        description:
            "Utilize powerful AI image rendering to create a collection of digitally generated images to share with your peers!",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "openai",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
        ],
        image: aiImage,
        source_code_link: "https://github.com/kjjackson619/ai_image_generator",
    },
    {
        name: "Shirt Shop LLC",
        description:
            "The Shirt Shop LLC is a one stop shop for all shirt needs whether it be from heavy to light weight, we got you covered!",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "node",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "blue-text-gradient",
            },
            {
                name: "graphql",
                color: "green-text-gradient",
            },
        ],
        image: shop,
        source_code_link: "https://github.com/kjjackson619/project-03",
    },
    {
        name: "Book Search Engine",
        description:
            "Avid readers can search and discover new books to add to their reading collection. User can keep an ongoing list of book ideas to purchase or rent in the future!",
        tags: [
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "node",
                color: "pink-text-gradient",
            },
            {
                name: "react",
                color: "blue-text-gradient",
            },
        ],
        image: book,
        source_code_link: "https://github.com/kjjackson619/book-search-engine",
    },
    {
        name: "PIN IT!",
        description:
            "PIN IT is an idea board where users can store a collection of ideas to get inspiration for their next big project!",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "mySQL",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: pinIt,
        source_code_link: "https://github.com/kjjackson619/project-02",
    },
    {
        name: "Project Pizza",
        description:
            "With our user-friendly and intuitive design, locating that perfect slice has never been easier! Ever wanted a filter specifically for pizza? We have you covered!",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: pizza,
        source_code_link: "https://github.com/YourFunkyDad/project-pizza",
    },
];

export { services, technologies, experiences, testimonials, projects };