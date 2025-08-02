import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Truck, Clock, Star } from "lucide-react";

const LocationSection = () => {
  const serviceAreas = [
    {
      city: "Downtown",
      distance: "0-5 miles",
      description: "Full-service moving for urban apartments and condos"
    },
    {
      city: "Suburbs",
      distance: "5-15 miles", 
      description: "Residential moving for single-family homes"
    },
    {
      city: "Metro Area",
      distance: "15-50 miles",
      description: "Extended metropolitan area coverage"
    },
    {
      city: "Long Distance",
      distance: "50+ miles",
      description: "Interstate and long-distance relocations"
    }
  ];

  const stats = [
    {
      icon: <Truck className="h-8 w-8 text-accent" />,
      number: "500+",
      label: "Moves Completed"
    },
    {
      icon: <Star className="h-8 w-8 text-accent" />,
      number: "4.9",
      label: "Average Rating"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      number: "50+",
      label: "Mile Radius"
    }
  ];

  return (
    <section id="location" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Service Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We proudly serve the entire metropolitan area and surrounding regions. 
            No matter where you're moving from or to, Brothers Moving has the experience 
            and resources to handle your relocation professionally.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="h-6 w-6 text-accent" />
                  {area.city}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {area.distance}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Placeholder and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Coverage Area Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden h-64 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.6775906518837!2d-87.86245912436432!3d42.06979157122136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb80f33ef305d%3A0x90fa64579dadcd14!2s4232%20Commercial%20Way%2C%20Glenview%2C%20IL%2060025!5e1!3m2!1sen!2sus!4v1753756751761!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Coverage Area Map"
                />
              </div>
              <p className="text-muted-foreground">
                Our service area includes the entire metropolitan region and extends 
                to surrounding counties. We also provide long-distance moving services 
                to neighboring states.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Not Sure If We Service Your Area?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6">
                If you're unsure whether we service your specific location, 
                don't hesitate to give us a call. We're constantly expanding 
                our service area and may be able to accommodate special requests.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Quick Service Check:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Call us with your zip codes</li>
                    <li>• Get instant confirmation</li>
                    <li>• Receive a free quote</li>
                    <li>• Schedule your move</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-primary-foreground/20">
                  <p className="text-lg font-semibold">Call Today:</p>
                  <p className="text-2xl font-bold text-accent">773-685-2055</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;