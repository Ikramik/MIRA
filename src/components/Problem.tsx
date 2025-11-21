import { Clock, AlertCircle, HeartPulse } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* SECTION HEADER */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Women Wait Nearly a Decade for Answers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Endometriosis affects millions, yet diagnosis remains slow, invasive, and often overlooked.
            </p>
          </div>

          {/* STAT CARDS */}
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {/* Diagnostic Delay */}
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in">
              <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">7–10 Years</h3>
              <p className="text-muted-foreground leading-relaxed">
                Average diagnostic delay worldwide. Women often spend years cycling between doctors before receiving a diagnosis.
              </p>
            </div>

            {/* Prevalence */}
            <div
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-6">
                <AlertCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">1 in 10 Women</h3>
              <p className="text-muted-foreground leading-relaxed">
                Approximately 190 million women and girls globally live with endometriosis, according to the WHO.
              </p>
            </div>

            {/* Invasive Diagnosis */}
            <div
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary-light flex items-center justify-center mb-6">
                <HeartPulse className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Current Diagnosis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Laparoscopy an invasive surgical procedure remains the gold standard for confirming endometriosis.
              </p>
            </div>
          </div>

          {/* REAL QUOTE */}
          <div className="bg-primary-lighter border-l-4 border-primary p-8 rounded-xl">
            <p className="text-lg text-foreground italic leading-relaxed">
              "I spent over a decade in excruciating pain without knowing what was wrong. 
              Endometriosis was stealing my life from me, and I had no idea."
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              — Padma Lakshmi, Co-founder of the Endometriosis Foundation of America
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;
