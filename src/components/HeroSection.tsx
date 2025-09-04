import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-moving.jpg";
import heroBackground from "@/assets/hero-background.jpg";
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
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-left">
            {/* Logo */}
            {/* <div className="mb-8">
              <img src={logo} alt="My Brothers Moving Co." className="h-32 w-auto" />
            </div> */}
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Local and Long Distance Moves,<br />
              <span className="text-white">Made Easy</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Professional moving services you can trust
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              
              <Button 
                size="lg" 
                className="bg-green-700 text-white hover:bg-green-800 text-lg px-12 py-6 font-semibold"
                onClick={() => window.location.href = 'tel:773-685-2955'}
              >
                <Phone className="mr-3 h-5 w-5" />
                773-685-2955
              </Button>

              <Button 
                size="lg" 
                className="bg-green-700 text-white hover:bg-green-800 text-lg px-12 py-6 font-semibold"
                onClick={() => window.location.href = 'tel:7773-302-4921'}
              >
                <Phone className="mr-3 h-5 w-5" />
                773-302-4921
              </Button>
            </div>
            
            {/* Contact Info */}
          
          </div>

          {/* Right Content - Image */}
          <div className="relative flex items-center justify-center overflow-hidden ">
            <img
              src={heroImage}
              alt="Moving Company Hero"
              className="h-full w-full object-scale-down max-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;