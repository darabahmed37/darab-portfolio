import Heading from "../Components/Heading.tsx";

const AboutMe = () => {
  return (
    <div>
      <Heading title={"about me"} />
      <div>
        <section>
          <div className="max-w-6xl">
            <p className="text-lg text-gray leading-relaxed mb-6">
              Hello! My name is{" "}
              <span className="font-semibold text-primary ">Darab Ahmed</span>.
              I’m a passionate, performance-driven{" "}
              <span className="font-semibold text-primary ">
                Software Engineer
              </span>{" "}
              based in Lahore, Pakistan. I hold a Bachelor’s degree in Computer
              Science, and I specialize in building robust, scalable, and clean
              backend systems using Java and Python, along with modern frontend frameworks
              like React, Vue.js, and Next.js. I specialize in developing scalable business solutions and approach every project with a builder’s
              mindset and a strong commitment to long-term maintainability.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I describe myself as a{" "}
              <span className="font-semibold text-primary ">
                versatile full-stack engineer
              </span>{" "}
              who is equally comfortable diving into complex backend logic or
              crafting intuitive user interfaces. I have professional experience 
              building enterprise applications, migrating legacy systems, and 
              developing RESTful APIs. My toolbox includes:
            </p>

            <ul className="list-disc list-inside text-gray mb-6 space-y-1">
              <li>
                <span className="font-medium text-white">Languages:</span> Java, Python,
                JavaScript, TypeScript, SQL
              </li>
              <li>
                <span className="font-medium text-white">Frontend:</span> React, Vue.js, Next.js,
                HTML5, CSS3, Tailwind
              </li>
              <li>
                <span className="font-medium text-white">Backend:</span> Django, Flask, Spring Boot,
                Struts, Servlets, JSP, REST APIs
              </li>
              <li>
                <span className="font-medium text-white">Database:</span> PostgreSQL,
                MySQL, query optimization, indexing
              </li>
              <li>
                <span className="font-medium text-white">Tools & Platforms:</span> Docker,
                Git, GitHub, AWS, Apache Tomcat, Jira
              </li>
              <li>
                <span className="font-medium text-white">Practices:</span> Agile, CI/CD,
                secure engineering, clean code
              </li>
            </ul>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I’m not just someone who writes code—I’m someone who solves
              problems. I dig deep into the business context behind every
              feature, and I strive to ship solutions that are not only
              functional but scalable and extensible. I take pride in writing
              readable and testable code. I also believe in writing
              documentation, mentoring peers, and contributing to team growth.
            </p>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              Work Experience
            </h3>
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-medium text-white">Software Engineer</h4>
                <span className="text-primary font-medium text-sm sm:text-base bg-primary/10 px-3 py-1 rounded">10/2024 - Present</span>
              </div>
              <p className="text-lg text-gray font-semibold mb-2">i2cinc - Lahore, Pakistan</p>
              <ul className="list-disc list-inside text-gray space-y-2 mb-4">
                <li>Developed enterprise application modules from scratch, including frontend implementation, backend business logic, and database design.</li>
                <li>Enhanced payment system functionality by designing scalable features and improving reliability.</li>
                <li>Contributed to the migration of applications from Java 8 to Java 21, resolving compatibility issues and supporting validation.</li>
                <li>Applied secure software engineering practices, mitigating XSS and CSRF risks aligned with enterprise security standards.</li>
                <li>Built maintainable user interfaces using JSP, HTML, CSS, and JavaScript.</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-medium text-white">Software Engineer</h4>
                <span className="text-primary font-medium text-sm sm:text-base bg-primary/10 px-3 py-1 rounded">03/2023 - 06/2024</span>
              </div>
              <p className="text-lg text-gray font-semibold mb-2">Devsinc - Lahore, Pakistan</p>
              <ul className="list-disc list-inside text-gray space-y-2 mb-4">
                <li>Designed and maintained web applications using Django, Django Rest Framework, Flask, React, and Vue.js.</li>
                <li>Migrated legacy applications between technology stacks (e.g., .NET to Django), improving performance and scalability.</li>
                <li>Deployed and managed cloud-based applications on AWS (EC2, S3, Lambda, Elastic Beanstalk).</li>
                <li>Built CI/CD pipelines and containerized applications using Docker to streamline deployments.</li>
                <li>Developed secure authentication and authorization mechanisms to ensure data protection.</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              Education
            </h3>
            
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-medium text-white">Bachelor of Science in Computer Science</h4>
                <span className="text-primary font-medium text-sm sm:text-base bg-primary/10 px-3 py-1 rounded">10/2019 - 08/2023</span>
              </div>
              <p className="text-lg text-gray mb-2">Government College University - Lahore, Pakistan</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              Why You Should Hire Me
            </h3>
            <p className="text-lg text-gray leading-relaxed mb-6">
              Hiring me means you’re bringing someone onboard who is{" "}
              <span className="font-semibold text-primary ">
                reliable, self-motivated, and growth-focused
              </span>
              . Here are a few reasons why I’d make a great addition to your
              team:
            </p>

            <ul className="list-disc list-inside text-gray mb-6 space-y-2">
              <li>
                <span className="font-medium">I bridge legacy and modern:</span>{" "}
                I’ve worked with outdated systems and understand the importance
                of modernization without disruption.
              </li>
              <li>
                <span className="font-medium">I’m highly productive:</span> I
                consistently deliver ahead of deadlines by focusing on clarity,
                efficiency, and high-impact work.
              </li>
              <li>
                <span className="font-medium">I continuously learn:</span> I
                self-train through hands-on projects, courses, and open-source
                contributions to keep evolving.
              </li>
              <li>
                <span className="font-medium">I’m proactive:</span> I don’t wait
                for tasks—I look for opportunities to improve the codebase, fix
                bugs, and optimize workflows.
              </li>
              <li>
                <span className="font-medium">I understand scalability:</span> I
                write code that performs well under load and is easy to maintain
                or extend in the future.
              </li>
            </ul>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I am a strong believer in ownership and accountability. I take
              full responsibility for the quality of my work and collaborate
              respectfully with designers, testers, and fellow engineers to
              ensure the final product exceeds expectations. Whether you’re
              building a new system or scaling an existing one, I bring clarity,
              structure, and energy to the development process.
            </p>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              How Productive Am I?
            </h3>
            <p className="text-lg text-gray leading-relaxed mb-6">
              My productivity stems from a mix of discipline, smart tooling, and
              time management. I plan my days with focused coding sessions,
              breaking problems into manageable chunks. I avoid distractions,
              commit to daily goals, and prioritize tasks based on impact. I use
              Git effectively to branch, review, and merge code in a clean
              pipeline. On average, I deliver more than what’s expected—whether
              it’s identifying bugs before release, simplifying complex
              features, or mentoring a colleague.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I’m not in this field just to meet deadlines—I’m here to build
              value, one commit at a time.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              If you're looking for a developer who understands both the
              technical and human side of software engineering, someone who is
              reliable under pressure, curious by nature, and always focused on
              building the right thing the right way—
              <span className="font-semibold text-primary ">let’s talk</span>.
            </p>

            <p className="text-lg text-gray leading-relaxed">
              You can reach me via email at{" "}
              <a
                href="mailto:darabahmed37@gmail.com"
                className="text-primary underline"
              >
                darabahmed37@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
