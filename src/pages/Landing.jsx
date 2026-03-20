import Hero from "../components/Hero";
import BookSection from "../components/NewRelease";
import ServicesSection from "../components/Service";
import TestimonialSection from "../components/Testimonials";
import EventSection from "../components/EventSection";

const Landing = () => {
  return (
    <>
      <div id="about"></div>
      <Hero />
      <BookSection />
      <ServicesSection />
      <TestimonialSection />
      <EventSection />
    </>
  );
};

export default Landing;
