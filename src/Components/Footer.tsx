import navLogo from "@assets/nav-logo.svg";
import figma from "@assets/figma.svg";
import football from "@assets/football.svg";
import github from "@assets/github.svg";
import { FaLinkedin } from "react-icons/fa";

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
          <img src={github} alt="GitHub" className="w-6 h-6" />
          <a
            href="https://www.linkedin.com/in/darab-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[#abb2bf] hover:text-[#0a66c2] transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Center: Copyright */}
      <div className="mt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Darab Ahmed. All rights reserved.
        </p>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=darabahmed37@gmail.com&su=Engineering%20Opportunity%20%E2%80%94%20Darab%20Ahmed&body=Hi%20Darab%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20regarding%20a%20potential%20opportunity.%0A%0A%5BPlease%20describe%20the%20role%20%2F%20project%20here%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ARegards%2C%0A%5BYour%20Name%5D`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          darabahmed37@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
