import Navbar from "./Navbar.tsx";
import github from "@assets/github.svg";
import figma from "@assets/figma.svg";
import football from "@assets/football.svg";
import projectsRectangle from "@assets/projects-rectangle.svg";
import rightCornerMesh from "@assets/right-corner-mesh.svg";

const Header = () => {
  return (
    <div>
      <header className={"flex items-start max-h-24"}>
        <div>
          <div className="w-px h-[191px] !bg-gray translate-x-5"></div>
          <div
            className="images mt-1"
            style={{
              transform: "translateX(5px)",
            }}
          >
            <img src={github} alt="githubLogo" />
            <img src={figma} alt="figma" />
            <img src={football} alt="football" />
          </div>
        </div>
        <Navbar />
      </header>
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

export default Header;
