import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const jokes = [
  {
    setup: "What did the new sheriff say on his first day?",
    punchline: "Time to clean up this one-horse town... as soon as I find the horse!",
  },
  {
    setup: "How do you know when there's a new sheriff in town?",
    punchline: "The old one is still looking for his parking spot!",
  },
  {
    setup: "What's the first thing a new sheriff does in town?",
    punchline: "Changes everything to 'new and improved' - even the wanted posters!",
  },
  {
    setup: "Why did the new sheriff bring a ladder to work?",
    punchline: "Because they told him crime was on the rise!",
  },
];

export default function Jokes() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              New Sheriff Jokes
            </h1>
            <p className="text-lg text-amber-800">
              Because every new beginning needs a little laughter!
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            {jokes.map((joke, index) => (
              <Card key={index} className="western-card">
                <CardContent className="p-6 space-y-4">
                  <Badge className="bg-amber-800 text-amber-50">Joke #{index + 1}</Badge>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-amber-900">{joke.setup}</p>
                    <Separator className="bg-amber-200" />
                    <p className="text-amber-800 italic">{joke.punchline}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}