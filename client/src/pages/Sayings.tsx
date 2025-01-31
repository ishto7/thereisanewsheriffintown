import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const sayings = [
  {
    quote: "Justice rides a horse called Patience.",
    author: "Old West Proverb",
  },
  {
    quote: "A badge don't make a sheriff, but a sheriff always earns the badge.",
    author: "Wild Bill Hickok",
  },
  {
    quote: "The law may be slow, but justice is sure.",
    author: "Sheriff's Wisdom",
  },
  {
    quote: "A good sheriff listens more than they speak.",
    author: "Western Philosophy",
  },
  {
    quote: "True peace comes from strength, not force.",
    author: "Sheriff's Code",
  },
];

export default function Sayings() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              Sheriff's Wisdom
            </h1>
            <p className="text-lg text-amber-800">
              Words that echo through the canyons of time
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
                      <footer className="text-sm text-amber-700 font-semibold">
                        — {saying.author}
                      </footer>
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
