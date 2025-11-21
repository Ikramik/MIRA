import { TrendingUp, Users, Heart } from "lucide-react";

const Impact = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Mission & Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming women's health through innovation, accessibility, and early detection
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-primary-lighter flex items-center justify-center mx-auto">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-foreground">10x</h3>
              <p className="text-muted-foreground">
                Faster diagnosis with early detection methods
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 rounded-full bg-accent-light flex items-center justify-center mx-auto">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-4xl font-bold text-foreground">190M+</h3>
              <p className="text-muted-foreground">
                Women worldwide who could benefit from accessible testing
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-full bg-secondary-light flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">
                Committed to improving quality of life and health outcomes
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-12 shadow-card animate-fade-in">
            <blockquote className="text-center space-y-6">
              <p className="text-2xl md:text-3xl font-light text-foreground leading-relaxed italic">
                "We envision a world where no woman has to wait years for answers. 
                Where early detection is accessible to all. Where technology serves 
                humanity with compassion and precision."
              </p>
              <footer className="text-muted-foreground">
                — The MIRA Team
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
