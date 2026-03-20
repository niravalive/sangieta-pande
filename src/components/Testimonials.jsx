import { Star, Quote, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { testimonials } from "../constants";

export default function TestimonialSection() {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for infinite scroll effect
  const infiniteTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start at the middle set to allow scrolling both ways
    const cardWidth = 380 + 32; // card width + gap
    container.scrollLeft = testimonials.length * cardWidth;

    const handleScroll = () => {
      if (isScrolling) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      // Reset position when reaching boundaries for infinite effect
      if (currentScroll <= 0) {
        setIsScrolling(true);
        container.scrollLeft = testimonials.length * cardWidth;
        setTimeout(() => setIsScrolling(false), 50);
      } else if (currentScroll >= maxScroll) {
        setIsScrolling(true);
        container.scrollLeft = testimonials.length * cardWidth;
        setTimeout(() => setIsScrolling(false), 50);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    const autoScroll = setInterval(() => {
      if (!isPaused) {
        container.scrollLeft += 2;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="relative bg-bone py-20 px-6 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-clay/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-creme rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="text-center mb-10 relative z-10">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-creme px-5 py-2 rounded-full text-clay text-sm font-semibold mb-4 border border-clay/20 shadow-sm">
          <Sparkles className="w-4 h-4" />
          Testimonials
        </div>

        <h2 className="text-4xl md:text-5xl font-serif mb-3 text-oak">
          What people say
        </h2>
        <p className="text-lg text-oak/70 max-w-2xl mx-auto leading-relaxed">
          Transformative experiences from clients worldwide
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-hidden scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-8 pb-4" style={{ width: "max-content" }}>
            {infiniteTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="group relative bg-creme rounded-2xl border border-bone p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-clay/30 transition-all duration-500 hover:-translate-y-1"
                style={{ minWidth: "380px", maxWidth: "380px" }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-clay/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-clay" />
                </div>

                {/* Star rating */}
                <div className="mb-4 flex items-center space-x-1 relative z-10">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-clay group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                      size={20}
                      fill="currentColor"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-oak/80 font-medium mb-6 flex-grow relative z-10 leading-relaxed">
                  "{t.text}"
                </p>

                {/* User avatar and info */}
                <div className="flex items-center relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-clay/20 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      src={t.image}
                      alt={t.user}
                      className="w-12 h-12 rounded-full mr-4 object-cover relative z-10 ring-2 ring-bone group-hover:ring-clay/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-oak group-hover:text-clay transition-colors duration-300">
                      {t.user}
                    </div>
                    <div className="text-oak/60 text-sm">{t.company}</div>
                  </div>
                </div>

                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-clay/20 transition-colors duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
