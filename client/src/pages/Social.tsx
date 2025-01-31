import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  SiX,  // Updated from SiTwitter to SiX for the new Twitter/X branding
  SiReddit, 
  SiInstagram, 
  SiLinkedin 
} from "react-icons/si";

const socialPosts = [
  {
    platform: "X (formerly Twitter)",
    icon: SiX,
    posts: [
      {
        author: "@TechInsider",
        content: "New CEO at Twitter: 'There's a new sheriff in town' - Changes coming to content moderation policies #NewLeadership",
        likes: "45.2K",
        date: "2024-12-15"
      },
      {
        author: "@SportsCenter",
        content: "'There's a new sheriff in town!' - Coach Johnson after turning around the struggling team with 5 straight wins 🏈",
        likes: "32.1K",
        date: "2024-11-30"
      }
    ]
  },
  {
    platform: "Reddit",
    icon: SiReddit,
    posts: [
      {
        author: "u/CorporateCulture",
        content: "My company just got a new CEO and the first thing they said in the all-hands meeting was 'there's a new sheriff in town.' Should I be worried?",
        subreddit: "r/careerguidance",
        upvotes: "2.4k",
        date: "2024-12-01"
      },
      {
        author: "u/StartupLife",
        content: "How to avoid the 'new sheriff in town' syndrome when taking over as a new manager",
        subreddit: "r/management",
        upvotes: "5.6k",
        date: "2024-11-25"
      }
    ]
  },
  {
    platform: "Instagram",
    icon: SiInstagram,
    posts: [
      {
        author: "@businessmotivation",
        content: "When you walk into Monday meetings like 'there's a new sheriff in town' 💼✨ #MondayMotivation #Leadership",
        likes: "56.3K",
        date: "2024-12-10"
      },
      {
        author: "@startupculture",
        content: "Every great leader knows when to be the new sheriff and when to be a team player 🤠 #LeadershipLessons",
        likes: "28.9K",
        date: "2024-12-05"
      }
    ]
  },
  {
    platform: "LinkedIn",
    icon: SiLinkedin,
    posts: [
      {
        author: "Sarah Johnson, MBA",
        content: "Leadership Lesson #1: Avoid the 'new sheriff in town' mentality. Instead, focus on understanding the existing culture before implementing changes. #LeadershipDevelopment",
        reactions: "3,456",
        date: "2024-12-20"
      },
      {
        author: "Mark Thompson, CEO",
        content: "Just completed my first 100 days as CEO. Rather than being the 'new sheriff in town', I chose to listen, learn, and collaborate. Here's what I discovered...",
        reactions: "8,921",
        date: "2024-12-08"
      }
    ]
  }
];

export default function Social() {
  return (
    <div className="min-h-screen bg-amber-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl text-amber-900 font-bold">
              Social Media Buzz
            </h1>
            <p className="text-lg text-amber-800">
              How "there's a new sheriff in town" echoes across social platforms
            </p>
          </section>

          <ScrollArea className="h-[600px] rounded-lg p-4">
            <div className="space-y-6">
              {socialPosts.map((platform) => (
                <Card key={platform.platform} className="western-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <platform.icon className="h-6 w-6 text-amber-800" />
                      <Badge className="bg-amber-800 text-amber-50">
                        {platform.platform}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {platform.posts.map((post, index) => (
                        <div key={index} className="border-l-2 border-amber-200 pl-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="font-semibold text-amber-900">{post.author}</p>
                            <span className="text-sm text-amber-700">{post.date}</span>
                          </div>
                          <p className="text-amber-800">{post.content}</p>
                          <div className="flex gap-2 text-sm text-amber-700">
                            {'likes' in post && <span>❤️ {post.likes}</span>}
                            {'upvotes' in post && <span>⬆️ {post.upvotes}</span>}
                            {'reactions' in post && <span>👍 {post.reactions}</span>}
                            {'subreddit' in post && <span>📍 {post.subreddit}</span>}
                          </div>
                        </div>
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
