import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="problem">
        <Problem />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <div id="features">
        <Features />
      </div>
      <Impact />
      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
