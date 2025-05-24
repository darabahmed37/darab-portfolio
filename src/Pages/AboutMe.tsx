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
              I’m a passionate, performance-driven
              <span className="font-semibold text-primary ">
                Software Developer
              </span>{" "}
              based in Lahore, Pakistan. I hold a Bachelor’s degree in Computer
              Science, and I specialize in building robust, scalable, and clean
              backend systems using Java along with modern frontend frameworks
              like React and Next.js. I approach every project with a builder’s
              mindset and a strong commitment to long-term maintainability.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I describe myself as a{" "}
              <span className="font-semibold text-primary ">
                versatile full-stack developer
              </span>{" "}
              who is equally comfortable diving into low-level backend logic or
              crafting intuitive user interfaces. I’ve worked on legacy
              enterprise systems using technologies like Struts1/2 and JSP, and
              I’m currently sharpening my expertise in{" "}
              <span className="italic text-primary ">
                Spring, JDBC, and modern Java practices
              </span>{" "}
              to stay in line with evolving industry trends. My toolbox
              includes:
            </p>

            <ul className="list-disc list-inside text-gray mb-6 space-y-1">
              <li>
                <span className="font-medium">Languages:</span> Java, Python,
                JavaScript, TypeScript
              </li>
              <li>
                <span className="font-medium">Frontend:</span> React, Next.js,
                HTML5, CSS3, Tailwind
              </li>
              <li>
                <span className="font-medium">Backend:</span> Spring Boot
                (learning), Struts1/2, JDBC, REST APIs
              </li>
              <li>
                <span className="font-medium">Database:</span> SQL (PostgreSQL,
                MySQL), query optimization
              </li>
              <li>
                <span className="font-medium">Tools & Platforms:</span> Docker,
                Git, GitHub, AWS (basic), Jira
              </li>
              <li>
                <span className="font-medium">Practices:</span> Agile, CI/CD,
                multithreading, clean code
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
