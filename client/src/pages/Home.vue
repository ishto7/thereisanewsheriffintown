<template>
  <div class="min-h-screen bg-amber-50/50">
    <div class="container mx-auto px-4 py-8">
      <div class="space-y-8">
        <section class="text-center space-y-4">
          <h1 class="text-4xl md:text-6xl text-amber-900 font-bold">
            There's a New Sheriff in Town
          </h1>
          <p class="text-lg text-amber-800">
            Exploring the rich history and cultural impact of this iconic phrase
          </p>
        </section>

        <ScrollArea class="rounded-lg">
          <div class="space-y-8">
            <Card v-for="(section, index) in sections" :key="index" class="western-card">
              <CardContent class="p-6 space-y-6">
                <Badge class="bg-amber-800 text-amber-50">{{ section.badge }}</Badge>
                <div class="prose prose-amber max-w-none">
                  <h2 class="text-2xl font-bold text-amber-900">{{ section.title }}</h2>
                  <p v-for="(paragraph, pIndex) in section.paragraphs" 
                     :key="pIndex" 
                     class="text-amber-800">
                    {{ paragraph }}
                  </p>
                  <ul v-if="section.list" class="list-disc pl-6 text-amber-800">
                    <li v-for="(item, iIndex) in section.list" :key="iIndex">
                      {{ item }}
                    </li>
                  </ul>
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

const sections = [
  {
    badge: 'Historical Origins',
    title: 'The Birth of a Phrase',
    paragraphs: [
      'The phrase "there\'s a new sheriff in town" emerged during the American frontier era of the 1800s, a period marked by rapid westward expansion and the establishment of law and order in newly formed settlements. During this time, the arrival of a new sheriff was a significant event that often marked a turning point in a town\'s history.',
    ],
    subSections: [
      {
        title: 'Historical Context',
        content: 'In the American Old West, sheriffs were more than just law enforcement officers; they were symbols of civilization and order in often chaotic frontier towns. The position of sheriff was unique to American law enforcement, combining the roles of peace officer, tax collector, and sometimes even town leader.'
      }
    ]
  }
]
</script>