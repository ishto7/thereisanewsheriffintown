import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sayings, regions } from "@/data/sayings";

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

          <div className="flex gap-4 flex-wrap justify-center">
            {regions.map((region) => (
              <Badge
                key={region}
                className="bg-amber-800 text-amber-50"
              >
                {region}
              </Badge>
            ))}
          </div>

          <ScrollArea className="h-[600px] rounded-lg p-4">
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
                          <h3 className="font-semibold text-amber-900">Meaning</h3>
                          <p className="text-amber-800">{saying.meaning}</p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-amber-900">Historical Context</h3>
                          <p className="text-amber-800">{saying.context}</p>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-semibold text-amber-900">Common Variants</h3>
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
                          <h3 className="font-semibold text-amber-900">Common Usage</h3>
                          <p className="text-amber-800">{saying.usage}</p>
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