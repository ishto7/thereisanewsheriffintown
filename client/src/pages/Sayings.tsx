import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sayings } from "@/data/sayings";

export default function Sayings() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ScrollArea className="h-[calc(100vh-6rem)] rounded-lg p-4">
            <div className="space-y-6">
              {sayings.map((saying, index) => (
                <Card key={index} className="western-card">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-xl text-amber-900 italic">
                          "{saying.quote}"
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-amber-800">
                            {saying.origin}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <p className="text-amber-800">{saying.meaning}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-amber-800">{saying.context}</p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex gap-2 flex-wrap">
                            {saying.variants.map((variant, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-amber-100 text-amber-800"
                              >
                                {variant}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex gap-2 flex-wrap">
                            {saying.regions.map((region, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-amber-50 text-amber-900"
                              >
                                {region}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {saying.usage.split(", ").map((context, i) => (
                            <Badge
                              key={i}
                              className="bg-amber-800/10 text-amber-900"
                            >
                              {context}
                            </Badge>
                          ))}
                        </div>
                      </div>
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