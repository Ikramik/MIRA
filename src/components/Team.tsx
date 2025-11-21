import { Card } from "@/components/ui/card";
import { Linkedin, Mail, FileSearch } from "lucide-react";

// Import team photos - you'll need to add these to your src/assets folder
import ikramPhoto from "@/assets/team/Ikram.png";
import nurbanuPhoto from "@/assets/team/Nurbanu.png";
import sarfarazPhoto from "@/assets/team/Sarfi.png";
import ghaniaPhoto from "@/assets/team/Ghania.png";

const Team = () => {
  const team = [
    {
      name: "Ikram Bekkaoui",
      role: "Technical & Research Lead",
      bio: "Computer Engineering student driving technical development and leading patentability research and feasibility analysis for the diagnostic platform.",
      expertise: "Computer Engineering, Patent Research, Feasibility Analysis",
      linkedin: "https://www.linkedin.com/in/ikram-bekkaoui/",
      email: "IkramBekkaoui9@gmail.com",
      photo: ikramPhoto
    },
    {
      name: "Nurbanu Koc",
      role: "Biomarker Research",
      bio: "Chemistry student specializing in analytical methods and biomarker detection for non-invasive diagnostic applications.",
      expertise: "Chemistry, Analytical Methods",
      linkedin: "https://www.linkedin.com/in/nurbanukoc/",
      email: "nkoc.contact@gmail.com",
      photo: nurbanuPhoto
    },
    {
      name: "Sarfaraz Ahmed Siyal",
      role: "Public Health Strategy",
      bio: "Public Health Epidemiology student focused on healthcare accessibility and population health impact of diagnostic innovations.",
      expertise: "Public Health, Epidemiology",
      linkedin: "https://www.linkedin.com/in/sarfaraz-ahmed-siyal-660077250/",
      email: "srfrzsiyal123@mailbox.unideb.hu",
      photo: sarfarazPhoto
    },
    {
      name: "Syeda Ghania Firdous",
      role: "Business Development",
      bio: "Business Administration student specializing in healthcare market strategy, operations, and stakeholder management.",
      expertise: "Business Administration, Management",
      linkedin: "https://www.linkedin.com/in/syeda-ghania-firdous/",
      email: "syedaghaniya11@gmail.com",
      photo: ghaniaPhoto
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interdisciplinary student innovators united to solve endometriosis diagnosis delays
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-soft transition-all duration-300 border-border animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Team member photo */}
                  <div className="w-20 h-20 rounded-full bg-gradient-accent mx-auto overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed text-center">
                    {member.bio}
                  </p>
                  
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground font-medium mb-1 text-center">
                      Expertise
                    </p>
                    <p className="text-sm text-foreground text-center">
                      {member.expertise}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border hover:bg-blue-50 hover:border-blue-200 transition-colors text-xs"
                    >
                      <Linkedin className="w-3 h-3" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-border hover:bg-gray-50 transition-colors text-xs"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6 pt-8 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileSearch className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Comprehensive Approach
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team combines technical innovation with rigorous research validation, 
              ensuring both technological feasibility and intellectual property protection 
              from the earliest stages.
            </p>
            <div className="bg-muted/50 rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-1">Tech & IP</div>
                  <div className="text-xs text-muted-foreground">Platform & Patent Research</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent mb-1">Science</div>
                  <div className="text-xs text-muted-foreground">Biomarker Research</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary mb-1">Health</div>
                  <div className="text-xs text-muted-foreground">Public Health Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary mb-1">Business</div>
                  <div className="text-xs text-muted-foreground">Market Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;