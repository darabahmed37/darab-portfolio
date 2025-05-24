import navLogo from "@assets/nav-logo.svg";
import figma from "@assets/figma.svg";
import football from "@assets/football.svg";
import github from "@assets/github.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-24 pt-6 pb-4">
      <hr className="border-t border-gray-700  w-screen right-0  absolute overflow-hidden" />

      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-7">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src={navLogo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-semibold">Darab Ahmed</span>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          <img src={figma} alt="Figma" className="w-6 h-6" />
          <img src={football} alt="Football" className="w-6 h-6" />
          <img src={github} alt="Projects" className="w-6 h-6" />
        </div>
      </div>

      {/* Bottom Center: Copyright */}
      <div className="mt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Darab Ahmed. All rights reserved.
        </p>
        <a
          href="mailto:darabahmed37@gmail.com?subject=Hi Darab I have a project for you lets discuss"
          className="text-primary underline hover:text-primary/80"
        >
          darabahmed37@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
