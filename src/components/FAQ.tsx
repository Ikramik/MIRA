import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is the MIRA test?",
      answer: "MIRA is built on clinically validated biomarkers and peer-reviewed research. While we cannot make specific accuracy claims during development, our technology is designed to detect risk indicators associated with endometriosis. Always consult with a healthcare provider for diagnosis and treatment.",
    },
    {
      question: "Is this a replacement for seeing a doctor?",
      answer: "No. MIRA is a screening tool designed to provide early guidance and risk assessment. It is not a diagnostic test and should not replace consultation with a qualified healthcare provider. We recommend sharing your results with your doctor.",
    },
    {
      question: "How long does it take to get results?",
      answer: "Once we receive your sample at our lab, you can expect results within 5-7 business days. You'll receive a secure link to access your results through our HIPAA-compliant online portal.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We take privacy seriously. All data is encrypted, HIPAA-compliant, and never shared with third parties without your explicit consent. You have full control over your health information.",
    },
    {
      question: "Who should use MIRA?",
      answer: "MIRA is designed for women experiencing symptoms that may be related to endometriosis, such as chronic pelvic pain, painful periods, or fertility concerns. It's particularly valuable for those who have been waiting for answers or want to be proactive about their health.",
    },
    {
      question: "When will MIRA be available?",
      answer: "We're currently in development and working towards regulatory approval. Join our waitlist to be notified as soon as we launch and to receive exclusive early access.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about MIRA
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center pt-8 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Have more questions?
            </p>
            <a 
              href="#contact" 
              className="text-primary font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
