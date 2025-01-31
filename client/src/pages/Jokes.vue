<template>
  <div class="min-h-screen bg-amber-50/50">
    <div class="container mx-auto px-4 py-8">
      <div class="space-y-8">
        <section class="text-center space-y-4">
          <h1 class="text-4xl md:text-6xl text-amber-900 font-bold">
            Sheriff Humor Corner
          </h1>
          <p class="text-lg text-amber-800">
            A collection of witty jokes about new leadership and change
          </p>
        </section>

        <ScrollArea class="h-[600px] rounded-lg p-4">
          <div class="grid md:grid-cols-2 gap-6">
            <Card v-for="(joke, index) in jokes" :key="index" class="western-card">
              <CardContent class="p-6 space-y-4">
                <div class="flex gap-2 flex-wrap">
                  <Badge class="bg-amber-800 text-amber-50">
                    Joke #{{ index + 1 }}
                  </Badge>
                </div>
                <div class="space-y-4">
                  <p class="text-lg font-semibold text-amber-900">{{ joke.setup }}</p>
                  <Separator class="bg-amber-200" />
                  <p class="text-amber-800 italic">{{ joke.punchline }}</p>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <Badge
                    v-for="tag in joke.tags"
                    :key="tag"
                    variant="secondary"
                    class="bg-amber-100 text-amber-800"
                  >
                    #{{ tag }}
                  </Badge>
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
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { jokes } from '@/data/jokes'
</script>
