import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { jokes } from "@/data/jokes";

export default function Jokes() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              Sheriff Humor Corner
            </h1>
            <p className="text-lg text-amber-800">
              A collection of witty jokes about new leadership and change
            </p>
          </section>

          <ScrollArea className="h-[600px] rounded-lg p-4">
            <div className="grid md:grid-cols-2 gap-6">
              {jokes.map((joke, index) => (
                <Card key={index} className="western-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-2 flex-wrap">
                      <Badge className="bg-amber-800 text-amber-50">
                        Joke #{index + 1}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg font-semibold text-amber-900">{joke.setup}</p>
                      <Separator className="bg-amber-200" />
                      <p className="text-amber-800 italic">{joke.punchline}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {joke.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-amber-100 text-amber-800"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
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