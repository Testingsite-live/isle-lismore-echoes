import { Video, Package, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Video,
      title: "Virtual Styling Sessions",
      description:
        "Connect with Eva for personalized consultations to curate your perfect collection of sustainable island-inspired pieces.",
      price: "£45/hour",
    },
    {
      icon: Package,
      title: "Custom Curation Boxes",
      description:
        "Receive a thoughtfully assembled selection of seasonal products tailored to your preferences and values.",
      price: "From £60",
    },
    {
      icon: Sparkles,
      title: "Bespoke Commissions",
      description:
        "Commission unique, one-of-a-kind pieces crafted specifically for you using traditional island techniques.",
      price: "Quote on request",
    },
  ];

  const testimonials = [
    {
      name: "Emma W.",
      text: "Eva's styling session transformed my understanding of sustainable living. The pieces she recommended are now treasured parts of my daily routine.",
    },
    {
      name: "Michael D.",
      text: "The custom curation box was a beautiful surprise for my wife. Each item was perfectly chosen and the presentation was stunning.",
    },
    {
      name: "Claire R.",
      text: "My commissioned piece arrived and it exceeded all expectations. The craftsmanship is extraordinary and the story behind it makes it truly special.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-semibold text-primary mb-4">
            Bespoke Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personalized offerings designed to bring the quiet luxury of island living into your life
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-xl font-semibold text-accent mb-6">
                  {service.price}
                </p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Remote Services */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-semibold text-primary mb-4">
            Nationwide Remote Services
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            While based on the Isle of Lismore, Eva offers virtual consultations and nationwide delivery across the UK. Experience the magic of island craftsmanship wherever you are.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:07786374931">Call: 07786 374931</a>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-heading font-semibold text-primary text-center mb-16">
          What Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="border-0 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
