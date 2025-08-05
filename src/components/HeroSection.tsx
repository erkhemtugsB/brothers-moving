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
      className="relative min-h-screen flex items-center bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-left">
            {/* Logo */}
            {/* <div className="mb-8">
              <img src={logo} alt="My Brothers Moving Co." className="h-32 w-auto" />
            </div> */}
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Local Moves,<br />
              <span className="text-primary">Made Easy</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Professional moving services you can trust
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-6 font-semibold"
                onClick={scrollToContact}
              >
                INSTANT QUOTE
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-12 py-6 font-semibold"
                onClick={() => window.location.href = 'tel:773-685-2055'}
              >
                <Phone className="mr-3 h-5 w-5" />
                773-685-2055
              </Button>
            </div>
            
            {/* Contact Info */}
          
          </div>

          {/* Right Content - Image */}
          <div className="relative flex items-center justify-center aspect-[4/3] rounded-lg overflow-hidden bg-background">
            <img
              src={heroImage}
              alt="Moving Company Hero"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;