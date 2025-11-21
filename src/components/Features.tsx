import { Home, DollarSign, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Home,
      title: "At-Home Convenience",
      description: "No more waiting months for specialist appointments. Get initial screening from the comfort of your home with our simple menstrual blood test.",
      color: "primary",
      bgColor: "bg-primary-lighter",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solution",
      description: "Significantly more affordable than diagnostic laparoscopy. Reduces healthcare costs while increasing accessibility for millions of women.",
      color: "accent",
      bgColor: "bg-accent-light",
    },
    {
      icon: Users,
      title: "Patient-Centric Design",
      description: "Built with real women's experiences in mind. Simple, familiar test format reduces anxiety and increases adoption.",
      color: "secondary",
      bgColor: "bg-secondary-light",
    },
    {
      icon: Lightbulb,
      title: "Proprietary Biomarkers",
      description: "Leveraging novel biomarker research to detect endometriosis through non-invasive methods. Currently in research and development phase.",
      color: "primary",
      bgColor: "bg-primary-lighter",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Addressing critical gaps in endometriosis diagnosis through innovative technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="bg-gradient-accent rounded-3xl p-12 text-center shadow-soft animate-fade-in">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Market Opportunity & Vision
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Targeting the 1 in 10 women affected by endometriosis worldwide, 
              with a solution that could reduce diagnosis time from 7+ years to minutes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">190M+</div>
                <div className="text-muted-foreground">Women Affected Globally</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-accent mb-1">7-10 Years</div>
                <div className="text-muted-foreground">Current Average Diagnosis Delay</div>
              </div>
              <div className="bg-background/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-secondary mb-1">$20B+</div>
                <div className="text-muted-foreground">Annual Healthcare Burden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;