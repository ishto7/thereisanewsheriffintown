import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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
              Exploring the rich history and cultural impact of this iconic phrase
            </p>
          </section>

          <ScrollArea className="rounded-lg">
            <div className="space-y-8">
              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Historical Origins</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">The Birth of a Phrase</h2>
                    <p className="text-amber-800">
                      The phrase "there's a new sheriff in town" emerged during the American frontier era 
                      of the 1800s, a period marked by rapid westward expansion and the establishment of 
                      law and order in newly formed settlements. During this time, the arrival of a new 
                      sheriff was a significant event that often marked a turning point in a town's history.
                    </p>

                    <h3 className="text-xl font-bold text-amber-900 mt-4">Historical Context</h3>
                    <p className="text-amber-800">
                      In the American Old West, sheriffs were more than just law enforcement officers; 
                      they were symbols of civilization and order in often chaotic frontier towns. The 
                      position of sheriff was unique to American law enforcement, combining the roles 
                      of peace officer, tax collector, and sometimes even town leader.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Cultural Significance</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Impact on Popular Culture</h2>
                    <p className="text-amber-800">
                      The phrase gained widespread popularity through Western films and television shows 
                      of the mid-20th century. These media portrayals often depicted the new sheriff as 
                      a catalyst for change, whether cleaning up a corrupt town or bringing justice to 
                      lawless territories. This reinforced the phrase's association with transformative 
                      leadership and decisive action.
                    </p>

                    <h3 className="text-xl font-bold text-amber-900 mt-4">Modern Usage</h3>
                    <p className="text-amber-800">
                      Today, the phrase has transcended its literal meaning to become a powerful metaphor 
                      used across various contexts:
                    </p>
                    <ul className="list-disc pl-6 text-amber-800">
                      <li>Business: New CEOs or managers signaling organizational change</li>
                      <li>Politics: Newly elected officials announcing reform initiatives</li>
                      <li>Sports: New coaches or team leaders marking a shift in strategy</li>
                      <li>Technology: Disrupting companies changing industry dynamics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Psychological Impact</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Leadership Psychology</h2>
                    <p className="text-amber-800">
                      The psychological power of declaring oneself the "new sheriff" lies in its clear 
                      message of authority and intent for change. However, modern leadership studies 
                      suggest that while establishing authority is important, successful leadership 
                      transitions often require a balance between assertiveness and inclusivity.
                    </p>

                    <h3 className="text-xl font-bold text-amber-900 mt-4">Evolution of Leadership Styles</h3>
                    <p className="text-amber-800">
                      The phrase's meaning has evolved alongside changing perspectives on leadership:
                    </p>
                    <ul className="list-disc pl-6 text-amber-800">
                      <li>Traditional: Emphasized authority and control</li>
                      <li>Modern: Focuses on collaborative leadership and stakeholder engagement</li>
                      <li>Contemporary: Balances decisive action with emotional intelligence</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Global Perspectives</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Cross-Cultural Impact</h2>
                    <p className="text-amber-800">
                      While distinctly American in origin, the concept has found resonance globally, 
                      with many cultures having their own equivalent expressions for new leadership 
                      and change. This universal appeal speaks to the fundamental human experience 
                      of leadership transitions and organizational change.
                    </p>

                    <h3 className="text-xl font-bold text-amber-900 mt-4">Contemporary Relevance</h3>
                    <p className="text-amber-800">
                      In today's rapidly evolving global landscape, the phrase continues to evolve, 
                      representing not just change in leadership but also:
                    </p>
                    <ul className="list-disc pl-6 text-amber-800">
                      <li>Digital Transformation: Tech companies disrupting traditional industries</li>
                      <li>Social Movements: New voices challenging established systems</li>
                      <li>Organizational Change: Modern approaches to company culture</li>
                      <li>Innovation: Breakthrough technologies changing market dynamics</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}