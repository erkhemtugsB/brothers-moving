import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-moving.jpg";
import logo from "@/assets/logo.png";

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
        {/* Logo */}
        <div className="mb-8">
          <img src={logo} alt="My Brothers Moving Co." className="mx-auto h-48 w-auto" />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          MY BROTHERS MOVING CO.
        </h1>
        
        {/* Tagline */}
        <div className="bg-accent text-accent-foreground py-4 px-8 mb-8 inline-block">
          <h2 className="text-2xl md:text-3xl font-bold">
            THE RELOCATING EXPERT IS HERE
          </h2>
        </div>
        
        {/* Phone Number */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Phone className="mr-3 h-6 w-6" />
            <span className="text-lg font-semibold">CALL US NOW:</span>
          </div>
          <a 
            href="tel:111-222-3333" 
            className="text-4xl md:text-5xl font-bold hover:text-accent transition-colors"
          >
            111-222-3333
          </a>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-6 font-semibold"
            onClick={scrollToContact}
          >
            GET FREE QUOTE
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
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
          <div className="flex items-center">
            <span className="font-semibold">📧 info@movingcompany.com</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">📍 Your Location Here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;