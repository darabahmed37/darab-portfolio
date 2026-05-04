import Heading from "./Heading.tsx";
import PromoCard from "./PromoCard.tsx";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaDocker, 
  FaAws, 
  FaCode, 
  FaGitAlt, 
  FaCss3Alt, 
  FaProjectDiagram, 
  FaMicrochip,
  FaLeaf
} from "react-icons/fa";

const Projects = () => {
  const promoCardData = [
    {
      icon: <FaReact />,
      title: "Frontend Developer (React & Vue)",
      techTags: ["React", "Vue.js", "Next.js"],
      description:
        "Built dynamic UIs and modern SPAs using React, Vue.js, and Next.js for high-performance web apps.",
      moreInfo:
        "Experienced in building scalable and performant frontend applications using React and Vue.js. Skilled at creating reusable components and implementing responsive designs. Developed my personal portfolio and multiple enterprise projects showcasing clean code and UI/UX best practices.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaPython />,
      title: "Backend with Django/DRF",
      techTags: ["Python", "Django", "DRF"],
      description:
        "Developed RESTful APIs and backend systems using Django and Django Rest Framework.",
      moreInfo:
        "Proficient in designing and implementing REST APIs with Django and DRF, ensuring security and scalability. Experienced in handling database models, serializers, and views to deliver efficient backend solutions. Migrated legacy .NET applications to Django, improving maintainability and performance.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaPython />,
      title: "Fullstack with Flask",
      techTags: ["Python", "Flask", "Jinja2"],
      description:
        "Created lightweight full-stack apps using Flask with custom routing and templating.",
      moreInfo:
        "Built lightweight full-stack applications with Flask, using Jinja2 templates for dynamic rendering. Skilled in routing, request handling, and integrating frontend with backend services. Developed multiple mini projects demonstrating rapid prototyping and modular design.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaJava />,
      title: "Enterprise Java Developer",
      techTags: ["Java", "JSP", "Struts", "Java 21"],
      description:
        "Maintained legacy systems and migrated enterprise web applications from Java 8 to Java 21.",
      moreInfo:
        "Hands-on experience in maintaining and upgrading Java web applications using JSP, Servlets, and Struts. Worked on migrating enterprise applications from Java 8 to Java 21. Developed complete enterprise modules from scratch, including frontend implementation, backend business logic, and database design.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaLeaf />,
      title: "Spring Boot Enthusiast",
      techTags: ["Java", "Spring Boot", "JDBC"],
      description:
        "Learning to build modern Java apps using Spring Boot and direct JDBC querying.",
      moreInfo:
        "Currently expanding expertise in Java Spring Boot framework with hands-on experience in creating REST APIs and managing database connectivity via JDBC. Passionate about adopting modern backend practices and microservices architecture.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaDatabase />,
      title: "Database & SQL Skills",
      techTags: ["SQL", "MySQL", "JDBC"],
      description:
        "Designed, optimized, and queried relational databases manually using SQL and JDBC.",
      moreInfo:
        "Experienced in writing complex SQL queries and optimizing database performance. Skilled in schema design, normalization, and manual data retrieval using JDBC. Capable of troubleshooting database-related issues and ensuring data integrity.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaDocker />,
      title: "Dockerized Development",
      techTags: ["Docker", "Images", "Container"],
      description:
        "Containerized applications and isolated development environments using Docker.",
      moreInfo:
        "Proficient in using Docker to containerize applications for consistent deployment and development environments. Experienced with Docker Compose to manage multi-container applications, improving workflow efficiency and scalability.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaAws />,
      title: "AWS for Developers",
      techTags: ["AWS", "S3", "EC2"],
      description:
        "Used AWS services for deploying, storing, and scaling web applications.",
      moreInfo:
        "Familiar with deploying and managing applications on AWS, including storage on S3 and instance management via EC2. Understanding of cloud infrastructure, scalability, and cost optimization for production applications.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaCode />,
      title: "TypeScript Proficiency",
      techTags: ["TypeScript", "React", "Next.js"],
      description:
        "Built type-safe React applications using TypeScript for better scalability.",
      moreInfo:
        "Strong skills in TypeScript to add static typing to JavaScript projects, improving code quality and maintainability. Experience integrating TypeScript in React and Next.js projects to catch bugs early and scale codebases efficiently.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaGitAlt />,
      title: "Version Control with Git",
      techTags: ["Git", "GitHub", "Branching"],
      description:
        "Collaborated on projects using Git with proper branching and PR workflows.",
      moreInfo:
        "Experienced in using Git for version control in collaborative environments. Knowledge of branching strategies, pull requests, and code reviews to maintain clean and stable codebases in team projects.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaCss3Alt />,
      title: "Frontend Styling",
      techTags: ["SCSS", "CSS Modules", "Tailwind"],
      description:
        "Styled interfaces using SCSS, CSS Modules, and utility-first Tailwind CSS.",
      moreInfo:
        "Skilled in styling modern web apps using SCSS for modular CSS, CSS Modules for scoped styles, and Tailwind CSS for rapid UI development. Focused on responsive design and user experience consistency.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaProjectDiagram />,
      title: "jQuery Legacy Support",
      techTags: ["jQuery", "AJAX", "DOM Manipulation"],
      description:
        "Maintained and modernized legacy systems using jQuery and vanilla JS.",
      moreInfo:
        "Experienced in maintaining older codebases with jQuery and AJAX for dynamic content updates. Comfortable troubleshooting and gradually upgrading legacy frontend code to modern standards.",
      buttonLabel: "More <~>",
    },
    {
      icon: <FaMicrochip />,
      title: "Multithreaded Programming",
      techTags: ["Java", "Threads", "Concurrency"],
      description:
        "Built Java applications with multithreaded logic to improve performance and scalability.",
      moreInfo:
        "Proficient in implementing multithreaded programming in Java to optimize application performance. Knowledgeable in concurrency control, thread synchronization, and parallel processing techniques.",
      buttonLabel: "More <~>",
    },
  ];

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div>
      <Heading title={"skills"} />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-full pb-10"
      >
        {promoCardData.map((cardProps, index) => (
          <motion.div key={index} variants={itemVariants} className="w-full flex justify-center">
            <PromoCard {...cardProps} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
