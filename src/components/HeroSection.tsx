import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-moving.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          PROMOVE
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-6 font-semibold"
            onClick={scrollToContact}
          >
            BOOK NOW
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-12 py-6 font-semibold"
            onClick={() => window.location.href = 'tel:111-222-3333'}
          >
            <Phone className="mr-3 h-5 w-5" />
            CALL NOW
          </Button>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold mb-16">
          A MOVING COMPANY <span className="text-accent">YOU CAN TRUST</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div 
            className="relative bg-primary/80 rounded-lg overflow-hidden h-48 flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors duration-300"
            onClick={() => scrollToContact()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">RESIDENTIAL</h3>
              <h3 className="text-2xl font-bold text-primary-foreground">MOVERS</h3>
            </div>
          </div>
          
          <div 
            className="relative bg-primary/80 rounded-lg overflow-hidden h-48 flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors duration-300"
            onClick={() => scrollToContact()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">COMMERCIAL</h3>
              <h3 className="text-2xl font-bold text-primary-foreground">MOVERS</h3>
            </div>
          </div>
          
          <div 
            className="relative bg-primary/80 rounded-lg overflow-hidden h-48 flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors duration-300"
            onClick={() => scrollToContact()}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">PACKING</h3>
              <h3 className="text-2xl font-bold text-primary-foreground">SERVICES</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;