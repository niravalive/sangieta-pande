import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bone border-t border-bone px-8 py-12 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-creme rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={logo}
              alt="Dr. Sangieta Pande"
              className="h-20 lg:h-22 w-auto opacity-90 ml-2 mt-4"
            />
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/dr-sangieta-pande-00757b1a1/"
                aria-label="LinkedIn"
                className="group tilt-3d-soft glass-surface glass-border-gradient relative p-3 rounded-full text-clay hover:text-oak transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
              >
                <FaLinkedinIn size={20} className="relative z-10" />
                <div className="absolute inset-0 bg-clay/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://x.com/DrSangietaPande"
                aria-label="X"
                className="group tilt-3d-soft glass-surface glass-border-gradient relative p-3 rounded-full text-clay hover:text-oak transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
              >
                <FaTwitter size={20} className="relative z-10" />
                <div className="absolute inset-0 bg-clay/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://www.youtube.com/@DrSangietaPande"
                aria-label="YouTube"
                className="group tilt-3d-soft glass-surface glass-border-gradient relative p-3 rounded-full text-clay hover:text-oak transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
              >
                <FaYoutube size={20} className="relative z-10" />
                <div className="absolute inset-0 bg-clay/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          <p className="text-oak/85 text-sm lg:text-base italic font-normal tracking-wide max-w-xl text-center md:text-right">
            "Education, ethics, and reflection are the foundations of meaningful leadership."
          </p>
        </div>

        {/* Divider with gradient */}
        <div className="relative h-px my-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-oak/20 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          {/* Copyright Line */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-oak/70 lg:text-sm text-xs">
            <span>© 2025</span>
            <span className="font-semibold text-oak">
              Dr. Sangieta Pande
            </span>
            <span>• All rights reserved</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group tilt-3d-soft glass-surface glass-border-gradient flex items-center gap-2 px-4 py-2 rounded-full text-oak hover:text-clay transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/30 focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
