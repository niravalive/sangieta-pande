import { ArrowRight } from "lucide-react";
import heroimage from "../assets/profile.svg";
import { heroItems } from "../constants";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative bg-bone flex flex-col md:flex-row rounded-2xl md:p-12 items-center gap-8 shadow-xl lg:p-0 overflow-hidden min-h-[600px]">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-72 h-72 bg-clay/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-creme rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-bone rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          {/* Image Column */}
          <div className="flex-1 flex justify-center items-center relative z-10 group">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-clay/10 blur-2xl rounded-lg transform group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src={heroimage}
                alt="Hero"
                className="lg:rounded-l-2xl lg:rounded-r-none rounded-2xl object-cover shadow-2xl w-full relative z-10 scale-120 transform scale-125 group-hover:scale-130 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="flex-1 p-10 flex flex-col justify-center text-oak relative z-10">
            {/* Floating badge */}
            {/*
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span>New Release Available</span>
            </div>
            */}
            <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-4 text-oak">
              {heroItems.title}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-oak/80 leading-relaxed">
              {heroItems.description}
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="group relative bg-clay hover:bg-clay/90 text-creme px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-clay/50 hover:scale-105 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-creme/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <a href="#book" className="relative flex items-center gap-2">
                  Buy Book
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </button>



              <button className="relative bg-transparent hover:bg-bone text-oak px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-oak/20 hover:border-oak/40 hover:scale-105">
                <a href="#services">Learn more</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes gradient {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s linear infinite;
          }
        `}</style>
    </div>

  );
}
