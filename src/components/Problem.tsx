import { Clock, AlertCircle, HeartPulse } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The Hidden Health Crisis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Millions of women suffer in silence, waiting years for answers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in">
              <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">7-10 Years</h3>
              <p className="text-muted-foreground leading-relaxed">
                Average time to diagnosis. Women endure years of uncertainty, pain, and unanswered questions.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-6">
                <AlertCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">1 in 10 Women</h3>
              <p className="text-muted-foreground leading-relaxed">
                Affected by endometriosis globally. That's approximately 190 million women worldwide.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-xl bg-secondary-light flex items-center justify-center mb-6">
                <HeartPulse className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Limited Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                No accessible, non-invasive testing exists. The current standard requires invasive surgery.
              </p>
            </div>
          </div>
          
          <div className="bg-primary-lighter border-l-4 border-primary p-8 rounded-xl">
            <p className="text-lg text-foreground italic leading-relaxed">
              "I spent nearly a decade being told my pain was normal. By the time I got diagnosed, 
              the disease had progressed significantly. Early detection could have changed everything."
            </p>
            <p className="text-sm text-muted-foreground mt-4">— Sarah, Endometriosis Patient</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
