import { Card, CardContent } from "@/components/ui/card";
import evaPortrait from "@/assets/eva-portrait.jpg";
import aboutLandscape from "@/assets/about-landscape.jpg";

export default function About() {
  const timeline = [
    { year: "2013", event: "Eva begins her journey on the Isle of Lismore" },
    { year: "2015", event: "Establishes biodynamic garden practices" },
    { year: "2018", event: "Launches first botanical skincare line" },
    { year: "2020", event: "Expands to coastal home collection" },
    { year: "2025", event: "Celebrating 12+ years of sustainable craftsmanship" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutLandscape}
            alt="Misty Scottish island landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold text-primary-foreground mb-4">
            Where Ancient Shores Meet Mindful Making
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <img
              src={evaPortrait}
              alt="Eva Tombs in her Lismore garden"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-heading font-semibold text-primary">
              Meet Eva Tombs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over twelve years, Eva has called the Isle of Lismore home—a place where time moves with the tides and creativity flows from the land itself. Nestled in Argyll and Bute, Scotland, this pristine island has shaped not just a business, but a philosophy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lismore Island Home was born from a deep reverence for nature's wisdom and a commitment to sustainable living. Every product tells a story of the island—from botanicals foraged along misty shores to artisan goods crafted with patience and care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eva's approach blends traditional biodynamic practices with contemporary design, creating pieces that honor heritage while embracing modern mindful living. Each item is thoughtfully sourced, lovingly made, and designed to bring the quiet beauty of island life into your home.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-semibold text-primary text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Sustainability
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make considers the impact on our island home and the wider world. From carbon-neutral shipping to plastic-free packaging, we walk gently on the earth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Heritage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We honor traditional Scottish craftsmanship while embracing innovation. Our methods are rooted in time-tested practices passed down through generations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                  Quality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in creating fewer, better things. Each product is meticulously crafted to be treasured for years, not discarded after seasons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-heading font-semibold text-primary text-center mb-16">
          Our Journey
        </h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={item.year}
              className="flex items-start gap-6 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-heading font-semibold text-accent">
                  {item.year}
                </span>
              </div>
              <div className="flex-grow border-l-2 border-secondary pl-6 pb-8">
                <p className="text-lg text-muted-foreground">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
