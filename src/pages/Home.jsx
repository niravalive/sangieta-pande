import { ArrowRight, Sparkles, GraduationCap, Globe, BookOpen, Users, Mic2, Quote, PenTool, Presentation, Building2, Award, CheckCircle2 } from "lucide-react";
import profile from "../assets/profile.png";
import bookImage from "../assets/book-image.jpg";
import hanumanImage from "../assets/event1.png";
import useScrollReveal from "../hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();
  const domains = [
    {
      title: "Education & Academic Leadership",
      description: "Designing and delivering future-ready academic programs, mentoring students, and contributing to institutional excellence through structured pedagogy and reflective learning models.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "International Research & Thought Leadership",
      description: "Conducting and publishing research on entrepreneurial narratives, leadership identity, ethics, sustainability, and psychological dimensions of enterprise and innovation.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Authorship & Scholarly Writing",
      description: "Author of reflective, motivational, and spiritual works that bridge leadership, balance, discipline, and modern life.",
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      title: "Speaking & Academic Engagements",
      description: "Delivering keynote talks, international seminars, faculty development programs, and leadership workshops across academic and professional platforms.",
      icon: <Presentation className="w-6 h-6" />,
    },
    {
      title: "Institutional & Program Development",
      description: "Advising institutions on curriculum design, academic frameworks, certifications, and program structures aligned with international benchmarks.",
      icon: <Building2 className="w-6 h-6" />,
    }
  ];

  const credentials = [
    {
      text: "Doctorate in International Business Management",
      icon: <Award className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      text: "25+ years of experience in higher education and academic leadership",
      icon: <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      text: "Faculty, Director, Researcher, and Academic Mentor",
      icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      text: "International research publications and conference contributions",
      icon: <Globe className="w-5 h-5 lg:w-6 lg:h-6" />,
    },
    {
      text: "Strong expertise in curriculum design and institutional development",
      icon: <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />,
    }
  ];

  return (
    <div className="home-page liquid-canvas min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen lg:h-screen overflow-hidden flex flex-col premium-gradient">
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-bone/30 to-transparent hidden lg:block"></div>
        <div className="absolute -bottom-20 -left-20 text-[20rem] font-black text-oak opacity-[0.015] select-none pointer-events-none tracking-tighter">SP</div>
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-clay/[0.02] blur-3xl pointer-events-none hidden lg:block"></div>

        <div className="flex-1 flex mb-10 lg:items-center relative z-10 pt-28 lg:pt-20 pb-12 lg:pb-0">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
              <div className="lg:col-span-7 z-20">
                <div className="overflow-hidden mb-5 reveal">
                  <div className="inline-flex items-center gap-2.5 glass-surface glass-border-gradient px-5 py-2.5 rounded-full">
                    <span className="w-8 h-[1.5px] bg-clay/60"></span>
                    <Sparkles className="w-3 h-3 text-clay" />
                    <span className="text-clay font-bold text-[11px] lg:text-xs tracking-[0.2em] uppercase">Reflective Leadership & Education</span>
                  </div>
                </div>
                <div className="relative mb-7 reveal" style={{ transitionDelay: "100ms" }}>
                  <h1 className="text-4xl lg:text-7xl font-black text-oak leading-[1.05] tracking-tighter">
                    Dr. Sangieta 
                    <span className="gradient-text ml-0 lg:ml-1 mr-3 relative">
                      Pande
                      <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-clay/40 to-transparent"></span>
                    </span>
                  </h1>
                </div>
                <div className="max-w-2xl mb-10 reveal" style={{ transitionDelay: "200ms" }}>
                  <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-oak/60 font-bold text-s lg:text-sm mb-7 border-l-2 border-clay/30 pl-5 py-1">
                    <span className="flex items-center gap-1.5 hover:text-clay transition-colors duration-300"><GraduationCap className="w-3.5 h-3.5 text-clay/50" /> Educator</span>
                    <span className="flex items-center gap-1.5 hover:text-clay transition-colors duration-300"><Globe className="w-3.5 h-3.5 text-clay/50" /> Researcher</span>
                    <span className="flex items-center gap-1.5 hover:text-clay transition-colors duration-300"><BookOpen className="w-3.5 h-3.5 text-clay/50" /> Author</span>
                    <span className="flex items-center gap-1.5 hover:text-clay transition-colors duration-300"><Users className="w-3.5 h-3.5 text-clay/50" /> Leader</span>
                    <span className="flex items-center gap-1.5 hover:text-clay transition-colors duration-300"><Mic2 className="w-3.5 h-3.5 text-clay/50" /> Speaker</span>
                  </div>
                  <div className="space-y-4 text-oak/75 text-base xs:text-lg leading-[1.85]">
                    <p>
                      Dr. Sangieta Pande is an educator, international researcher, and academic leader with over two decades of experience in higher education, research, curriculum development, and institutional leadership. Her work focuses on shaping reflective leaders and ethical professionals through education that integrates academic rigor, global relevance, and human values.
                    </p>
                    <p>
                      Her academic and intellectual contributions span education, leadership, entrepreneurship, sustainability, and conscious living—bringing together research-driven insights and reflective wisdom.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-5 items-center reveal" style={{ transitionDelay: "300ms" }}>
                  <button className="group/btn tilt-3d liquid-button text-creme px-8 py-4 font-bold text-sm lg:text-base tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme">
                    Explore My Work <ArrowRight className="inline ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button className="tilt-3d liquid-button-outline text-clay px-8 py-4 font-bold text-sm lg:text-base tracking-widest uppercase hover:bg-clay hover:text-brown transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme">
                    Speaking & Collaborations
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end reveal-right">
                <div className="relative group">
                  <div className="absolute -top-5 -right-5 inset-0 border-[1.5px] border-clay opacity-[0.08] translate-x-4 translate-y-4 pointer-events-none transition-all duration-700 group-hover:translate-x-5 group-hover:translate-y-5 rounded-2xl"></div>
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 dot-pattern opacity-40 pointer-events-none hidden lg:block"></div>
                  <div className="relative w-[280px] lg:w-[480px] aspect-[4/5] overflow-hidden shadow-2xl bg-bone hero-image-wrap animate-pulse-glow rounded-2xl">
                    <img src={profile} alt="Dr. Sangieta Pande" className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-oak/15 via-transparent to-transparent mix-blend-multiply"></div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 2: SNAPSHOT */}
      <section className="relative min-h-screen lg:min-h-screen flex items-center overflow-hidden py-24 lg:py-32 premium-gradient-alt">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-clay/[0.02] blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4 reveal-left">
              <span className="text-clay font-black text-6xl lg:text-7xl opacity-[0.08] tracking-tighter block mb-2">02</span>
              <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm mb-4">Professional Snapshot</h2>
              <h3 className="text-3xl lg:text-5xl font-black text-oak tracking-tighter leading-[1.1]">30-Second <br /><span className="text-clay italic font-light">Introduction</span></h3>
              <div className="h-1 w-16 bg-gradient-to-r from-clay/30 to-transparent mt-6"></div>
            </div>
            <div className="lg:col-span-8 lg:pl-12 lg:border-l border-clay/10 reveal-right">
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-oak/85 leading-[1.9] font-normal">
                  <span className="font-bold text-oak">Dr. Sangieta Pande</span> has contributed extensively to undergraduate, postgraduate, and doctoral education as a faculty member, curriculum architect, mentor, and institutional advisor. She has worked across diverse academic environments, combining research, pedagogy, and leadership to design learning ecosystems aligned with global academic standards.
                </p>
                <div className="relative premium-card py-6 px-8 border-l-4 border-clay italic text-oak/75 text-base lg:text-lg leading-[1.85]">
                  <Quote className="absolute top-3 right-4 w-8 h-8 text-clay/[0.06]" />
                  "Her work reflects a balanced integration of theory and practice, with a strong emphasis on ethical leadership, long-term value creation, and human-centered education."
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 3: CORE DOMAINS */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white/60 to-creme py-24 lg:py-32">
        <div className="absolute top-0 left-0 w-64 h-64 dot-pattern opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 dot-pattern opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="mb-10 lg:mb-14 capitalize flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-2 justify-center">
              <span className="text-clay font-black text-2xl lg:text-3xl opacity-[0.22] tracking-tighter">03</span>
              <div className="h-[1.5px] w-10 bg-gradient-to-r from-clay/30 to-transparent"></div>
              <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm">Expertise & Impact</h2>
            </div>
            <h3 className="text-2xl lg:text-5xl font-black text-oak tracking-tighter leading-tight">Core Domains <span className="text-clay italic font-light">of Work</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 stagger-children">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`premium-card aspect-[3/2] p-6 lg:p-7 group flex flex-col ${index >= 3 ? "lg:translate-x-1/2" : ""}`}
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-bone to-bone/60 rounded-xl flex items-center justify-center text-clay mb-4 group-hover:bg-gradient-to-br group-hover:from-clay group-hover:to-clay/80 group-hover:text-creme transition-all duration-500 shadow-sm">
                  {domain.icon}
                </div>
                <h4 className="text-base lg:text-[18px] font-bold text-oak mb-2 group-hover:text-clay transition-colors duration-300 first-letter:uppercase tracking-tight leading-tight">{domain.title}</h4>
                <p className="text-oak/60 text-sm lg:text-[17px] leading-relaxed flex-1 line-clamp-4">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 4: ACADEMIC CREDENTIALS */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-bone via-bone to-bone/80 py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-clay/[0.02] blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="mb-6 lg:mb-8 capitalize">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-clay font-black text-2xl lg:text-4xl opacity-[0.12] tracking-tighter">04</span>
                  <div className="h-[1.5px] w-10 bg-gradient-to-r from-clay/30 to-transparent"></div>
                  <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm">Background & Authority</h2>
                </div>
                <h3 className="text-2xl lg:text-5xl font-black text-oak tracking-tighter leading-tight mb-4">Academic <span className="text-clay italic font-light ml-2">Credentials</span></h3>
                <div className="h-1 w-20 bg-gradient-to-r from-clay/30 to-transparent mb-5"></div>
                <p className="text-oak/65 text-base lg:text-lg leading-[1.85] max-w-md">
                  Dr. Pande's work is rooted in over two decades of international research, leadership, and institutional excellence.
                </p>
              </div>
            </div>

            <div className="space-y-3.5 stagger-children">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="premium-card flex items-start gap-4 p-5 lg:p-6 group"
                >
                  <div className="shrink-0 w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-br from-creme to-creme/60 rounded-xl flex items-center justify-center text-clay group-hover:bg-gradient-to-br group-hover:from-clay group-hover:to-clay/80 group-hover:text-creme transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-oak/85 text-base font-medium leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 5: RESEARCH & PUBLICATIONS */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-creme py-24 lg:py-32 premium-gradient">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-clay/[0.015] blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

            {/* LEFT: Header + Research Focus */}
            <div className="lg:col-span-2 reveal-left">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-clay font-black text-xl lg:text-2xl opacity-[0.12] tracking-tighter">05</span>
                  <div className="h-[1.5px] w-10 bg-gradient-to-r from-clay/30 to-transparent"></div>
                  <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm">Thought Leadership</h2>
                </div>
                <h3 className="text-2xl lg:text-4xl font-black text-oak tracking-tighter leading-tight mb-5">Research & <span className="text-clay italic font-light ml-2">Publications</span></h3>
                <div className="h-px w-full bg-gradient-to-r from-clay/15 to-transparent mb-6"></div>
                <p className="text-sm lg:text-base font-semibold uppercase tracking-widest text-clay mb-3">Research Focus</p>
                <p className="text-oak/65 text-base lg:text-lg leading-[1.85]">
                  Dr. Pande's research examines the intersection of <em className="text-clay not-italic font-medium">entrepreneurial narratives, leadership identity, stakeholder trust, ethics,</em> and <em className="text-clay not-italic font-medium">sustainability</em> — exploring how storytelling and psychological design influence long-term enterprise success.
                </p>
              </div>
            </div>

            {/* RIGHT: Publication Cards + CTA */}
            <div className="lg:col-span-3 space-y-5 reveal-right">
              {/* Doctoral Research */}
              <div className="premium-card p-6 lg:p-8 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-clay/40"></div>
                  <p className="text-xs lg:text-sm font-black uppercase tracking-widest text-clay">Doctoral Research</p>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-oak tracking-tight leading-snug mb-3 group-hover:text-clay transition-colors duration-300">
                  The Role of Entrepreneurial Narratives in Building and Sustaining Successful Enterprises
                </h4>
                <p className="text-oak/55 text-sm lg:text-base leading-relaxed">
                  A mixed-methods doctoral study integrating in-depth interviews with entrepreneurs and quantitative stakeholder insights to understand the role of narrative identity in enterprise longevity.
                </p>
              </div>

              {/* International Publication */}
              <div className="premium-card p-6 lg:p-8 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-clay/40"></div>
                  <p className="text-xs lg:text-sm font-black uppercase tracking-widest text-clay">International Peer-Reviewed Publication</p>
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-oak tracking-tight leading-snug mb-3 group-hover:text-clay transition-colors duration-300">
                  Designed to Manipulate: Psychological Design Ethics in the Era of Green Tech
                </h4>
                <p className="text-oak/55 text-sm lg:text-base leading-relaxed">
                  Critically examines ethical concerns surrounding persuasive design within green technology, contributing to global discourse on <em className="text-clay not-italic font-medium">design ethics, sustainability leadership,</em> and responsible technological innovation.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2 ml-0 reveal" style={{ transitionDelay: "200ms" }}>
                <a href="#" className="group/cta tilt-3d liquid-button-outline inline-flex items-center gap-2.5 text-oak hover:bg-clay hover:oak transition-colors px-6 py-3 text-sm font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme">
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  View Research & Publications
                </a>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 6: BOOKS & AUTHORSHIP */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-bone via-bone to-bone/80 py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
        <div className="absolute -top-20 left-1/3 w-80 h-80 rounded-full bg-clay/[0.02] blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 dot-pattern opacity-20 pointer-events-none hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* LEFT: All text content */}
            <div className="lg:col-span-4 flex flex-col gap-6 reveal-left">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-clay font-black text-2xl opacity-[0.32] tracking-tighter">06</span>
                  <div className="h-[1.5px] w-10 bg-gradient-to-r from-clay/30 to-transparent"></div>
                  <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm">Written Works</h2>
                </div>
                <h3 className="text-3xl lg:text-5xl font-black text-oak tracking-tighter leading-tight mb-5">
                  Books &<span className="text-clay italic font-light ml-2">Authorship</span>
                </h3>
                <div className="h-px w-full bg-gradient-to-r from-clay/15 to-transparent mb-5"></div>
                <p className="text-oak/60 text-base lg:text-lg leading-[1.85] mb-4">
                  Dr. Sangieta Pande is the author of multiple reflective and transformational works that explore leadership, balance, spirituality, and disciplined growth.
                </p>
              </div>
              <p className="text-oak/40 text-sm lg:text-base italic leading-relaxed border-l-2 border-clay/20 pl-5">
                Each book reflects a deep commitment to conscious living, ethical leadership, and inner resilience in a demanding modern world.
              </p>
            </div>

            {/* RIGHT: Book Cards */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-5 lg:gap-6 stagger-children">

              {/* Book Card 1 */}
              <div className="premium-card group flex flex-col overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden h-52 lg:h-64 shrink-0">
                  <img
                    src={bookImage}
                    alt="The Middle Path to Greatness"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oak/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-3 left-3 bg-clay/90 backdrop-blur-md text-creme text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg">
                    Leadership
                  </span>
                </div>
                {/* Info */}
                <div className="p-5 lg:p-6 flex flex-col flex-1 gap-2">
                  <p className="text-xs font-black uppercase tracking-widest text-clay/45">Book One · Leadership & Balance</p>
                  <h4 className="text-lg lg:text-xl font-black text-oak tracking-tighter leading-snug group-hover:text-clay transition-colors duration-300">
                    The Middle Path to Greatness
                  </h4>
                  <p className="text-oak/45 text-base italic">Balance, Not Burnout</p>
                  <div className="mt-auto pt-4 border-t border-clay/[0.06]">
                    <a
                      href="https://www.amazon.in/dp/9371642149"
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn tilt-3d liquid-button inline-flex items-center gap-2 text-creme px-5 py-2.5 text-xs font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
                    >
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" /> Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>

              {/* Book Card 2 */}
              <div className="premium-card group flex flex-col overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden h-52 lg:h-64 shrink-0">
                  <img
                    src={hanumanImage}
                    alt="Hanuman: The Warrior of My Soul"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-oak/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="absolute top-3 left-3 bg-oak/70 backdrop-blur-md text-creme text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-lg">
                    Spiritual
                  </span>
                </div>
                {/* Info */}
                <div className="p-5 lg:p-6 flex flex-col flex-1 gap-2">
                  <p className="text-xs font-black uppercase tracking-widest text-clay/45">Book Two · Spirituality & Devotion</p>
                  <h4 className="text-lg lg:text-xl font-black text-oak tracking-tighter leading-snug group-hover:text-clay transition-colors duration-300">
                    Hanuman: The Warrior of My Soul
                  </h4>
                  <p className="text-oak/45 text-base italic">Devotion, Courage & Resilience</p>
                  <div className="mt-auto pt-4 border-t border-clay/[0.06]">
                    <a
                      href="https://amzn.in/d/0cgaH6lw"
                      target="_blank"
                      className="group/btn tilt-3d liquid-button-outline inline-flex items-center gap-2 text-clay hover:bg-clay hover:text-oak transition-colors px-5 py-2.5 text-xs font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme"
                    >
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" /> Buy On Amazon
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 7: SPEAKING & ENGAGEMENTS */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-creme py-24 lg:py-32 premium-gradient-alt">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 dot-pattern opacity-20 pointer-events-none hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT: Header + Intro */}
            <div className="reveal-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-clay font-black text-xl lg:text-2xl opacity-[0.12] tracking-tighter">07</span>
                <div className="h-[1.5px] w-10 bg-gradient-to-r from-clay/30 to-transparent"></div>
                <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm">Platforms & Talks</h2>
              </div>
              <h3 className="text-3xl lg:text-5xl font-black text-oak tracking-tighter leading-tight mb-5">Speaking & <br className="hidden lg:block" /><span className="text-clay italic font-light">Engagements</span></h3>
              <div className="h-px w-full bg-gradient-to-r from-clay/15 to-transparent mb-7"></div>
              <p className="text-oak/65 text-base lg:text-lg leading-[1.85] mb-10">
                Dr. Pande regularly engages with universities, academic forums, conferences, and leadership platforms through structured talks and workshops designed to be insightful, reflective, and globally relevant.
              </p>
              <a href="mailto:drsangieta.pande@gmail.com"
                className="group/btn tilt-3d liquid-button inline-flex items-center gap-3 text-creme px-7 py-3.5 text-sm font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme">
                <Mic2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                Invite Dr. Pande
              </a>
            </div>

            {/* RIGHT: Speaking Themes */}
            <div className="space-y-3 stagger-children">
              {[
                { num: "01", theme: "Conscious and Ethical Leadership" },
                { num: "02", theme: "Entrepreneurial Narratives and Identity" },
                { num: "03", theme: "Sustainability, Green Tech & Responsible Innovation" },
                { num: "04", theme: "Design Thinking and Education for the Future" },
                { num: "05", theme: "Balance, Resilience, and Self-Mastery" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="premium-card group flex items-center gap-5 p-4 lg:p-5 cursor-default"
                >
                  <span className="text-clay/20 font-black text-sm lg:text-base tracking-tighter shrink-0 group-hover:text-clay transition-colors duration-500">{item.num}</span>
                  <div className="h-5 w-[1.5px] bg-clay/10 group-hover:bg-clay/30 group-hover:h-6 transition-all duration-500 shrink-0"></div>
                  <p className="text-oak/80 text-base lg:text-lg font-semibold tracking-tight group-hover:text-clay transition-colors duration-500">{item.theme}</p>
                  <ArrowRight className="w-4 h-4 text-clay/0 group-hover:text-clay/50 ml-auto transition-all duration-500 group-hover:translate-x-1 shrink-0" />
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 8: INSIGHTS & REFLECTIONS */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-bone via-bone to-bone/80 py-24 lg:py-32">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-clay/[0.015] blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* LEFT: Section Marker + Title */}
            <div className="lg:col-span-4 reveal-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-clay font-black text-xl lg:text-2xl opacity-[0.32] tracking-tighter">08</span>
                <div className="h-[1.5px] w-10 bg-gradient-to-r from-clay/30 to-transparent"></div>
                <h2 className="text-clay font-black tracking-[0.4em] uppercase text-xs lg:text-sm">Essays & Reflections</h2>
              </div>
              <h3 className="text-3xl lg:text-6xl font-black text-oak tracking-tighter leading-none">
                Insights &<br /><span className="text-clay italic font-light">Reflections</span>
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-clay/30 to-transparent mt-6"></div>
            </div>

            {/* CENTER: Intro + Tags + CTA */}
            <div className="lg:col-span-5 reveal">
              <div className="h-px w-full bg-gradient-to-r from-clay/15 to-transparent mb-7"></div>
              <p className="text-oak/65 text-base lg:text-lg leading-[1.85] mb-7">
                Selected essays and reflections on education, leadership, research, sustainability, and life — drawing from academic inquiry and lived experience. Written with clarity and depth to foster thoughtful dialogue and long-term reflection.
              </p>

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {["Education", "Leadership", "Research", "Sustainability", "Life & Balance"].map((tag) => (
                  <span key={tag} className="tilt-3d-soft liquid-button-outline px-4 py-2.5 text-xs lg:text-sm font-bold uppercase tracking-widest text-clay/70 hover:bg-clay hover:oak transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#"
                className="group/cta tilt-3d liquid-button-outline inline-flex items-center gap-3 text-clay hover:bg-clay hover:text-oak transition-colors px-6 py-3 text-sm font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/40 focus-visible:ring-offset-2 focus-visible:ring-offset-creme">
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                Read Insights
              </a>
            </div>

            {/* RIGHT: Large decorative quote */}
            <div className="hidden lg:flex lg:col-span-3 items-center justify-center reveal-right">
              <div className="relative animate-float-slow">
                <Quote className="w-36 h-36 text-clay/[0.07]" />
                <p className="absolute inset-0 flex items-center justify-center text-center text-xs text-clay/55 font-semibold uppercase tracking-[0.3em] leading-normal px-4">
                  Clarity<br />through<br />inquiry
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-clay/10 to-transparent"></div>
      </section>

      {/* SECTION 9: FINAL CALL TO ACTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-clay via-clay to-oak/80 text-creme text-center">
        {/* Decorative background number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[28rem] font-black text-creme/[0.02] tracking-tighter leading-none">09</span>
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-creme/[0.02] blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-creme/[0.015] blur-3xl pointer-events-none"></div>

        {/* Thin top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-creme/10 to-transparent"></div>

        <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Marker */}
          <div className="flex items-center justify-center gap-3 mb-12 reveal">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-creme/20"></div>
            <span className="text-creme/35 font-black tracking-[0.4em] uppercase text-xs">Let's Connect</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-creme/20"></div>
          </div>

          {/* Big Headline */}
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none mb-6 lg:mb-8 reveal" style={{ transitionDelay: "100ms" }}>
            Work Together.<br />
            <span className="text-creme/25 italic font-light">Grow Together.</span>
          </h2>

          {/* Description */}
          <p className="text-creme/45 text-base lg:text-xl leading-[1.85] mb-14 max-w-xl mx-auto reveal" style={{ transitionDelay: "200ms" }}>
            For academic collaborations, international research discussions, speaking engagements, or professional inquiries — reach out directly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal" style={{ transitionDelay: "300ms" }}>
            <a
              href="mailto:drsangieta.pande@gmail.com"
              className="group/btn tilt-3d glass-surface-strong glass-border-gradient inline-flex items-center gap-3 text-clay px-8 py-4 text-sm font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme/40 focus-visible:ring-offset-2 focus-visible:ring-offset-clay"
            >
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/dr-sangieta-pande-00757b1a1/"
              target="_blank"
              rel="noreferrer"
              className="group/btn tilt-3d liquid-button-outline inline-flex items-center gap-3 text-creme/80 hover:text-creme transition-colors px-8 py-4 text-sm font-black uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creme/40 focus-visible:ring-offset-2 focus-visible:ring-offset-clay"
            >
              <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center">
          <div className="h-px w-28 bg-gradient-to-r from-transparent to-creme/40"></div>
          <span className="mx-5 text-creme/45 text-xs font-black uppercase tracking-[0.3em]">Dr. Sangieta Pande</span>
          <div className="h-px w-28 bg-gradient-to-l from-transparent to-creme/40"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
