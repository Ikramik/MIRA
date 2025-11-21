import { Package, Droplets, Clock, FileCheck } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Simple as a Pregnancy Test
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              MIRA uses familiar, easy-to-understand technology to provide accessible endometriosis screening
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4 animate-fade-in-up">
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">1. Order Your Kit</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Receive a discreet at-home test kit with everything you need for easy sample collection.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">2. Collect Sample</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simple urine sample - just like a pregnancy test. No complex procedures or discomfort.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">3. Wait for Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Results appear in minutes. Clear, easy-to-read lines indicate your risk level.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">4. Understand Your Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Clear guidance on next steps and when to consult with healthcare providers.
                  </p>
                </div>
              </div>
            </div>
            
            
          </div>

          {/* Investor-focused note */}
          <div className="text-center pt-8 animate-fade-in-up">
            <div className="inline-block bg-muted/50 rounded-lg px-6 py-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Investment Opportunity:</strong> Leveraging proven lateral flow technology with novel endometriosis biomarkers 
                for a scalable, manufacturable solution with familiar user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;