import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! Eva will respond within 24 hours.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Isle of Lismore", "Argyll and Bute", "PA34 5UL, Scotland"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["07786 374931"],
      link: "tel:07786374931",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["eva.tombs@gmail.com"],
      link: "mailto:eva.tombs@gmail.com",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Chat with Eva"],
      link: "https://wa.me/447786374931",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-semibold text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about products, services, or anything else, Eva is here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card
              key={info.title}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground mb-4">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {info.details[0]}
                  </a>
                ) : (
                  info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Map Placeholder & Info */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-heading font-semibold text-primary mb-6">
              Visit Us
            </h2>
            <Card className="border-0 shadow-lg mb-6">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-heading font-semibold text-primary mb-2">
                      Isle of Lismore
                    </p>
                    <p className="text-muted-foreground">
                      Argyll and Bute, PA34 5UL
                    </p>
                    <p className="text-muted-foreground mt-2">Scotland</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-secondary/30">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-primary mb-3">
                  Nationwide Services
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  While our workshop is on the beautiful Isle of Lismore, we proudly offer remote consultations and delivery services across the entire UK. Connect with us virtually or receive our products at your doorstep.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
