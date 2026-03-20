import { Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "py-3 glass-surface glass-border-gradient shadow-lg"
            : "lg:py-5 py-3 bg-transparent backdrop-blur-lg"
          }`}
      >
        <div className="container px-4 mx-auto relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Brand Logo"
                  className="h-8 lg:h-10 w-auto scale-150 transition-all duration-300"
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex ml-14 space-x-12 items-center">
              {navItems.map((item, index) => (
                <li key={index} className="group relative">
                  <Link
                    className="nav-item-3d text-oak lg:text-lg font-medium hover:text-clay transition-colors duration-300 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-creme rounded-lg px-2 py-1"
                    to={item.href}
                  >
                    {item.label}
                    {/* Animated underline */}

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-clay group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex justify-center items-center">
              <a
                href="https://www.linkedin.com/in/dr-sangieta-pande-00757b1a1/"
                className="group tilt-3d liquid-button relative py-2.5 px-6 text-creme font-semibold overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-creme/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Contact
                </span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleNavbar}
                className="tilt-3d-soft relative p-2 text-oak hover:bg-bone rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 transition-all duration-300 ${mobileDrawerOpen
                        ? "rotate-180 opacity-0 scale-0"
                        : "rotate-0 opacity-100 scale-100"
                      }`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-300 ${mobileDrawerOpen
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-180 opacity-0 scale-0"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer - Full Screen */}
        <div
          className={`h-full w-full fixed bg-creme lg:hidden transition-all duration-500 z-50 top-15 left-0 right-0 ${mobileDrawerOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="relative h-full w-full flex flex-col">
            {/* Mobile Menu Content - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 bg-creme">
              <ul className="space-y-8 text-center w-full">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="nav-item-3d block text-oak text-2xl font-semibold hover:text-clay transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-creme rounded-xl py-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-12 w-full max-w-md mb-5">
                <a
                  href="mailto:drsangieta.pande@gmail.com"
                  className="group tilt-3d liquid-button relative flex items-center justify-center gap-2 py-4 px-8 text-creme text-lg font-semibold overflow-hidden w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-creme/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Contact
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
