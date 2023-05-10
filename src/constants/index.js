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
    carrent,
    jobit,
    tripguide,
    threejs,
    tedTalk,
    comingSoon,
    github,
    express,
    materialize,
    osu,
    expeditors,
    fairchild,
} from "../assets";

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
];

const experiences = [
    {
        title: " Bachelor's Degree of Arts in Sociology",
        company_name: "Ohio State University",
        icon: osu,
        iconBg: "#fff",
        date: "August 2013 - December 2017",
        points: [
            "",
            "",
            "",
            "",
        ],
    }, 
    {
        title: "Ocean Import Agent",
        company_name: "Expeditors",
        icon: expeditors,
        iconBg: "#fff",
        date: "August 2018 - September 2022",
        points: [
            "",
            "",
            "",
            "",
        ],
    },

    {
        title: "Full Stack Web Developer Certificate",
        company_name: "Ohio State University",
        icon: osu,
        iconBg: "#fff",
        date: "October 2021 - April 2022",
        points: [
            "",
            "",
            "",
            "",
        ],
    },
    {
        title: "Capacity Manager",
        company_name: "Fairchild Freight LLC",
        icon: fairchild,
        iconBg: "#fff",
        date: "September 2022 - Present",
        points: [
            "",
            "",
            "",
            "",
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
    {
        testimonial:
            "Pending!",
        name: "...",
        designation: "...",
        company: "...",
        image: comingSoon,
    },
    {
        testimonial:
            "Pending!",
        name: "...",
        designation: "...",
        company: "...",
        image: comingSoon,
    },
];

const projects = [
    {
        name: "Three.js Shirt Customizer w/ DALLE AI",
        description:
            "",
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
        ],
        image: {},
        source_code_link: "https://github.com/kjjackson619/three-js-site",
    },
    {
        name: "AI Image Generator",
        description:
            "",
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
        ],
        image: {},
        source_code_link: "https://github.com/kjjackson619/ai_image_generator",
    },
    {
        name: "",
        description:
            "",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: {},
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };