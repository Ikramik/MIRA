import { Mail, Linkedin, Users } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              MIRA
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Revolutionizing endometriosis diagnosis through accessible at-home testing technology.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com/company/mira-endo" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:mirasingteam@gmail.com"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('problem')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  The Problem
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solution')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Solution
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Investor FAQ
                </button>
              </li>
              <li>
                <a 
                  href="mailto:mirasingteam@gmail.com?subject=Pitch Deck Request&body=Hello MIRA team, I would like to request your pitch deck."
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Pitch Deck
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mirasingteam@gmail.com?subject=Business Plan Request&body=Hello MIRA team, I would like to request your detailed business plan."
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Business Plan
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:mirasingteam@gmail.com"
                  className="text-background/80 hover:text-background transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  mirasingteam@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Users className="w-4 h-4" />
                <span>Early Stage Startup</span>
              </li>
              <li className="text-background/60 text-xs mt-4">
                Currently in R&D phase<br />
                Seeking seed funding
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2025 MIRA Endometriosis Detection. All rights reserved.
          </p>
          
          <div className="text-xs text-background/60 text-center md:text-right">
            <p>Developing non-invasive diagnostic technology for women's health</p>
            <p className="mt-1">Not for clinical use. Currently in development phase.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;