import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2947] mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-[#24324d] max-w-2xl mx-auto">
            Ready to make your move? Contact us today for a free, no-obligation quote. 
            Our team is standing by to help make your relocation smooth and stress-free.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white text-black">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black">Phone</h4>
                      <p className="text-black">773-685-2955 Mike</p>
                      <p className="text-black">773-302-4921 Joji</p>
                      <p className="text-sm text-black">Call for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black">Email</h4>
                      <p className="text-black">info@brosmovingco.com</p>
                      <p className="text-sm text-black">Send us your questions anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black">Service Area</h4>
                      <p className="text-black">Any US State or Location</p>
                      <p className="text-sm text-black">Short & long distance moves</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-black">Business Hours</h4>
                      <p className="text-black">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="text-black">Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Our Moving Services</h3>
                <p className="mb-6">
                  We provide comprehensive moving services for any distance - from local moves 
                  to long distance relocations anywhere in the United States. Professional, 
                  reliable, and affordable.
                </p>
                <div className="space-y-2 text-primary-foreground">
                  <p>• Short Distance Moving</p>
                  <p>• Long Distance Moving</p>
                  <p>• Any US State or Location</p>
                  <p>• Residential & Commercial</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;