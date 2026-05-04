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
            Hello! My name is{" "}
            <span className="font-semibold text-primary">Darab Ahmed</span>. I’m
            a passionate, performance-driven{" "}
            <span className="font-semibold text-primary">
              Software Engineer
            </span>{" "}
            based in Lahore, Pakistan. With over 1.5 years of professional experience across companies like i2cinc and Devsinc, I specialize in building robust, scalable backend systems using Java and Python, alongside modern frontend frameworks like React and Vue.js. I approach every project with a builder’s mindset and a strong commitment to long-term maintainability.
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
