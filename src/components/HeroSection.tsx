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
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          The Most Reliable & Affordable
          <br />
          <span className="text-accent">Moving Company</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Are you looking for moving services? We provide professional, reliable, and affordable moving solutions for residential and commercial clients.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-secondary text-lg px-8 py-6"
            onClick={() => window.location.href = 'tel:111-222-3333'}
          >
            <Phone className="mr-2 h-5 w-5" />
            Call 111-222-3333
          </Button>
          
          <Button 
            size="lg" 
            variant="default"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Request A Quote
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">✓</div>
            <h3 className="text-lg font-semibold mb-2">Professional Movers</h3>
            <p className="text-sm opacity-90">100% Screened & Trained</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">📞</div>
            <h3 className="text-lg font-semibold mb-2">Call Us Today</h3>
            <p className="text-sm opacity-90">Questions? Call Us Today</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">💯</div>
            <h3 className="text-lg font-semibold mb-2">Affordable Rates</h3>
            <p className="text-sm opacity-90">Quality Service Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;