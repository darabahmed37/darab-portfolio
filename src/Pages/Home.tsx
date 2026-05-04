import Intro from "../Components/Intro.tsx";
import Projects from "../Components/Projects.tsx";
import AboutSection from "../Components/AboutSection.tsx";
import SkillsShowcase from "../Components/SkillsShowcase.tsx";
import SkillsTeaser from "../Components/SkillsTeaser.tsx";

const Home = () => {
  return (
    <div>
      <Intro />

      <section
        className="mx-auto"
        style={{ maxWidth: "70em" }}
      >
        <SkillsTeaser />
        <Projects />
        <SkillsShowcase />
        <AboutSection />
      </section>
    </div>
  );
};

export default Home;
