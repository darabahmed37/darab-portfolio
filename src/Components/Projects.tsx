import Heading from "./Heading.tsx";
import PromoCard from "./PromoCard.tsx";
import react from "@assets/react.png";
import aws from "@assets/aws.png";
import django from "@assets/django.png";
import docker from "@assets/docker.jpg";
import flask from "@assets/flask.png";
import springBoot from "@assets/springboot.png";
import sql from "@assets/sql.jpg";
import java from "@assets/java.png";
import git from "@assets/git.png";
import typescript from "@assets/typescript.webp";
import css from "@assets/css.webp";
import jQuery from "@assets/jquery.png";
import multiThreading from "@assets/multithreading.png";
import projectsRectangle from "@assets/projects-rectangle.svg";
import rightCornerMesh from "@assets/right-corner-mesh.svg";

const Projects = () => {
  const promoCardData = [
    {
      imageSrc: react,
      title: "React Developer",
      techTags: ["React", "Next.js", "Tailwind CSS"],
      description:
        "Built dynamic UIs and modern SPAs using React and Next.js for high-performance web apps.",
      moreInfo:
        "Experienced in building scalable and performant frontend applications using React and Next.js. Skilled at creating reusable components and implementing responsive designs with Tailwind CSS. Developed my personal portfolio and multiple projects showcasing clean code and UI/UX best practices.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: django,
      title: "Backend with Django/DRF",
      techTags: ["Python", "Django", "DRF"],
      description:
        "Developed RESTful APIs and backend systems using Django and Django Rest Framework.",
      moreInfo:
        "Proficient in designing and implementing REST APIs with Django and DRF, ensuring security and scalability. Experienced in handling database models, serializers, and views to deliver efficient backend solutions. Contributed to backend modules in production-level projects.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: flask,
      title: "Fullstack with Flask",
      techTags: ["Python", "Flask", "Jinja2"],
      description:
        "Created lightweight full-stack apps using Flask with custom routing and templating.",
      moreInfo:
        "Built lightweight full-stack applications with Flask, using Jinja2 templates for dynamic rendering. Skilled in routing, request handling, and integrating frontend with backend services. Developed multiple mini projects demonstrating rapid prototyping and modular design.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: java,
      title: "Java Web Developer",
      techTags: ["Java", "JSP", "Struts 2"],
      description:
        "Maintained and developed web applications using Java with Apache Struts and JSP.",
      moreInfo:
        "Hands-on experience in maintaining legacy Java web applications using JSP and Struts 2. Familiar with MVC architecture and server-side rendering. Worked on bug fixes, feature enhancements, and performance improvements in enterprise projects.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: springBoot,
      title: "Spring Boot Enthusiast",
      techTags: ["Java", "Spring Boot", "JDBC"],
      description:
        "Learning to build modern Java apps using Spring Boot and direct JDBC querying.",
      moreInfo:
        "Currently expanding expertise in Java Spring Boot framework with hands-on experience in creating REST APIs and managing database connectivity via JDBC. Passionate about adopting modern backend practices and microservices architecture.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: sql,
      title: "Database & SQL Skills",
      techTags: ["SQL", "MySQL", "JDBC"],
      description:
        "Designed, optimized, and queried relational databases manually using SQL and JDBC.",
      moreInfo:
        "Experienced in writing complex SQL queries and optimizing database performance. Skilled in schema design, normalization, and manual data retrieval using JDBC. Capable of troubleshooting database-related issues and ensuring data integrity.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: docker,
      title: "Dockerized Development",
      techTags: ["Docker", "Images", "Container"],
      description:
        "Containerized applications and isolated development environments using Docker.",
      moreInfo:
        "Proficient in using Docker to containerize applications for consistent deployment and development environments. Experienced with Docker Compose to manage multi-container applications, improving workflow efficiency and scalability.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: aws,
      title: "AWS for Developers",
      techTags: ["AWS", "S3", "EC2"],
      description:
        "Used AWS services for deploying, storing, and scaling web applications.",
      moreInfo:
        "Familiar with deploying and managing applications on AWS, including storage on S3 and instance management via EC2. Understanding of cloud infrastructure, scalability, and cost optimization for production applications.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: typescript,
      title: "TypeScript Proficiency",
      techTags: ["TypeScript", "React", "Next.js"],
      description:
        "Built type-safe React applications using TypeScript for better scalability.",
      moreInfo:
        "Strong skills in TypeScript to add static typing to JavaScript projects, improving code quality and maintainability. Experience integrating TypeScript in React and Next.js projects to catch bugs early and scale codebases efficiently.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: git,
      title: "Version Control with Git",
      techTags: ["Git", "GitHub", "Branching"],
      description:
        "Collaborated on projects using Git with proper branching and PR workflows.",
      moreInfo:
        "Experienced in using Git for version control in collaborative environments. Knowledge of branching strategies, pull requests, and code reviews to maintain clean and stable codebases in team projects.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: css,
      title: "Frontend Styling",
      techTags: ["SCSS", "CSS Modules", "Tailwind"],
      description:
        "Styled interfaces using SCSS, CSS Modules, and utility-first Tailwind CSS.",
      moreInfo:
        "Skilled in styling modern web apps using SCSS for modular CSS, CSS Modules for scoped styles, and Tailwind CSS for rapid UI development. Focused on responsive design and user experience consistency.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: jQuery,
      title: "jQuery Legacy Support",
      techTags: ["jQuery", "AJAX", "DOM Manipulation"],
      description:
        "Maintained and modernized legacy systems using jQuery and vanilla JS.",
      moreInfo:
        "Experienced in maintaining older codebases with jQuery and AJAX for dynamic content updates. Comfortable troubleshooting and gradually upgrading legacy frontend code to modern standards.",
      buttonLabel: "More <~>",
    },
    {
      imageSrc: multiThreading,
      title: "Multithreaded Programming",
      techTags: ["Java", "Threads", "Concurrency"],
      description:
        "Built Java applications with multithreaded logic to improve performance and scalability.",
      moreInfo:
        "Proficient in implementing multithreaded programming in Java to optimize application performance. Knowledgeable in concurrency control, thread synchronization, and parallel processing techniques.",
      buttonLabel: "More <~>",
    },
  ];

  return (
    <div>
      <Heading title={"skills"} />
      <div className="flex flex-wrap gap-4 justify-between">
        {promoCardData.map((cardProps, index) => (
          <div key={index}>
            <PromoCard {...cardProps} />
          </div>
        ))}
      </div>
      <img
        id="project-rectangle"
        src={projectsRectangle}
        alt="Rectangle"
        loading={"lazy"}
      />
      <img
        src={rightCornerMesh}
        alt="rightCornerMesh"
        loading={"lazy"}
        id={"rightCornerMesh"}
      />
    </div>
  );
};

export default Projects;
