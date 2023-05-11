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
    comingSoon,
    github,
    express,
    materialize,
    osu,
    expeditors,
    fairchild,
    shirt,
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
            "Utilized time management skills and organization to coordinate the shipment delivery for 20-40 shipments per day.",
            "Worked within 4-6 TMS systems daily and showcased the ability to migrate different programs and learn the nuances quickly.",
            "Worked and communicated well within a team of 7 to provide maximum client satisfaction.",
        ],
    },

    {
        title: "Full Stack Web Developer Certificate",
        company_name: "Ohio State University",
        icon: osu,
        iconBg: "#fff",
        date: "October 2021 - April 2022",
        points: [
            "Graduated after going back to school with a certificate in Full Stack Web Development.",
            "Also completed program at The Ohio State University and finished program with a 4.0 GPA.",
        ],
    },
    {
        title: "Capacity Manager",
        company_name: "Fairchild Freight LLC",
        icon: fairchild,
        iconBg: "#fff",
        date: "September 2022 - Present",
        points: [
            "Oversee operations on 7 different customer accounts to ensure efficient and timely shipment delivery for roughly 40-60 loads per week.",
            "Work with a team of 4 to ensure the branch operations and expectations are completed and met in a timely efficient manner.",
            "Communicate daily within the organization as well as with customers to ensure regular updates on statuses and progress.",
            "Sales skills and the ability to negotiate as well as maximize market value.",
            "Promoted to management role with first 3 months of employment for work ethic.",
            "Nominated for April Employee of the Month for exemplory service and diligent problem solving skills."
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
        image: shirt,
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
    {
        name: "",
        description:
            "",
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
        image: {},
        source_code_link: "https://github.com/",
    },
    {
        name: "",
        description:
            "",
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
        image: {},
        source_code_link: "https://github.com/",
    },
    {
        name: "",
        description:
            "",
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
                name: "react",
                color: "pink-text-gradient",
            },
        ],
        image: {},
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };