import { Card, CardContent } from "@/components/ui/card";
import { Truck, Users, Shield, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Truck className="h-12 w-12 text-accent" />,
      title: "Modern Fleet",
      description: "Well-maintained trucks and equipment to handle any size move safely and efficiently."
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Expert Team",
      description: "Professional, trained movers who treat your belongings with the utmost care and respect."
    },
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: "Fully Insured",
      description: "Complete insurance coverage gives you peace of mind during your move."
    },
    {
      icon: <Clock className="h-12 w-12 text-accent" />,
      title: "On-Time Service",
      description: "We value your time and always arrive on schedule, ready to get the job done."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Brothers Moving
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 5 years of experience in the moving industry, Brothers Moving has built a reputation 
            as the most trusted moving company in the area. We specialize in short and long distance moves 
            anywhere in the US, providing comprehensive services that make your relocation stress-free and seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-black">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Why Choose Brothers Moving?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Licensed & Bonded:</strong> Fully licensed and insured for your protection
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Competitive Pricing:</strong> Fair, transparent pricing with no hidden fees
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Local Expertise:</strong> Deep knowledge of the local area and regulations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Customer Satisfaction:</strong> 5-star rated service with hundreds of happy customers
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-black rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold mb-4 text-black">Ready to Move?</h4>
              <p className="mb-6 text-black">
                Get your free, no-obligation quote today and experience the Brothers Moving difference.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold">Call Now:</p>
                <p className="text-xl font-bold text-accent">773-302-4921 Joji</p>
                <p className="text-xl font-bold text-accent">773-685-2955 Mike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;