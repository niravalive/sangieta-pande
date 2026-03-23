import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { ArrowUp, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import logo from "../assets/logo.png";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("https://formsubmit.co/ajax/niravchadhary14@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: "New Newsletter Subscriber!"
        })
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

          <div className="flex flex-col items-center md:items-end gap-1 w-full md:w-auto mt-6 md:mt-0 flex-1">
            <h4 className="text-navy font-bold tracking-widest uppercase text-2xl mr-4 mb-2">Subscribe For NewsLetter</h4>
            <form className="relative flex items-center w-full max-w-md" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading" || status === "success"}
                className="w-full bg-creme/50 border border-clay/30 rounded-full py-3.5 pl-6 pr-14 text-oak focus:outline-none focus:border-navy/50 focus:ring-1 focus:ring-navy/50 transition-all placeholder:text-oak/40 shadow-inner disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`absolute right-1.5 p-2.5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 focus:ring-offset-bone shadow-md disabled:opacity-80 flex items-center justify-center
                  ${status === 'success' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-navy text-creme hover:bg-clay hover:shadow-lg'}
                `}
                aria-label="Subscribe"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === "success" ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>
            <div className="h-4 mt-1">
              {status === "success" && <p className="text-green-600 text-xs font-semibold tracking-wide">Successfully subscribed!</p>}
              {status === "error" && <p className="text-red-500 text-xs font-semibold tracking-wide">Something went wrong. Please try again.</p>}
            </div>
          </div>
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
