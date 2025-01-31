import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  SiX,  // Updated from SiTwitter to SiX for the new Twitter/X branding
  SiReddit, 
  SiInstagram, 
  SiLinkedin 
} from "react-icons/si";
import { socialPosts, categories } from "@/data/social";

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

          <div className="flex gap-4 flex-wrap justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                className="bg-amber-800 text-amber-50"
              >
                {category}
              </Badge>
            ))}
          </div>

          <ScrollArea className="h-[600px] rounded-lg p-4">
            <div className="space-y-6">
              {socialPosts.map((platform) => (
                <Card key={platform.platform} className="western-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      {platform.icon === "SiX" && <SiX className="h-6 w-6 text-amber-800" />}
                      {platform.icon === "SiReddit" && <SiReddit className="h-6 w-6 text-amber-800" />}
                      {platform.icon === "SiInstagram" && <SiInstagram className="h-6 w-6 text-amber-800" />}
                      {platform.icon === "SiLinkedin" && <SiLinkedin className="h-6 w-6 text-amber-800" />}
                      <Badge className="bg-amber-800 text-amber-50">
                        {platform.platform}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {platform.posts.map((post, index) => (
                        <div key={index} className="border-l-2 border-amber-200 pl-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="font-semibold text-amber-900">{post.author}</p>
                            <Badge variant="outline" className="text-amber-800">
                              {post.category}
                            </Badge>
                          </div>
                          <p className="text-amber-800">{post.content}</p>
                          <div className="flex gap-4 text-sm text-amber-700">
                            <span className="flex items-center gap-1">
                              {platform.platform === "Reddit" ? "⬆️" : "❤️"}
                              {platform.platform === "Reddit" ? post.upvotes : 
                               platform.platform === "LinkedIn" ? post.reactions :
                               post.likes}
                            </span>
                            <span>📅 {post.date}</span>
                            {post.subreddit && <span>📍 {post.subreddit}</span>}
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