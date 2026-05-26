const techIcon = (file) => `/assets/tech/${file}`;

export const resume = {
  file: "/Tushant_Resume4.pdf",
  downloadName: "Tushant_Rajpal_Resume.pdf",
  title: "Tushant Rajpal — Resume",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Tech" },
  { id: "projects", title: "Projects" },
  { id: "resume", title: "Resume", href: "/resume" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Frontend Development", icon: techIcon("react.svg") },
  { title: "Backend Development", icon: techIcon("nodejs.svg") },
  { title: "Cloud Computing", icon: techIcon("aws.svg") },
  { title: "Database Design", icon: techIcon("postgresql.svg") },
  { title: "AI Integration", icon: techIcon("python.svg") },
  { title: "DevOps & CI/CD", icon: techIcon("docker.svg") },
];

export const technologies = [
  { name: "HTML5", icon: techIcon("html5.svg") },
  { name: "CSS3", icon: techIcon("css3.svg") },
  { name: "JavaScript", icon: techIcon("javascript.svg") },
  { name: "TypeScript", icon: techIcon("typescript.svg") },
  { name: "React", icon: techIcon("react.svg") },
  { name: "Angular", icon: techIcon("angular.svg") },
  { name: "SCSS", icon: techIcon("scss.svg") },
  { name: "Next.js", icon: techIcon("nextjs.svg") },
  { name: ".NET", icon: techIcon("dotnet.svg") },
  { name: "C#", icon: techIcon("csharp.svg") },
  { name: "Node.js", icon: techIcon("nodejs.svg") },
  { name: "Python", icon: techIcon("python.svg") },
  { name: "SQL Server", icon: techIcon("azure.svg") },
  { name: "MySQL", icon: techIcon("mysql.svg") },
  { name: "PostgreSQL", icon: techIcon("postgresql.svg") },
  { name: "MongoDB", icon: techIcon("mongodb.svg") },
  { name: "DynamoDB", icon: techIcon("aws.svg") },
  { name: "Cosmos DB", icon: techIcon("azure.svg") },
  { name: "AWS", icon: techIcon("aws.svg") },
  { name: "Azure", icon: techIcon("azure.svg") },
  { name: "GitHub", icon: techIcon("github.svg") },
  { name: "GitLab", icon: techIcon("gitlab.svg") },
  { name: "Bitbucket", icon: techIcon("bitbucket.svg") },
];

export const techPositions = [
  { x: 4, y: 6 },
  { x: 22, y: 4 },
  { x: 40, y: 10 },
  { x: 58, y: 3 },
  { x: 76, y: 8 },
  { x: 88, y: 18 },
  { x: 6, y: 28 },
  { x: 24, y: 32 },
  { x: 42, y: 26 },
  { x: 60, y: 30 },
  { x: 78, y: 24 },
  { x: 12, y: 48 },
  { x: 30, y: 52 },
  { x: 48, y: 46 },
  { x: 66, y: 50 },
  { x: 84, y: 44 },
  { x: 4, y: 66 },
  { x: 22, y: 70 },
  { x: 40, y: 64 },
  { x: 58, y: 68 },
  { x: 76, y: 62 },
  { x: 50, y: 78 },
  { x: 32, y: 82 },
];

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Primus Global, Bangalore",
    icon: "/assets/company/primus.svg",
    iconBg: "#1e293b",
    date: "Dec 2025 - Feb 2026",
    points: [
      "Designed and built scalable APIs using .NET, Node.js, PostgreSQL, and AWS, handling 50K+ daily requests with 40% improved response time.",
      "Mentored 4+ junior developers, reducing production defects by 35% through structured code reviews and best practices.",
      "Implemented Agile workflows, increasing delivery velocity by 25% and cutting release cycles from 4 weeks to 2 weeks.",
      "Architected cloud-native applications with 99.9% uptime, supporting 10K+ active users.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Photon Interactive Pvt Ltd, Bangalore",
    icon: "/assets/company/photon.jpeg",
    iconBg: "#1e293b",
    date: "Feb 2025 - Oct 2025",
    points: [
      "Architected and delivered scalable backend APIs supporting 40K+ daily transactions, improving system reliability by 35%.",
      "Directed development of high-performance front-end applications, increasing user engagement by 30% and reducing page load time by 40%.",
      "Led cross-functional teams in system integrations and platform enhancements, improving interoperability by 45%.",
      "Leveraged AI-driven development tools to accelerate delivery cycles by 40% and improve overall code efficiency by 20%.",
    ],
  },
  {
    title: "Project Manager & Senior Software Engineer",
    company_name: "Search Education, Delhi",
    icon: "/assets/company/search-education.svg",
    iconBg: "#1e293b",
    date: "Feb 2020 - Jan 2025",
    points: [
      "Developed a CRM solution and integrated it into a website within one month, ensuring seamless functionality and enhanced customer engagement.",
      "Integrated AI-powered capabilities into the CRM, including intelligent email generation, automated content creation, and smart workflow assistance.",
      "Increased overall productivity by 60% through AI adoption, automation, and optimized workflows.",
      "Managed multiple high-impact projects simultaneously, ensuring timely delivery and alignment with client objectives.",
    ],
  },
  {
    title: "Analyst (Full Stack Developer)",
    company_name: "Ernst & Young, Gurugram",
    icon: "/assets/company/ey.png",
    iconBg: "#1e293b",
    date: "Sep 2019 - Jan 2020",
    points: [
      "Delivered high-performance web applications, improving system efficiency by 30% and ensuring 99% application stability.",
      "Partnered with design and frontend teams to enhance user experience, increasing user engagement by 25%.",
      "Led code reviews and quality assurance efforts, reducing post-release defects by 35%.",
      "Migrated legacy systems to modern architectures, improving performance by 40%.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Bit-7 Informatics, Bhopal",
    icon: "/assets/company/bit7.png",
    iconBg: "#1e293b",
    date: "Dec 2018 - Jul 2019",
    points: [
      "Designed RESTful services for AI-enabled systems, enabling seamless communication and supporting 2x scalability.",
      "Led comprehensive testing and debugging efforts, reducing production defects by 40%.",
      "Provided post-deployment support, resolving 95% of client issues within SLA timelines.",
    ],
  },
  {
    title: "Assistant Manager & Software Engineer",
    company_name: "Krish Imports, Guayaquil Ecuador",
    icon: "/assets/company/krish.jpeg",
    iconBg: "#1e293b",
    date: "Feb 2018 - Dec 2018",
    points: [
      "Developed internal business applications, improving operational efficiency by 30% and reducing manual processing time by 40%.",
      "Enhanced legacy system functionalities, increasing workflow accuracy by 25%.",
      "Designed and delivered onboarding programs for new staff, reducing ramp-up time by 35%.",
    ],
  },
  {
    title: "Customer Care Representative",
    company_name: "Motif India Infotech, Ahmedabad",
    icon: "/assets/company/motif.png",
    iconBg: "#1e293b",
    date: "Mar 2017 - Dec 2017",
    points: [
      "Coordinated daily operational processes, improving inventory accuracy by 20%.",
      "Analyzed sales performance reports to identify trends, contributing to 15% improvement in revenue planning accuracy.",
      "Mentored junior team members, improving task completion efficiency by 30%.",
    ],
  },
];

export const achievements = [
  "Earned a Generative AI Certification from upGrad.",
  "Increased overall productivity by 60% through AI adoption, automation, and optimized workflows.",
  "Reduced manual workload by 70% through process automation and intelligent system integration.",
  "Achieved a 40% reduction in operational costs by streamlining processes and improving system efficiency.",
  "Recognized for driving innovation, digital transformation, and operational excellence across projects.",
];

export const projects = [
  {
    name: "Educational CRM",
    description:
      "Web-based CRM for overseas educational sales with lead tracking, student lifecycle management, and AI-powered email and workflow automation.",
    tags: [
      { name: ".NET Core", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Azure", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/educational-crm.png",
    source_code_link: "#",
  },
  {
    name: "Enterprise Applications",
    description:
      "Scalable enterprise platforms with secure authentication, role-based access, and cloud-native architecture supporting high-volume transactions.",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/enterprise-applications.png",
    source_code_link: "#",
  },
  {
    name: "E-commerce & EdTech",
    description:
      "Full-stack e-commerce and EdTech solutions with payment gateway integration, inventory management, and responsive user experiences.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/ecommerce-edtech.png",
    source_code_link: "#",
  },
  {
    name: "Travel & Property Apps",
    description:
      "Cross-platform applications for travel booking and property management with third-party API integrations and real-time data sync.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Next.js", color: "green-text-gradient" },
      { name: "AWS", color: "orange-text-gradient" },
    ],
    image: "/assets/projects/travel-property-apps.png",
    source_code_link: "#",
  },
];
