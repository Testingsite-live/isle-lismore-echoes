import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import productBotanicals from "@/assets/product-botanicals.jpg";
import { toast } from "sonner";

export default function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, fetch based on id
  const product = {
    name: "Wild Rose Hand Cream",
    price: 24,
    image: productBotanicals,
    badge: "Carbon Neutral",
    description:
      "Handcrafted with organic wild roses foraged from the shores of Lismore. This luxurious hand cream deeply nourishes while honoring the island's natural beauty.",
    ingredients: [
      "Organic Wild Rose Extract",
      "Shea Butter",
      "Jojoba Oil",
      "Vitamin E",
      "Essential Oils",
    ],
    story:
      "Each jar begins with a morning walk along Lismore's rugged coastline, where wild roses bloom in abundance. We harvest sustainably, ensuring the plants continue to thrive for generations. The roses are then carefully processed in our island workshop, preserving their natural benefits and delicate fragrance.",
  };

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "Absolutely beautiful product. The scent is divine and my hands have never felt softer!",
    },
    {
      name: "James L.",
      rating: 5,
      comment: "Love supporting sustainable businesses. The quality is exceptional.",
    },
  ];

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/shop"
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* Info */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <Badge className="bg-accent text-accent-foreground mb-4">
                {product.badge}
              </Badge>
              <h1 className="text-4xl font-heading font-semibold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-semibold text-accent mb-6">
                £{product.price}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Add to Cart
            </Button>

            {/* Features */}
            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Free UK-wide tracked delivery
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Plastic-free packaging
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Handcrafted on the Isle of Lismore
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="story" className="mb-16">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="story">Sustainability Story</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.story}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {product.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <span className="font-medium text-foreground">
                        {review.name}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
