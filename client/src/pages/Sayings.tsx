import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const sayings = [
  {
    quote: "There's a new sheriff in town",
    origin: "American Old West",
    meaning: "A new authority figure has arrived, bringing significant changes",
  },
  {
    quote: "新官上任三把火",
    origin: "Chinese Proverb",
    meaning: "A new official brings three fires - meaning new leaders often start with dramatic changes",
  },
  {
    quote: "Un nuevo rey, una nueva ley",
    origin: "Spanish Proverb",
    meaning: "New king, new law - similar to new sheriff, emphasizing how new leadership brings new rules",
  },
  {
    quote: "Nouveau roi, nouvelle loi",
    origin: "French Saying",
    meaning: "New king, new law - the French equivalent emphasizing change with new leadership",
  },
  {
    quote: "Ein neuer Besen kehrt gut",
    origin: "German Proverb",
    meaning: "A new broom sweeps well - referring to how new leadership often brings fresh energy and change",
  },
];

export default function Sayings() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              Global Wisdom
            </h1>
            <p className="text-lg text-amber-800">
              How different cultures express the arrival of new leadership
            </p>
          </section>

          <ScrollArea className="h-[600px] rounded-lg p-4">
            <div className="space-y-6">
              {sayings.map((saying, index) => (
                <Card key={index} className="western-card">
                  <CardContent className="p-6">
                    <blockquote className="space-y-4">
                      <p className="text-xl text-amber-900 italic">
                        "{saying.quote}"
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm text-amber-700 font-semibold">
                          Origin: {saying.origin}
                        </p>
                        <p className="text-sm text-amber-800">
                          {saying.meaning}
                        </p>
                      </div>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}