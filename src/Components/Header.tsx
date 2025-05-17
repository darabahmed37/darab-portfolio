import Navbar from "./Navbar.tsx";
import github from "@assets/github.svg";
import figma from "@assets/figma.svg";
import football from "@assets/football.svg";

const Header = () => {
    return (
        <div>
            <header className={"flex items-start max-h-24"}>
                <div>
                    <div className="w-px h-[191px] !bg-gray translate-x-5"></div>
                    <div className="images mt-1" style={{
                        transform: "translateX(5)",
                    }}>
                        <img src={github} alt="githubLogo"/>
                        <img src={figma} alt="githubLogo"/>
                        <img src={football} alt="githubLogo"/>
                    </div>
                </div>
                <Navbar/>
            </header>
        </div>
    );
};

export default Header;
