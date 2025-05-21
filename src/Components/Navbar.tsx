import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import navLogo from "@assets/nav-logo.svg";
import { NavLink } from "react-router";

const navItems = ["home", "about-me", "contact"] as const;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    // Scroll handler to toggle sticky state
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Compose navbar classes:
  // Sticky when scrolled OR menu open: fixed + bg color
  // Else transparent background but still fixed at top for consistent UX
  const navClasses = [
    "fixed top-0 left-0 z-50 w-full px-4 py-2 rounded-md transition-colors duration-300 will-change-auto !bg-[#191c21]",
    isSticky ? " shadow-md" : "",
  ].join(" ");

  return (
    <nav ref={navRef} className={navClasses}>
      <div className="flex justify-between items-center h-12">
        {/* Logo */}
        <div className="text-lg font-bold text-white flex items-center gap-2">
          <img src={navLogo} alt="Logo" className="h-6 w-6" />
          <span>Darab</span>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((value) => (
            <li key={value}>
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

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 !bg-[#191c21] w-full rounded-md p-4 space-y-3"
          >
            {navItems.map((value) => (
              <li key={value}>
                <NavLink
                  to={`/${value}`}
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                  onClick={() => setMenuOpen(false)} // Close on click
                >
                  <span className="text-primary">#</span>{" "}
                  <span className="text-gray">{value}</span>
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
