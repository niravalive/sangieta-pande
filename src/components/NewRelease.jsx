import { ShoppingCart, Eye, Award, TrendingUp } from "lucide-react";
import bookimage from "../assets/book-image.jpg";
import { bookRelease } from "../constants";

export default function BookSection() {
  return (
    <section
      id="book"
      className="relative bg-creme py-24 px-6 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-clay rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-oak rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-bone backdrop-blur-sm px-5 py-2 rounded-full text-oak text-sm font-semibold mb-4 border border-oak/20 shadow-lg">
          <TrendingUp className="w-4 h-4" />
          New Release
        </div>

        <h2 className="text-oak text-4xl md:text-5xl font-serif mb-4">
          {bookRelease.title}
        </h2>
        <p className="text-oak/70 text-lg max-w-2xl mx-auto leading-relaxed">
          {bookRelease.subtitle}
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch shadow-2xl rounded-2xl overflow-hidden relative group">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-clay opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>

        <div className="relative flex flex-col md:flex-row w-full bg-bone rounded-2xl overflow-hidden">
          {/* Text Column */}
          <div className="flex-1 p-10 flex flex-col justify-center text-oak relative z-10">
            {/* Best Seller Badge */}
            <div className="inline-flex items-center gap-2 bg-creme backdrop-blur-sm px-4 py-2 rounded-full text-clay text-sm font-semibold mb-4 w-fit border border-clay/20">
              <Award className="w-4 h-4" />
              Best Seller
            </div>

            <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
              {bookRelease.heading}
            </h3>

            <p className="mb-8 text-base md:text-lg text-oak/70 leading-relaxed">
              {bookRelease.description}
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="group relative bg-clay hover:bg-clay/90 px-6 py-3 rounded-xl font-semibold text-creme transition-all duration-300 shadow-lg hover:shadow-clay/50 hover:scale-105 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-creme/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  <a
                    href="https://www.amazon.in/dp/9371642149?ref=ppx_yo2ov_dt_b_fed_asin_title"
                    target="_blank"
                  >
                    Buy Now
                  </a>
                </span>
              </button>

              {/*
              <button className="group relative bg-white/5 backdrop-blur-sm hover:bg-white/10 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-105 shadow-lg">
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Preview
                </span>
              </button>
              */}
            </div>
          </div>

          {/* Image Column */}
          <div className="flex-1 relative overflow-hidden group">
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <img
              src={bookimage}
              alt="Book"
              className="w-full h-full object-cover transform group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-creme/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
