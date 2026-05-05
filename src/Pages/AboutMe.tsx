import Heading from "../Components/Heading.tsx";

const AboutMe = () => {
  return (
    <div>
      <Heading title={"about me"} />
      <div>
        <section>
          <div className="w-full">
            <p className="text-lg text-gray leading-relaxed mb-6">
              I'm{" "}
              <span className="font-semibold text-primary">Darab Ahmed</span> —
              a{" "}
              <span className="font-semibold text-primary">
                Software Engineer
              </span>{" "}
              based in Lahore, Pakistan with 3+ years of professional experience
              building production-grade backend systems, primarily in fintech. I
              hold a Bachelor's degree in Computer Science and have worked across
              the full engineering lifecycle — from designing system architecture
              and database schemas to debugging production incidents and
              delivering measurable performance improvements.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              My primary focus is{" "}
              <span className="font-semibold text-primary">
                backend engineering
              </span>{" "}
              — building high-throughput, reliable systems in Java and Python
              that operate correctly under load, handle failures gracefully, and
              remain maintainable as they grow. I've also delivered full-stack
              features across React, Vue.js, and JSP-based frontends, making me
              effective across the entire application layer when needed.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I've worked on real fintech infrastructure — transaction processing
              systems, payment reliability features, and concurrent data
              pipelines — with direct ownership over design decisions, not just
              implementation of specs handed to me.
            </p>

            <ul className="list-disc list-outside pl-5 text-gray mb-8 space-y-1">
              <li>
                <span className="font-medium text-white">Core Languages:</span>{" "}
                Java, Python, TypeScript, SQL
              </li>
              <li>
                <span className="font-medium text-white">Backend:</span> Spring
                Boot, Django, Flask, Struts, Servlets, JSP, REST APIs
              </li>
              <li>
                <span className="font-medium text-white">Frontend:</span> React,
                Vue.js, Next.js, TypeScript
              </li>
              <li>
                <span className="font-medium text-white">Databases:</span>{" "}
                PostgreSQL, MySQL — query optimisation, indexing, EXPLAIN
                analysis
              </li>
              <li>
                <span className="font-medium text-white">
                  Infrastructure:
                </span>{" "}
                AWS (EC2, S3, Lambda, Beanstalk), Docker, GitHub Actions, Apache
                Tomcat
              </li>
              <li>
                <span className="font-medium text-white">Practices:</span>{" "}
                Concurrent system design, legacy migration, CI/CD, code review
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              Work Experience
            </h3>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-medium text-white">
                  Software Engineer
                </h4>
                <span className="text-primary font-medium text-sm sm:text-base bg-primary/10 px-3 py-1 rounded">
                  10/2024 – Present
                </span>
              </div>
              <p className="text-lg text-gray font-semibold mb-3">
                i2cinc — Lahore, Pakistan
              </p>
              <p className="text-sm text-gray mb-3 leading-relaxed">
                i2cinc is a fintech platform company. I work within a production
                codebase with years of accumulated complexity, taking ownership
                of features across backend logic, database design, and frontend
                integration.
              </p>
              <ul className="list-disc list-outside pl-5 text-gray space-y-2 mb-4">
                <li>
                  Designed and delivered enterprise payment system features
                  end-to-end — owning domain modelling, business logic, API
                  contracts, and database schema for modules in production use.
                </li>
                <li>
                  Engineered transaction workflows with atomic state transitions
                  and idempotency guarantees, ensuring payment reliability under
                  network failures and concurrent requests.
                </li>
                <li>
                  Led a production Java application through a major JDK
                  version upgrade — resolving API deprecations, module system
                  incompatibilities, and dependency upgrade chains while
                  maintaining stability throughout.
                </li>
                <li>
                  Architected and implemented multi-threaded batch processing
                  pipelines using Java's ExecutorService, reducing processing
                  time significantly through parallelisation of previously
                  sequential workloads.
                </li>
                <li>
                  Optimised critical database queries by analysing EXPLAIN plans,
                  redesigning index strategies, and eliminating full-table scans
                  — achieving measurable latency reductions on production data.
                </li>
                <li>
                  Extended and maintained large Struts/Servlet codebases —
                  decoding embedded business logic, making safe incremental
                  changes, and improving maintainability without introducing
                  regressions.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-medium text-white">
                  Software Engineer
                </h4>
                <span className="text-primary font-medium text-sm sm:text-base bg-primary/10 px-3 py-1 rounded">
                  03/2023 – 06/2024
                </span>
              </div>
              <p className="text-lg text-gray font-semibold mb-3">
                Devsinc — Lahore, Pakistan
              </p>
              <p className="text-sm text-gray mb-3 leading-relaxed">
                Devsinc is a software consultancy. I delivered full-stack
                projects across multiple client domains, building systems from
                scratch and migrating legacy applications.
              </p>
              <ul className="list-disc list-outside pl-5 text-gray space-y-2 mb-4">
                <li>
                  Designed and maintained web applications using Django, Django
                  REST Framework, Flask, React, and Vue.js — taking full
                  ownership of backend architecture, API design, and frontend
                  integration.
                </li>
                <li>
                  Led a .NET to Django migration — re-architecting the backend
                  while preserving business logic and improving performance and
                  long-term maintainability.
                </li>
                <li>
                  Deployed and managed cloud infrastructure on AWS (EC2, S3,
                  Lambda, Elastic Beanstalk), configuring environments and
                  scaling policies for client applications.
                </li>
                <li>
                  Designed and implemented CI/CD pipelines using GitHub Actions
                  and containerised services with Docker, enabling consistent,
                  automated deployments across environments.
                </li>
                <li>
                  Built authentication and authorisation systems (JWT,
                  session-based, RBAC) as an integral part of application
                  architecture — not as isolated features.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              Education
            </h3>

            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h4 className="text-xl font-medium text-white">
                  Bachelor of Science in Computer Science
                </h4>
                <span className="text-primary font-medium text-sm sm:text-base bg-primary/10 px-3 py-1 rounded">
                  10/2019 – 08/2023
                </span>
              </div>
              <p className="text-lg text-gray mb-2">
                Government College University — Lahore, Pakistan
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-400 mb-4">
              Engineering Philosophy
            </h3>
            <p className="text-lg text-gray leading-relaxed mb-6">
              I approach engineering as a design discipline. Every decision has
              trade-offs — between performance and complexity, between speed and
              correctness, between flexibility and maintainability. I take
              ownership of those decisions, reason through the constraints, and
              choose deliberately rather than by convention.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              I care about systems that work correctly under load, fail
              predictably, and remain understandable to the next engineer who
              touches them. I've worked in codebases old enough to have real
              complexity, and I've learned that sustainable engineering is more
              valuable than clever engineering.
            </p>

            <p className="text-lg text-gray leading-relaxed mb-6">
              If you're looking for someone who can own backend systems
              end-to-end, reason about performance and reliability at the design
              level, and operate effectively inside complex production codebases
              —{" "}
              <span className="font-semibold text-primary">let's talk</span>.
            </p>

            <p className="text-lg text-gray leading-relaxed">
              Reach me at{" "}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=darabahmed37@gmail.com&su=Engineering%20Opportunity%20%E2%80%94%20Darab%20Ahmed&body=Hi%20Darab%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about%20a%20potential%20engineering%20opportunity.%0A%0A%5BPlease%20describe%20the%20role%20%2F%20project%20here%5D%0A%0ALooking%20forward%20to%20connecting.%0A%0ARegards%2C%0A%5BYour%20Name%5D`}
              target="_blank"
              rel="noopener noreferrer"
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
