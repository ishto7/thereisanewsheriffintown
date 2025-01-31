import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const jokes = [
  {
    setup: "Why don't sheriffs tell dad jokes?",
    punchline: "Because they're already lawful-awful!",
  },
  {
    setup: "What did the sheriff say to his deputy at the saloon?",
    punchline: "This drink is under a-rest!",
  },
  {
    setup: "How does a sheriff take his coffee?",
    punchline: "Law-ng and black!",
  },
  {
    setup: "What's a sheriff's favorite dessert?",
    punchline: "Just-ice cream!",
  },
];

export default function Jokes() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              Sheriff's Joke Corner
            </h1>
            <p className="text-lg text-amber-800">
              Where the laughs are as wild as the west!
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
