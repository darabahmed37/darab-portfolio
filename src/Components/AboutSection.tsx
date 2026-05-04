// components/AboutSection.tsx
import Heading from "./Heading";
import { Link } from "react-router";

const AboutSection = () => {
  return (
    <div>
      <Heading title="about me" />
      <section className="bg-white py-2  ">
        <div className="max-w-4xl">
          <p className="text-lg text-gray leading-relaxed mb-6">
            I'm{" "}
            <span className="font-semibold text-primary">Darab Ahmed</span> — a
            backend-focused{" "}
            <span className="font-semibold text-primary">Software Engineer</span>{" "}
            with 3+ years of production experience, primarily in fintech. I
            design and build high-throughput backend systems in Java and Python,
            work on transaction processing and reliability infrastructure, and
            operate inside complex, long-lived codebases. I take end-to-end
            ownership: architecture, implementation, and production support.
          </p>

          <Link
            to={"/about-me"}
            className="mt-4 px-6 py-2 border border-primary text-white bg-transparent hover:bg-primary hover:text-gray cursor-pointer transition rounded shadow"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
