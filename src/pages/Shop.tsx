import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productBotanicals from "@/assets/product-botanicals.jpg";
import productCoastal from "@/assets/product-coastal.jpg";
import productGifts from "@/assets/product-gifts.jpg";

export default function Shop() {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Wild Rose Hand Cream",
      category: "botanicals",
      price: 24,
      image: productBotanicals,
      badge: "Carbon Neutral",
    },
    {
      id: 2,
      name: "Sea Kelp Body Oil",
      category: "botanicals",
      price: 32,
      image: productBotanicals,
      badge: "Organic",
    },
    {
      id: 3,
      name: "Natural Linen Throw",
      category: "coastal",
      price: 58,
      image: productCoastal,
      badge: "Handwoven",
    },
    {
      id: 4,
      name: "Ceramic Tea Set",
      category: "coastal",
      price: 45,
      image: productCoastal,
      badge: "Artisan Made",
    },
    {
      id: 5,
      name: "Engraved Stone Coasters",
      category: "gifts",
      price: 28,
      image: productGifts,
      badge: "Unique",
    },
    {
      id: 6,
      name: "Driftwood Candle Holder",
      category: "gifts",
      price: 36,
      image: productGifts,
      badge: "One of a Kind",
    },
    {
      id: 7,
      name: "Lavender Sleep Balm",
      category: "botanicals",
      price: 18,
      image: productBotanicals,
      badge: "Carbon Neutral",
    },
    {
      id: 8,
      name: "Wool Cushion Cover",
      category: "coastal",
      price: 42,
      image: productCoastal,
      badge: "Sustainable",
    },
    {
      id: 9,
      name: "Thistle Bookmark Set",
      category: "gifts",
      price: 15,
      image: productGifts,
      badge: "Eco-Friendly",
    },
  ];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-semibold text-primary mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted treasures from the Isle of Lismore, each piece telling a story of sustainable craftsmanship
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
          >
            All Products
          </Button>
          <Button
            variant={filter === "botanicals" ? "default" : "outline"}
            onClick={() => setFilter("botanicals")}
            className={filter === "botanicals" ? "bg-primary text-primary-foreground" : ""}
          >
            Island Botanicals
          </Button>
          <Button
            variant={filter === "coastal" ? "default" : "outline"}
            onClick={() => setFilter("coastal")}
            className={filter === "coastal" ? "bg-primary text-primary-foreground" : ""}
          >
            Coastal Home
          </Button>
          <Button
            variant={filter === "gifts" ? "default" : "outline"}
            onClick={() => setFilter("gifts")}
            className={filter === "gifts" ? "bg-primary text-primary-foreground" : ""}
          >
            Timeless Gifts
          </Button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-semibold text-accent">
                    £{product.price}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
