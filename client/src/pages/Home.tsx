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
              Sheriff's Tales & Wisdom
            </h1>
            <p className="text-lg text-amber-800">
              Exploring the rich legacy of sheriffs through stories, sayings, and cultural impact
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

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Cinema & Television</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Hollywood's Influence</h2>
                    <p className="text-amber-800">
                      Western films and TV shows of the 1940s-1960s popularized the phrase, featuring iconic 
                      scenes of new sheriffs confronting outlaws and establishing order. These portrayals 
                      helped cement the phrase in popular culture and expand its metaphorical meaning beyond 
                      law enforcement.
                    </p>
                    <p className="text-amber-800">
                      Classic films like "High Noon" (1952) and TV series like "Gunsmoke" (1955-1975) 
                      portrayed the sheriff as a symbol of moral authority and societal change, influencing 
                      how the phrase would be used in modern contexts.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Business World</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Corporate Leadership</h2>
                    <p className="text-amber-800">
                      In modern business, the phrase often signals a shift in corporate culture or management 
                      style. Studies show that 65% of new CEOs make significant organizational changes within 
                      their first year, embodying the "new sheriff" approach.
                    </p>
                    <p className="text-amber-800">
                      However, contemporary leadership theory suggests that while decisive action is important, 
                      successful modern leaders often balance authority with collaboration and emotional 
                      intelligence.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Digital Age</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Tech Disruption</h2>
                    <p className="text-amber-800">
                      In the technology sector, being the "new sheriff" often refers to disruptive companies 
                      or innovations that reshape entire industries. From Apple's iPhone revolutionizing mobile 
                      computing to Tesla's impact on the automotive industry, tech companies frequently embody 
                      this transformative spirit.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Sports Culture</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Athletic Leadership</h2>
                    <p className="text-amber-800">
                      In sports, new coaches and managers often embrace the "new sheriff" persona to signal 
                      a fresh start for struggling teams. The phrase has become particularly prevalent in 
                      professional sports, where coaching changes are seen as catalysts for organizational 
                      transformation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Educational Reform</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Academic Leadership</h2>
                    <p className="text-amber-800">
                      In education, the phrase often appears during major institutional reforms or leadership 
                      transitions. Modern educational leaders must balance traditional authority with inclusive 
                      practices that promote collaboration and innovation in learning environments.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Political Discourse</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Government & Policy</h2>
                    <p className="text-amber-800">
                      In political contexts, the phrase often accompanies major policy shifts or administrative 
                      changes. Newly elected officials frequently invoke this metaphor to signal their intent 
                      to reform existing systems or introduce new governance approaches.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Social Movements</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Grassroots Change</h2>
                    <p className="text-amber-800">
                      Social movements and activists have adopted the phrase to represent systemic change 
                      and the emergence of new voices in public discourse. It symbolizes the power of 
                      collective action to challenge established norms and institutions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Environmental Leadership</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Green Innovation</h2>
                    <p className="text-amber-800">
                      In environmental contexts, the phrase has been adapted to describe pioneering 
                      companies and leaders who introduce sustainable practices and green technologies, 
                      effectively becoming the "new sheriffs" of environmental responsibility.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="western-card">
                <CardContent className="p-6 space-y-6">
                  <Badge className="bg-amber-800 text-amber-50">Future Perspectives</Badge>
                  <div className="prose prose-amber max-w-none">
                    <h2 className="text-2xl font-bold text-amber-900">Evolution of Leadership</h2>
                    <p className="text-amber-800">
                      As society continues to evolve, the meaning of being the "new sheriff" is also 
                      transforming. Modern interpretations emphasize inclusive leadership, collaborative 
                      decision-making, and the ability to guide organizations through complex challenges 
                      while maintaining ethical principles.
                    </p>
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