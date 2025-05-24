import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import coderImage from "@assets/coder.svg";
import meshImage from "@assets/mesh.svg";
import filler from "@assets/extra-space-filler.svg";

const techTags = [
  "React",
  "Next.js",
  "jQuery",
  "Spring Boot",
  "Django",
  "Java",
  "Docker",
  "AWS",
  "SQL",
  "Databases",
  "Multithreaded Applications",
  "Headless Services",
  "ORMs",
  "Raw Queries",
  "REST APIs",
  "TypeScript",
  "Microservices",
  "CI/CD",
  "Redis",
  "Linux",
];

const Intro = () => {
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTagIndex((prevIndex) => (prevIndex + 1) % techTags.length);
        setFade(true);
      }, 200);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full max-w-7xl mx-auto px-6 py-10 relative">
      <div className="left_intro flex-1 space-y-4">
        <h2 className="text-2xl font-medium text-white">
          Darab is a Full Stack{" "}
          <span className="text-primary inline-block min-w-[220px] min-h-[1em]">
            <TypeAnimation
              sequence={["Software Engineer", 1500, "", 500]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h2>

        <h6 className="text-base text-gray">
          He crafts complete web systems from scratch using modern technologies.
        </h6>

        <h6 className="text-base text-gray-600">
          <span className="font-semibold text-primary">Tech Stack:</span>{" "}
          <span
            className={`inline-block px-3 py-1 bg-primary/10 text-primary font-medium rounded transition-all duration-300 ease-in-out ${fade ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {techTags[currentTagIndex]}
          </span>
        </h6>
        <a
          href="mailto:darabahmed37@gmail.com?subject=Hi Darab I have a project for you lets discuss"
          className="mt-4 inline-block px-6 py-2 border border-primary text-white bg-transparent  rounded shadow"
        >
          Wanna contact me?
        </a>
      </div>

      <div className="right_intro flex-1 lg:flex items-center flex-col  hidden  overflow-hidden">
        <div className="w-full h-[80%] overflow-hidden relative ">
          <img
            src={coderImage}
            alt="Coder"
            className="w-full max-h-full  object-top"
            style={{
              height: "27em",
              transform: "scale(2.2) translate(-13px,72px)",
            }}
          />
          <img
            src={meshImage}
            alt="mesh"
            className="absolute bottom-[43px] right-[85px]"
          />
        </div>

        <div
          className="flex items-center gap-1 mt-2 border p-1 rounded-md max-w-full pr-20 border-gray-300"
          style={{
            transform: "translateX(34px)",
          }}
        >
          <div className="w-4 h-4 shadow-lg  !bg-primary" />
          <p className="text-base text-gray ">
            Currently Working on{" "}
            <strong className={"text-white"}>Portfolio</strong>
          </p>
        </div>
      </div>
      <img id="space-filler" src={filler} />
    </div>
  );
};

export default Intro;
