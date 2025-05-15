import {TypeAnimation} from "react-type-animation";
import {useEffect, useState} from "react";

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
        <div className="flex w-full max-w-7xl mx-auto px-6 py-10">
            <div className="left_intro flex-1 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
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
                <button className="mt-4 px-5 py-2 border border-primary text-white rounded cursor-pointer">
                    Wanna contact me?
                </button>
            </div>

            <div className="right_intro flex-1">{/* Optional visual */}</div>
        </div>
    );
};

export default Intro;
