import { Leaf, Package, Recycle, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Carbon Neutral Shipping",
      description:
        "Every order ships carbon neutral at no extra cost. We offset 100% of shipping emissions through verified tree-planting projects.",
    },
    {
      icon: Package,
      title: "Plastic-Free Packaging",
      description:
        "All packaging is biodegradable, recyclable, or reusable. We use recycled paper, natural fibers, and glass containers.",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description:
        "Return empty containers for a discount on your next order. We sterilize and reuse all glass packaging to minimize waste.",
    },
    {
      icon: Trees,
      title: "Biodynamic Practices",
      description:
        "Our garden follows biodynamic principles, working with nature's rhythms to create regenerative growing systems.",
    },
  ];

  const impactStats = [
    {
      label: "Trees Planted (2024)",
      value: 2450,
      progress: 82,
      target: "3,000 target",
    },
    {
      label: "Plastic Eliminated (kg)",
      value: 1280,
      progress: 91,
      target: "1,400 target",
    },
    {
      label: "Carbon Offset (tonnes)",
      value: 45,
      progress: 75,
      target: "60 target",
    },
  ];

  const supplyChain = [
    {
      step: "Foraging & Harvesting",
      description:
        "Botanicals are sustainably harvested by hand from Lismore's shores, ensuring plant populations remain healthy.",
    },
    {
      step: "Island Production",
      description:
        "All products are crafted in our solar-powered workshop using traditional methods and minimal water.",
    },
    {
      step: "Local Partnerships",
      description:
        "We collaborate with Scottish artisans and use locally-sourced materials whenever possible.",
    },
    {
      step: "Responsible Delivery",
      description:
        "Orders ship via carbon-neutral tracked delivery with biodegradable packaging materials.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-semibold text-primary mb-4">
            Our Commitment to the Earth
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sustainability isn't a trend—it's the foundation of everything we create
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-heading font-semibold text-primary text-center mb-16">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <Card
              key={initiative.title}
              className="border-0 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground mb-6">
                  <initiative.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-muted py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-semibold text-primary text-center mb-16">
            Our Impact in 2024
          </h2>
          <div className="space-y-12">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {stat.label}
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-accent">{stat.value.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{stat.target}</p>
                  </div>
                </div>
                <Progress value={stat.progress} className="h-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Transparency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-heading font-semibold text-primary text-center mb-16">
          Supply Chain Transparency
        </h2>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary hidden md:block" />

          <div className="space-y-12">
            {supplyChain.map((item, index) => (
              <div
                key={item.step}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="md:ml-20 border-0 shadow-lg">
                  <CardContent className="p-8">
                    {/* Dot */}
                    <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-accent border-4 border-background hidden md:block" />
                    
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                      {index + 1}. {item.step}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Card className="border-0 shadow-xl bg-gradient-to-r from-secondary/30 to-muted">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-heading font-semibold text-primary mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Every purchase plants a tree and supports regenerative practices on the Isle of Lismore
            </p>
            <p className="text-muted-foreground">
              Questions about our sustainability practices? We're always transparent.
              <br />
              <a
                href="mailto:eva.tombs@gmail.com"
                className="text-accent font-medium hover:underline"
              >
                Contact us anytime
              </a>
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
