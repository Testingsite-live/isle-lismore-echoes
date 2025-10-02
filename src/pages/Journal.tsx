import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aboutLandscape from "@/assets/about-landscape.jpg";

export default function Journal() {
  const posts = [
    {
      id: 1,
      title: "Foraging Secrets from Lismore's Shores",
      excerpt:
        "Discover the ancient practice of coastal foraging and how we sustainably harvest botanicals for our skincare line.",
      image: aboutLandscape,
      category: "Sustainability",
      readTime: "5 min read",
      date: "March 15, 2025",
    },
    {
      id: 2,
      title: "Eco-Luxury in Everyday Rituals",
      excerpt:
        "Transform your daily routines into mindful moments of self-care with our island-inspired approach to sustainable living.",
      image: aboutLandscape,
      category: "Lifestyle",
      readTime: "4 min read",
      date: "March 8, 2025",
    },
    {
      id: 3,
      title: "The Art of Biodynamic Gardening",
      excerpt:
        "Learn about our 12-year journey with biodynamic practices and how they shape every product we create.",
      image: aboutLandscape,
      category: "Behind the Scenes",
      readTime: "6 min read",
      date: "February 28, 2025",
    },
    {
      id: 4,
      title: "Winter on the Isle: A Season of Reflection",
      excerpt:
        "Embrace the quiet beauty of island winters and discover how seasonal changes inspire our creative process.",
      image: aboutLandscape,
      category: "Seasonal",
      readTime: "5 min read",
      date: "February 14, 2025",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-semibold text-primary mb-4">
            Island Journal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories from the shore, seasonal wisdom, and sustainable living inspiration
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to={`/journal/${posts[0].id}`} className="group">
          <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="bg-accent text-accent-foreground w-fit mb-4">
                  Featured
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold text-primary mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {posts[0].readTime}
                  </span>
                  <span>•</span>
                  <span>{posts[0].date}</span>
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      </section>

      {/* Recent Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-3xl font-heading font-semibold text-primary mb-12">
          Recent Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Link
              key={post.id}
              to={`/journal/${post.id}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-secondary text-secondary-foreground mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
