<template>
  <div class="min-h-screen bg-amber-50/50">
    <div class="container mx-auto px-4 py-8">
      <div class="space-y-8">
        <ScrollArea class="h-[calc(100vh-6rem)] rounded-lg p-4">
          <div class="space-y-6">
            <Card v-for="platform in socialPosts" :key="platform.platform" class="western-card">
              <CardContent class="p-6 space-y-4">
                <div class="flex items-center gap-2">
                  <component :is="platformIcon[platform.platform]" class="h-6 w-6 text-amber-800" />
                  <Badge class="bg-amber-800 text-amber-50">
                    {{ platform.platform }}
                  </Badge>
                </div>

                <div class="space-y-4">
                  <div
                    v-for="(post, index) in platform.posts"
                    :key="index"
                    class="border-l-2 border-amber-200 pl-4 space-y-2"
                  >
                    <div class="flex justify-between items-center">
                      <p class="font-semibold text-amber-900">{{ post.author }}</p>
                      <Badge variant="outline" class="text-amber-800">
                        {{ post.category }}
                      </Badge>
                    </div>
                    <p class="text-amber-800">{{ post.content }}</p>
                    <div class="flex gap-4 text-sm text-amber-700">
                      <span class="flex items-center gap-1">
                        {{ platform.platform === "Reddit" ? "⬆️" : "❤️" }}
                        {{ getLikes(post, platform.platform) }}
                      </span>
                      <span>📅 {{ post.date }}</span>
                      <span v-if="getSubreddit(post)">
                        📍 {{ getSubreddit(post) }}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/Card.vue'
import { Badge } from '@/components/ui/Badge.vue'
import { ScrollArea } from '@/components/ui/ScrollArea.vue'
import { socialPosts, type SocialPost } from '@/data/social'

const platformIcon = {
  Reddit: '🤖',
  Twitter: '🐦',
  Instagram: '📸',
  LinkedIn: '💼'
}

const getLikes = (post: SocialPost, platform: string) => {
  if (platform === "Reddit" && "upvotes" in post) {
    return post.upvotes
  }
  if (platform === "LinkedIn" && "reactions" in post) {
    return post.reactions
  }
  if ("likes" in post) {
    return post.likes
  }
  return ""
}

const getSubreddit = (post: SocialPost): string | undefined => {
  if ("subreddit" in post) {
    return post.subreddit
  }
  return undefined
}
</script>