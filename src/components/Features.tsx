import { ShieldCheck, Zap, Brain, FlaskConical } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Privacy First",
      description: "Your health data is encrypted and never shared. HIPAA-compliant storage ensures complete confidentiality.",
      color: "primary",
      bgColor: "bg-primary-lighter",
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Get your risk assessment in days, not years. Our streamlined process delivers insights when you need them most.",
      color: "accent",
      bgColor: "bg-accent-light",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze multiple biomarkers to provide accurate risk assessments.",
      color: "secondary",
      bgColor: "bg-secondary-light",
    },
    {
      icon: FlaskConical,
      title: "Clinically Validated",
      description: "Built on peer-reviewed research and validated biomarkers. Our science is rigorous, our approach is compassionate.",
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
              Why Choose MIRA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets compassionate care
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
              Accessible. Accurate. Empowering.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe every woman deserves timely access to the information 
              she needs to make informed decisions about her health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
