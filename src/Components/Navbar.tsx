import navLogo from "@assets/nav-logo.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-end justify-between px-2 py-2 bg-transparent h-12 w-4/5 mx-auto mt-3">
      <div className="text-lg font-bold text-white flex items-center gap-2">
        <img src={navLogo} alt="" />
        <span>Darab</span>
      </div>
      <div>
        <ul className="flex space-x-6">
          {["home", "about-me", "contact"].map((value, index) => (
            <li key={index}>
              <NavLink
                to={`/${value}`}
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                <span className="text-primary">#</span>{" "}
                <span className="text-gray">{value}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
