import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make your move? Contact us today for a free, no-obligation quote. 
            Our team is standing by to help make your relocation smooth and stress-free.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">773-685-2055</p>
                      <p className="text-sm text-muted-foreground">Call for immediate assistance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">info@brosmovingco.com</p>
                      <p className="text-sm text-muted-foreground">Send us your questions anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Service Area</h4>
                      <p className="text-muted-foreground">Greater Metropolitan Area</p>
                      <p className="text-sm text-muted-foreground">Local and long-distance moves</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Emergency Moving Services</h3>
                <p className="mb-6">
                  Need to move on short notice? We offer emergency moving services 
                  for urgent relocations. Call us now for immediate assistance.
                </p>
                <Button 
                  variant="outline" 
                  className="bg-primary-foreground text-primary hover:bg-secondary"
                  onClick={() => window.location.href = 'tel:773-685-2055'}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;