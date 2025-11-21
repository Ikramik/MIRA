import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Medical innovation" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary-lighter text-primary text-sm font-medium">
              Innovating Women's Health Diagnostics
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              MIRA
            </span>
          </h1>
          
         
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Developing a non-invasive home test kit to provide women faster answers and better healthcare outcomes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact for Investment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-lighter transition-all duration-300 text-lg px-8 py-6"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Early Detection Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Patient Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Non-Invasive Solution</span>
            </div>
          </div>

          {/* Disclaimer for investors */}
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-xs text-muted-foreground/70 italic">
              * MIRA is currently in the ideation and development phase. This product is not yet available for clinical use and has not been evaluated by the FDA.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;