import { starbucks,project1,web, gcp, html, 
  unity, microsoftoffice, blender, nginx, 
  git, firebase, aws, python, php, kotlin, 
  java, go, csharp, tailwind, postgresql, 
  mysql,angular,bootstrap,css,docker,javascript,
  mongoDB,nextJS,react,typescript,
  } from "@/assets";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";



export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "",
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
    image: starbucks,
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
    image: starbucks,
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
    image: starbucks,
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
    image: starbucks,
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
    image: starbucks,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
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