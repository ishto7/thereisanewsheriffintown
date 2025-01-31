<template>
  <div class="min-h-screen bg-amber-50/50">
    <div class="container mx-auto px-4 py-8">
      <div class="space-y-8">
        <ScrollArea class="h-[calc(100vh-6rem)] rounded-lg p-4">
          <div class="space-y-6">
            <Card v-for="(saying, index) in sayings" :key="index" class="western-card">
              <CardContent class="p-6">
                <div class="space-y-6">
                  <div class="space-y-2">
                    <p class="text-xl text-amber-900 italic">
                      "{{ saying.quote }}"
                    </p>
                    <div class="flex gap-2">
                      <Badge variant="outline" class="text-amber-800">
                        {{ saying.origin }}
                      </Badge>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <div class="space-y-2">
                      <p class="text-amber-800">{{ saying.meaning }}</p>
                    </div>

                    <div class="space-y-2">
                      <p class="text-amber-800">{{ saying.context }}</p>
                    </div>

                    <div class="space-y-2">
                      <div class="flex gap-2 flex-wrap">
                        <Badge
                          v-for="(variant, i) in saying.variants"
                          :key="i"
                          variant="secondary"
                          class="bg-amber-100 text-amber-800"
                        >
                          {{ variant }}
                        </Badge>
                      </div>
                    </div>

                    <div class="space-y-2">
                      <div class="flex gap-2 flex-wrap">
                        <Badge
                          v-for="(region, i) in saying.regions"
                          :key="i"
                          variant="outline"
                          class="bg-amber-50 text-amber-900"
                        >
                          {{ region }}
                        </Badge>
                      </div>
                    </div>

                    <div class="flex gap-2 flex-wrap">
                      <Badge
                        v-for="(context, i) in saying.usage.split(', ')"
                        :key="i"
                        class="bg-amber-800/10 text-amber-900"
                      >
                        {{ context }}
                      </Badge>
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
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { sayings } from '@/data/sayings'
</script>
