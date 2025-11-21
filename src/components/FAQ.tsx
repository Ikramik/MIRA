import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What stage of development is MIRA currently in?",
      answer: "We are currently in the ideation and early research phase. Our team is conducting feasibility studies, patent research, and developing our biomarker detection methodology. We're building the foundation for our at-home test kit while exploring partnership opportunities.",
    },
    {
      question: "What makes your approach to endometriosis detection unique?",
      answer: "Unlike current methods that require invasive procedures like laparoscopy, we're developing a non-invasive menstrual blood test using lateral flow technology similar to pregnancy tests. This familiar format reduces user anxiety and increases accessibility while leveraging novel biomarker research for endometriosis detection.",
    },
    {
      question: "What is your timeline for product development?",
      answer: "We're focused on securing seed funding to accelerate our R&D timeline. With proper funding, we aim to complete prototype development within 12-18 months, followed by clinical validation studies. Our staged approach allows for incremental validation and de-risking of the technology.",
    },
    {
      question: "How are you addressing regulatory requirements?",
      answer: "We're conducting thorough patentability research and engaging with regulatory consultants to understand the FDA approval pathway for at-home diagnostic tests. Our team is committed to building a compliant product from the ground up, though we acknowledge this is a long-term process requiring significant resources.",
    },
    {
      question: "What is your business model?",
      answer: "We're exploring multiple revenue streams including direct-to-consumer test kit sales, B2B partnerships with healthcare providers, and potential insurance reimbursement models. The at-home diagnostic market for women's health represents a significant untapped opportunity with strong growth potential.",
    },
    {
      question: "What kind of investment are you seeking?",
      answer: "We're currently seeking seed funding to accelerate our R&D, build our prototype, and conduct initial validation studies. The investment will support patent filings, team expansion, and key milestone achievements. We're open to strategic investors with experience in healthcare diagnostics or women's health.",
    },
    {
      question: "What is the market opportunity for endometriosis diagnostics?",
      answer: "With 190+ million women affected globally and current diagnosis delays of 7-10 years, the market represents a $20B+ annual healthcare burden. The first non-invasive diagnostic solution could capture significant market share while dramatically improving patient outcomes and reducing healthcare costs.",
    },
    {
      question: "How does your team's background support this venture?",
      answer: "Our interdisciplinary team combines computer engineering for platform development, chemistry for biomarker research, public health for market strategy, and business administration for commercialization. This diverse skill set positions us well to tackle the technical, scientific, and business challenges of diagnostic development.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Investor Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Key information about our technology, market, and development plan
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center pt-8 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Ready to learn more about our investment opportunity?
            </p>
            <a 
              href="#contact" 
              className="text-primary font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact us for our pitch deck and detailed business plan →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;