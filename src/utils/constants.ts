import { allianz,moladin,viva,pointer,project1,web, gcp, html, 
  unity, microsoftoffice, blender, nginx, 
  git, firebase, aws, python, php, kotlin, 
  java, go, csharp, tailwind, postgresql, 
  mysql,angular,bootstrap,css,docker,javascript,
  mongoDB,nextJS,react,typescript,nodeJsBlog,ollamaBlog,
  pythonBlog,
  } from "@/assets";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Prayugo24?tab=repositories",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/prayugo-dwi-setiyoko-8b5544160/",
  },
] as const;



export const NAV_LINKS = [
  {
    title: "Home",
    path: "/",
    styles:"cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "About me",
    path: "/about",
    styles:"cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "Experience",
    path: "/experience",
    styles:"cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "Portofolio",
    path: "/portofolio",
    styles:"cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "Blog",
    path: "/blog",
    styles:"cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
] as const;

// constants.js atau constants.ts

export const CATEGORIES = ["General", "Technology"];

export const PROJECTS_BLOG = [
  {
    title: "General Project 1",
    description: "This is a general project description.",
    tags: [
      { name: "HTML", color: "text-blue-500" },
      { name: "CSS", color: "text-green-500" },
    ],
    image: allianz,
    source_code_link: "https://github.com/user/repo1",
    live_site_link: "https://live-site1.com",
    category: "General",
  },
  {
    title: "General Project 2",
    description: "This is another general project description.",
    tags: [
      { name: "JavaScript", color: "text-yellow-500" },
      { name: "React", color: "text-blue-500" },
    ],
    image: allianz,
    source_code_link: "https://github.com/user/repo2",
    live_site_link: "https://live-site2.com",
    category: "General",
  },
  {
    title: "General Project 2",
    description: "This is another general project description.",
    tags: [
      { name: "JavaScript", color: "text-yellow-500" },
      { name: "React", color: "text-blue-500" },
    ],
    image: allianz,
    source_code_link: "https://github.com/user/repo2",
    live_site_link: "https://live-site2.com",
    category: "General",
  },
  {
    title: "Technology Project 1",
    description: "This is a technology project description.",
    tags: [
      { name: "Node.js", color: "text-green-500" },
      { name: "Express", color: "text-gray-500" },
    ],
    image: allianz,
    source_code_link: "https://github.com/user/repo3",
    live_site_link: "https://live-site3.com",
    category: "Technology",
  },
  {
    title: "Technology Project 2",
    description: "This is another technology project description.",
    tags: [
      { name: "Python", color: "text-blue-500" },
      { name: "Django", color: "text-green-500" },
    ],
    image: allianz,
    source_code_link: "https://github.com/user/repo4",
    live_site_link: "https://live-site4.com",
    category: "Technology",
  },
];


export const NAV_LINKS_MOBILE = [
  {
    title: "Home",
    path: "/",
    styles:"block py-2 cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "About me",
    path: "/about",
    styles:"block py-2 cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "Experience",
    path: "/experience",
    styles:"block py-2 cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "Portofolio",
    path: "/portofolio",
    styles:"block py-2 cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
  {
    title: "Blog",
    path: "/blog",
    styles:"block py-2 cursor-pointer hover:text-[rgb(66,248,151)] transition"
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};

export const EXPERIENCES = [
  {
    title: "Software Engineer V",
    company_name: "PT.Allianz Life Indonesia",
    icon: allianz,
    iconBg: "#FFFFFF",
    date: "June 2023 - Present",
    points: [
      "Spearheaded the analysis and refactoring of complex business logic to enhance system efficiency.",
      "Developed and implemented advanced functionality for the Claim Auto Adjudication (CAA) system, streamlining the claims process.",
      "Led the modernization of service systems, significantly improving performance and scalability.",
      "Proactively identified and resolved system issues to ensure seamless operations.",
      "Optimized code for better performance, contributing to faster and more reliable software",
      "Created comprehensive unit tests for each functionality to guarantee code quality.",
      "Collaborated closely with cross-functional teams on various projects, fostering innovation and teamwork.",
      "Conducted thorough investigations and resolutions of production issues to maintain high system reliability."
    ],
    tech_stack:"Typescript, Java Springboot, Jasper Report, Microservice, Spring Eureka, Spring Cloud, Spring Config, Oracle Database, Soap Ui, SqL Database, Angular.js, Intellij IDE A, DataGrip, Aws Ec2, Docker"
  },
  {
    title: "Software Engineer II",
    company_name: "PT.Moladin Digital Indonesia",
    icon: moladin,
    iconBg: "#FFFFFF",
    date: "April 2022 - February 2023 (11 months)",
    points: [
      "Architected and maintained new warehouse management products within the Moladin app ecosystem, enhancing operational efficiency.",
      "Mentored and assisted new Software Engineers, accelerating their onboarding process.",
      "Conducted rigorous code reviews with the team to uphold coding standards and best practices.",
      "Developed new features utilizing Test-Driven Development (TDD) and detailed API documentation, ensuring robust and maintainable code.",
      "Deployed code to Development, Staging, and Production servers, ensuring smooth and error-free releases.",
      "Implemented bug fixes and hotfixes promptly to maintain system stability and user satisfaction.",
      "Collaborated with QA, Product, and other teams to drive project success and deliver high-quality software solutions."
    ],
    tech_stack:"Typescript, React.js, Node.js, kafka, MariaDb, Docker, Sentry, Jira, Bitbucket. GCP"
  },
  {
    title: "Software Engineer",
    company_name: "PT.Viva Media Baru (Viva Network)",
    icon: viva,
    iconBg: "#FFFFFF",
    date: "November 2019 - February 2022 (2 years 4 months)",
    points: [
      "Designed, built, and deployed code across Development, Staging, and Production environments, ensuring seamless integration and deployment.",
      "Maintained and enhanced the data structure of APIs for multiple high-traffic websites, including Tvonenews, Viva, Onepride, Vlix, Sahijab, Padang, Intipseleb, Jagodangdut, 100Kpj, and the public API for the Viva mobile application.",
      "Developed and rigorously tested code to ensure functionality and performance.",
      "Conducted thorough bug searches and analyses, implementing effective solutions to maintain optimal website performance.",
      "Created and maintained APIs with Node.js for push notifications via Firebase and reader count tracking for articles.",
      "Added comprehensive sitemaps to all Viva products for improved Google indexing.",
      "Maintained and fixed bugs in short URL applications using Golang, ensuring reliable content access.",
      "Developed project timelines for the backend team, ensuring efficient project management and delivery.",
      "Provided guidance and direction to the backend team, fostering a collaborative and productive work environment.",
    ],
    tech_stack:"Laravel, MongoDb, MariaDb, Lumen, Postman, Nginx, Node.js, Golang, Redis, Vps Aws, Gitlab, Trello, Sentry, python, flask, Postgresql"
  },
  {
    title: "Software Engineer",
    company_name: "PT. Podjok Celebes Mandiri",
    icon: pointer,
    iconBg: "#FFFFFF",
    date: "April 2018 - September 2019 (1 year 6 months)",
    points: [
      "Developed and maintained APIs for domestic and international flights for airlines including Citilink, Air Asia, Transnusa, and Trigana, enhancing the travel booking experience on pointer.co.id.",
      "Managed API systems using WSO2 and ESB, ensuring efficient and reliable API operations.",
      "Led the deployment process of code to servers, ensuring smooth and successful releases.",
      "Maintained legacy code and implemented bug fixes, ensuring stable and reliable software performance.",
      "Maintained and fixed bugs in legacy code for the Sigma Travel e-commerce mobile application, improving user experience.",
      "Integrated new API versions and updated login services in the Sigma Travel mobile application, ensuring seamless and secure user interactions."
    ],
    tech_stack:"Lumen, Wso2, Jmeter, Slim framework, SOAP, XML, Postman, Android Studio, Kotlin, Gitlab, Java Spring boot"
  },
] as const;

export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  }
] as const;

export const BLOGS = [
  {
    title: "Ollama: The Best Solution for Creating Your Own Custom AI on Your Laptop, and It’s Open Source",
    description:
      'Ever thought about having your own custom AI on your beloved laptop? If you’re curious about how to do it, you’ve come to the right place! Introducing Ollama, the coolest and free open-source project for creating your own custom AI',
    image: ollamaBlog,
    link: "https://medium.com/@pray.arsian24/ollama-the-best-solution-for-creating-your-own-custom-ai-on-your-laptop-and-its-open-source-be5d10a28fa5",
  },
  {
    title: "Understanding What Node.js and NPM Are?",
    description:
      'In short…, Node.js is a platform built on the JavaScript runtime with the purpose of making it easier to build fast and scalable network applications. Node.js uses a non-blocking I/O model that makes it very lightweight and efficient for real-time applications.',
    image: nodeJsBlog,
    link: "https://medium.com/@pray.arsian24/mengenal-apa-itu-node-js-dan-npm-8b42a939caf8",
  },
  {
    title: "Getting to Know the Python Language",
    description:
      'Python is an interpreted programming language that runs on various operating systems and can be used to create both desktop and web applications. Python is claimed to combine capabilities and functionality with very clear syntax, and it comes with a large and comprehensive standard library',
    image: pythonBlog,
    link: "https://medium.com/@pray.arsian24/berkenalan-dengan-phyton-ec9e73d2773d",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Prayugo24?tab=repositories",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/prayugo-dwi-setiyoko-8b5544160/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: web,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'React',
  'Next JS',
  'Tailwind',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Git',
  'AWS',
  'Bootstrap',
  'Docker',
  'Go',
  'Firebase',
  'Nginx',
  'java',
  'kotlin',
  'unity'
]

export const skillsImage = (skill:string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'c#':
      return csharp;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'nginx':
      return nginx;
    case 'blender':
      return blender;
    case 'microsoft office':
      return microsoftoffice;
    case 'unity':
      return unity;
    
    default:
      break;
  }
}