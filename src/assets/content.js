import SecureGuard from "../assets/SecureGuard.png";
import PricePlus from "../assets/PricePlus.png";
import Thamco from "../assets/Thamco.png";

export const HOMECONTENT = `Welcome to my portfolio website. I specialise in building back-end applications
As a graduate with a year placement experience, I have honed my skills in backend technologies like Java, Springboot and SQL, as well as front-end  technologies like React.Js and TailWindCss.
My goal is to leverage my expertise to create inovative solutions that deliver excellence.`;

export const GITHUB = "https://github.com/Bravo-bit";

export const LINKEDIN = "https://www.linkedin.com/in/boris-gunderov-b4894b172/";

export const ABOUTCONTENT =
  'I am a first-class honours graduate in Computer Science from Teesside University, where I developed a strong foundation in software development and computer science principles. My academic journey was marked by excellence, culminating in achieving top honours in my field. I have also earned several industry-recognized certificates, including "React - The Complete Guide 2023 (Incl. React Router & Redux)" and "Complete Java SE 8 Developer Bootcamp – OCA Prep Included." These certifications have equipped me with a robust understanding of modern software development technologies and practices. My dedication to continuous learning and growth has driven me to achieve a solid foundation in both theoretical knowledge and practical application. I am passionate about creating robust, user-centric software applications and am eager to contribute my technical expertise and innovative mindset to dynamic projects. Throughout my academic and professional journey, I have demonstrated a commitment to excellence, adaptability, and a keen eye for industry trends. I am excited to leverage my skills and knowledge to make a meaningful impact in the field of software development.';

export const SKILLS = {
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  springboot:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  database:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
};

export const EXPERIENCES = [
  {
    year: "2022-2023",
    role: "Software Developer Placement",
    company: "EnAppSys",
    description: `Monitoring infrastructure: Designed and implemented comprehensive infrastructure monitoring tools to
  ensure system reliability and performance. Developed automated alert systems to proactively address
  potential issues.
  Product tools creation: Built innovative product tools enhancing functionality and user experience, leading
  to improved team performance and operational efficiency.
  Automatic alerts: Developed automated alert mechanisms for real-time system monitoring, significantly
  reducing downtime and improving response times.
  Rule expression evaluator: Engineered a rule expression evaluator for dynamic rule processing, enhancing
  the flexibility and accuracy of system operations.
  AWS cost evaluation frontend/reports: Created a user-friendly frontend for AWS cost evaluation and
  reporting, providing clear and actionable insights into cost management and optimisation.
  `,
    technologies: ["Java", "React.js", "AWS (Amazon Web Services)", "SQLite"],
  },
];

export const PROJECTS = [
  {
    title: "Thamco Group",
    image: Thamco,
    description:
      "Thamco Web App is an advanced e-commerce platform featuring a responsive ReactJS frontend for intuitive browsing and secure Auth0 authentication. Users can explore a diverse product catalogue, manage their shopping basket in real-time, and securely complete purchases. Backend operations, powered by Java and SQLite, consolidate data from Undercutters for efficient database management. The Spring Boot framework ensures scalable API integration, supporting seamless connectivity and enhancing user experience with personalized features like order history access.",
    technologies: ["Java", "SQLite", "React", "Springboot", "Auth0"],
    git: "https://github.com/Bravo-bit/ThamcoFrontend/tree/main",
  },
  {
    title: "Price Plus",
    image: PricePlus,
    description:
      "Empowering Property Decisions With Predictive Insights. PricePlus is an innovative project aimed at predicting property trends and prices. It integrates extensive research on machine learning algorithms and technical requirements essential for developing a robust prediction model. The project encompasses phases such as problem definition, system requirements specification, design, implementation, and testing. Key components include the evaluation and optimization of various machine learning algorithms, coupled with effective data retrieval strategies to enhance predictive accuracy. PricePlu concludes with a thorough assessment of the implemented solution, highlighting its alignment with initial objectives and suggesting avenues for future enhancement.",
    technologies: ["Python", "React", "Firebase"],
    git: "https://github.com/Bravo-bit/PricePlus/tree/master",
  },
  {
    title: "Secure Guard",
    image: SecureGuard,
    description:
      "SecureGuard is an innovative AI and IoT-based home security solution designed to address increasing burglary rates in high-risk areas. It features a web-based platform integrating facial recognition, pin code verification, and machine learning algorithms.",
    technologies: ["Python", "React", "Auth0"],
    git: "https://github.com/Bravo-bit/SecureGuard/tree/master",
  },
];
