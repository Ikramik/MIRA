import { Card } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Stanford researcher with 10+ years in reproductive health and biomarker discovery.",
      expertise: "Molecular Biology, Clinical Research",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI/ML expert with experience building healthcare diagnostics platforms at leading biotech companies.",
      expertise: "Machine Learning, Healthcare IT",
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Medical Officer",
      bio: "Board-certified OB-GYN and endometriosis specialist committed to improving women's healthcare access.",
      expertise: "Gynecology, Patient Care",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class experts united by a mission to transform women's health
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-soft transition-all duration-300 border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-accent mx-auto" />
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground font-medium mb-2">
                      Expertise
                    </p>
                    <p className="text-sm text-foreground">
                      {member.expertise}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6 pt-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground">
              Backed by Leading Investors
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Supported by top-tier venture capital firms specializing in healthcare innovation 
              and a network of medical advisors from leading academic institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
