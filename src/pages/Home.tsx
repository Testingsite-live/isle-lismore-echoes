import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-lismore.jpg";
import productBotanicals from "@/assets/product-botanicals.jpg";
import productCoastal from "@/assets/product-coastal.jpg";
import productGifts from "@/assets/product-gifts.jpg";

export default function Home() {
  const categories = [
    {
      title: "Island Botanicals",
      description: "Organic skincare from garden herbs",
      image: productBotanicals,
      link: "/shop#botanicals",
    },
    {
      title: "Coastal Home",
      description: "Linen throws & ceramic wares",
      image: productCoastal,
      link: "/shop#coastal",
    },
    {
      title: "Timeless Gifts",
      description: "Engraved stone keepsakes",
      image: productGifts,
      link: "/shop#gifts",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Carbon neutral shipping with every order",
    },
    {
      icon: Package,
      title: "Handcrafted",
      description: "Artisan-made on the Isle of Lismore",
    },
    {
      icon: Heart,
      title: "Ethical",
      description: "Biodynamic practices for 12+ years",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Isle of Lismore coastal landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-semibold text-primary-foreground mb-6 text-balance">
            Echoes of the Isle
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
            Sustainably Sourced, Timelessly Yours
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
            <Link to="/shop">
              Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-heading font-semibold text-primary mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted treasures inspired by the quiet rhythm of island life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to={category.link}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 bg-card">
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="mt-4 flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                    Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-secondary/20 to-muted rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl font-heading font-semibold text-primary mb-6">
            Reconnect with Nature's Quiet Rhythm
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community and receive stories from the isle, seasonal offerings, and sustainable living inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
