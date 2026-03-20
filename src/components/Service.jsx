import { useState } from "react";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { SERVICES_TITLE, SERVICES_SUBTITLE, SERVICE_CARDS } from "../constants";

export default function ServicesSection() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (idx) => {
    setOpenCard(openCard === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="relative bg-creme py-24 px-6 mb-0 mt-0 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-clay/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-bone rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Section header */}
      <div className="text-center mb-14 mt-0 relative z-10">
        <div className="inline-flex items-center gap-2 bg-bone px-5 py-2 rounded-full text-clay text-sm font-semibold mb-4 border border-clay/20 shadow-sm">
          <Sparkles className="w-4 h-4" />
          Services
        </div>

        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-oak">
          {SERVICES_TITLE}
        </h2>

        <p className="text-lg text-oak/70 max-w-2xl mx-auto leading-relaxed">
          {SERVICES_SUBTITLE}
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10 items-start">
        {SERVICE_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="group relative bg-bone rounded-2xl overflow-hidden flex flex-col shadow-lg border border-transparent hover:shadow-2xl hover:border-clay/20 transition-all duration-500 hover:-translate-y-2"
            style={{
              display: "flex",
              flexDirection: "column",
              height: openCard === idx ? "auto" : "fit-content",
              minHeight: openCard === idx ? "auto" : "min(350px, 90vh)",
            }}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-clay/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

            {/* Content */}
            <div className="p-8 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-creme px-4 py-1.5 rounded-full text-oak text-sm font-semibold mb-3 w-fit border border-oak/10 shadow-sm">
                {card.tag}
              </div>

              <h3 className="text-xl md:text-2xl font-serif mb-4 text-oak group-hover:text-clay transition-colors duration-300">
                {card.title}
              </h3>

              <p className="mb-6 text-oak/70 leading-relaxed">
                {card.description}
              </p>

              {/* Primary button */}
              <button
                className="inline-flex items-center gap-2 text-clay font-semibold hover:text-oak group/btn transition-colors duration-300 mb-3"
                onClick={() =>
                (window.location.href =
                  "mailto:drsangieta.pande@gmail.com?subject=Inquiry%20from%20website")
                }
              >
                <span>{card.button}</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>

              {/* More Info Dropdown Toggle */}
              <button
                onClick={() => toggleCard(idx)}
                className="inline-flex items-center gap-2 text-clay font-semibold hover:text-oak transition-colors duration-300"
              >
                More Info
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openCard === idx ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${openCard === idx
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-oak/80 whitespace-pre-line leading-relaxed bg-creme p-4 rounded-xl border border-bone">
                  {card.content}
                </p>
              </div>
            </div>

            {/* Image section removed / replace if needed */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-creme/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-clay/20 transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
