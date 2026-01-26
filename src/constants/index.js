import {
  krish,
  motif,
  bit7,
  ey,
  se,
  photon,
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  CompileVortex,
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

export const services = [
  { title: "Web Development", icon: c },
  { title: "Mobile Development", icon: c },
  { title: "Backend Development", icon: c },
  { title: "AI Integration", icon: c },
  { title: "Cloud Computing", icon: c },
  { title: "DevOps", icon: c },
  { title: "Frontend Development", icon: c },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "C#", icon: c },
  { name: "NodeJS", icon: cpp },
  { name: "AngularJS", icon: java },
  { name: "Typescript", icon: javascript },
  { name: "AWS", icon: mhft },
  { name: "Azure", icon: mhft },
  { name: "Docker", icon: mhft },
  { name: "Kubernetes", icon: mhft },
];

export const experiences = [
  {
    title: "Technical Lead",
    company_name: "Photon Interactive Pvt Ltd",
    icon: photon,
    iconBg: "#161329",
    date: "Feb 2025 - Oct 2025",
    points: [
      "Worked as a Technical Lead, overseeing project development and ensuring timely delivery of high-quality software solutions.",
      "Also contributed as a Full Stack Developer, designing and implementing web applications using modern technologies.",
      "Used AI technologies to enhance application functionality and user experience by 45%.",
    ],
  },
  {
    title: "Project Manager cum Full Stack Developer",
    company_name: "Search Education Pvt Ltd",
    icon: se,
    iconBg: "#161329",
    date: "Feb 2020 - Jan 2025",
    points: [
      "Worked as the Project Manager and Full Stack Developer, leading a team of developers to deliver innovative web solutions.",
      "Managed project timelines, coordinated tasks, and ensured successful project completion while actively contributing to the development process.",
      "Managed a team developers to successfully deliver 40+ web applications, ensuring high-quality code and timely project completion.",
      "Increased productivity by 30% through effective project management and streamlined development processes.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Ernst & Young LLP",
    icon: ey,
    iconBg: "#161329",
    date: "Sep 2019 - Jan 2020",
    points: [
      "Developed and maintained web applications using a variety of technologies including dotnet, AngularJS, and SQL Server.",
      "Maximized application performance and user experience through effective coding practices and optimization techniques.",
      "Leveraged strong problem-solving skills to troubleshoot and resolve complex technical issues.",
    ],
  },
];

export const projects = [
  {
    name: "Education CRM",
    description:
      "Web-based platform that allows users to manage their overseas educational sales and track their progress.",
    tags: [
      { name: "DotNet C#", color: "blue-text-gradient" },
      {name: "ReactJS", color: "blue-text-gradient"},
      {name: "NodeJS", color: "green-text-gradient"},
      {name: "Azure", color: "orange-text-gradient"},
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "N/A",
  }, 
  {
    name: "Medical E-Commerce",
    description:
      "Web-based platform that allows users to buy the products in bulk and pay for the delivery. It includes getting the orders from the suppliers and managing the inventory.",
    tags: [
      {name: "ReactJS", color: "blue-text-gradient"},
      {name: "NodeJS", color: "green-text-gradient"},
      {name: "AWS", color: "pink-text-gradient"},
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "N/A", 
  }
];
