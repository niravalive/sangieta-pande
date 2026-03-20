import { Calendar, MapPin, Clock } from "lucide-react";
import { eventSection } from "../constants";

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative py-24 px-6 overflow-hidden bg-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-clay rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-oak rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-creme rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="text-left mb-14 max-w-4xl mx-auto relative z-10">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 bg-bone backdrop-blur-sm px-5 py-2 rounded-full text-oak text-sm font-semibold mb-4 border border-oak/20 shadow-lg">
          <Clock className="w-4 h-4" />
          Upcoming
        </div>

        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-oak">
          {eventSection.title}
        </h2>
        <p className="text-lg text-oak/80 leading-relaxed">
          {eventSection.subtitle}
        </p>
      </div>

      <div
        className={`max-w-5xl mx-auto grid gap-10 relative z-10 ${eventSection.cards.length === 1
          ? "grid-cols-2 place-items-center"
          : "md:grid-cols-2"
          }`}
      >
        {eventSection.cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl overflow-hidden shadow-2xl border border-bone hover:border-clay/30 transition-all duration-500 hover:-translate-y-2 bg-bone"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-creme/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Floating date badge */}
              <div className="absolute right-6 top-6 bg-creme/95 backdrop-blur-sm text-oak rounded-xl px-4 py-3 text-center shadow-lg border border-bone transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-xs font-semibold text-oak/60 uppercase">
                  {card.date.day}
                </div>
                <div className="text-2xl font-bold leading-tight">
                  {card.date.num}
                </div>
                <div className="text-xs font-semibold text-oak/60 uppercase">
                  {card.date.month}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-clay/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="mb-3 relative z-10">
                <span className="inline-flex items-center gap-1.5 bg-clay/20 backdrop-blur-sm text-clay px-3 py-1.5 rounded-full text-xs font-semibold border border-clay/30">
                  <Calendar className="w-3 h-3" />
                  {card.tag}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif mb-3 text-oak group-hover:text-clay transition-colors duration-300 relative z-10">
                {card.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-oak/70 mb-4 relative z-10">
                <MapPin className="w-4 h-4 text-clay" />
                <span>{card.location}</span>
              </div>

              {/*
              <p className="text-white/70 mb-6 text-sm leading-relaxed relative z-10">
                {card.description}
              </p>

              <a
                href={card.ctaHref}
                className="group/link inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 text-sm transition-colors duration-300 relative z-10"
              >
                <span>{card.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>
                 */}
            </div>

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-clay/30 transition-colors duration-500 pointer-events-none"></div>
          </div>
        ))}
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
      `}</style>
    </section>
  );
}
