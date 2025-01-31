import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              There's a New Sheriff in Town
            </h1>
            <p className="text-lg text-amber-800">
              Exploring the world's most famous saying about change and new leadership
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="western-card">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-amber-800 text-amber-50">Origins & Meaning</Badge>
                <img
                  src="https://images.unsplash.com/photo-1551887196-72e32bfc7bf3"
                  alt="Old western town"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold text-amber-900">
                  A Tale of Change
                </h2>
                <p className="text-amber-800">
                  Born in the American Old West, "There's a new sheriff in town" became 
                  a powerful declaration of change. When a new sheriff arrived, it meant 
                  more than just a personnel change - it symbolized new rules, fresh 
                  leadership, and often, a shake-up of the established order.
                </p>
              </CardContent>
            </Card>

            <Card className="western-card">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-amber-800 text-amber-50">Modern Usage</Badge>
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
                  alt="Business meeting"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold text-amber-900">
                  From West to Worldwide
                </h2>
                <p className="text-amber-800">
                  Today, this phrase resonates far beyond its Western origins. From 
                  boardrooms to sports fields, it's used whenever new leadership 
                  signals a significant change in direction. It's become a universal 
                  metaphor for transformative leadership and fresh starts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}