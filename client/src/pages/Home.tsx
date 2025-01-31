import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              Welcome to the Wild West
            </h1>
            <p className="text-lg text-amber-800">
              Where justice is served with a side of humor
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="western-card">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-amber-800 text-amber-50">Sheriff's Corner</Badge>
                <img
                  src="https://images.unsplash.com/photo-1691162378286-87118c027167"
                  alt="Sheriff badge"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold text-amber-900">
                  The Sheriff's Code
                </h2>
                <p className="text-amber-800">
                  A true sheriff stands for justice, protects the innocent, and always keeps
                  their boots polished. It's not just about wearing the badge - it's about
                  living up to what it represents.
                </p>
              </CardContent>
            </Card>

            <Card className="western-card">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-amber-800 text-amber-50">Town Square</Badge>
                <img
                  src="https://images.unsplash.com/photo-1700627376876-0c6e2b78319d"
                  alt="Wild west town"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-2xl font-bold text-amber-900">
                  Life in the Wild West
                </h2>
                <p className="text-amber-800">
                  From dusty saloons to the daily stagecoach, life in the wild west is
                  never dull. Every day brings new adventures and challenges for our
                  brave sheriffs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
