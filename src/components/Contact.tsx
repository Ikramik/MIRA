import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, FileText, Loader2 } from "lucide-react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_yu206fp';
  const EMAILJS_TEMPLATE_ID = 'template_7atbma5';
  const EMAILJS_PUBLIC_KEY = '1_YdZeArUBUOgMgdb';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send the email
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'mirasingteam@gmail.com',
        subject: `New Contact from ${formData.name} - MIRA Website`,
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });

      // Reset form
      setFormData({ name: "", email: "", company: "", message: "" });
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email us directly at mirasingteam@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Connect With Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in investing or partnering? We're excited to share our vision for transforming endometriosis diagnosis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 shadow-card animate-scale-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border-border focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="border-border focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company / Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or fund"
                    className="border-border focus:ring-primary"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    How can we help you? *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your interest in MIRA..."
                    rows={5}
                    className="border-border focus:ring-primary resize-none"
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>
            
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">Email Us</h3>
                    <a 
                      href="mailto:mirasingteam@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      mirasingteam@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">Our Team</h3>
                    <p className="text-muted-foreground">Interdisciplinary Student Innovators</p>
                    <p className="text-sm text-muted-foreground mt-1">Based globally, connected digitally</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-foreground">Documentation</h3>
                    <p className="text-muted-foreground">Pitch deck & business plan available</p>
                    <p className="text-sm text-muted-foreground mt-1">Request via email</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-lighter rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Investment Opportunity
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We're seeking seed funding to accelerate our R&D and bring our non-invasive 
                  endometriosis test to market. Join us in transforming women's healthcare.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Stage:</span>
                    <span className="text-foreground font-medium">Ideation & R&D</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Funding Round:</span>
                    <span className="text-foreground font-medium">Seed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="text-foreground font-medium">Prototype Development</span>
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

export default Contact;