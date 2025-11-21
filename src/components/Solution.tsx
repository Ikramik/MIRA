import { Home, Microscope, Smartphone, FileCheck } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              A Better Way Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MIRA brings clinical-grade testing to the comfort of your home, 
              empowering you to take control of your health journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 animate-fade-in-up">
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">1. Order Your Kit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Receive a discreet, easy-to-use test kit delivered to your door with clear instructions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">2. Collect Your Sample</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simple, painless sample collection in the privacy of your home. Takes less than 5 minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">3. Get Your Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access your results through our secure, HIPAA-compliant dashboard within days.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">4. Take Action</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Armed with insights, work with your healthcare provider to develop a personalized care plan.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-gradient-accent rounded-3xl p-12 shadow-soft">
                <div className="bg-card rounded-2xl p-8 space-y-6">
                  <div className="aspect-square rounded-xl bg-primary-lighter flex items-center justify-center">
                    <Microscope className="w-24 h-24 text-primary opacity-50" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Sample Analysis</p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Biomarker Detection</span>
                      <span className="text-primary font-medium">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AI Analysis</span>
                      <span className="text-secondary font-medium">Processing</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Results Ready</span>
                      <span className="text-accent font-medium">Soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
