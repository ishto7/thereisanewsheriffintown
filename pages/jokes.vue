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

        <UScrollArea class="h-[600px] rounded-lg p-4">
          <div class="grid md:grid-cols-2 gap-6">
            <UCard v-for="(joke, index) in jokes" :key="index" class="western-card">
              <div class="p-6 space-y-4">
                <div class="flex gap-2 flex-wrap">
                  <UBadge class="bg-amber-800 text-amber-50">
                    Joke #{{ index + 1 }}
                  </UBadge>
                </div>
                <div class="space-y-4">
                  <p class="text-lg font-semibold text-amber-900">{{ joke.setup }}</p>
                  <UDivider class="bg-amber-200" />
                  <p class="text-amber-800 italic">{{ joke.punchline }}</p>
                </div>
                <div class="flex gap-2 flex-wrap">
                  <UBadge
                    v-for="tag in joke.tags"
                    :key="tag"
                    variant="secondary"
                    class="bg-amber-100 text-amber-800"
                  >
                    #{{ tag }}
                  </UBadge>
                </div>
              </div>
            </UCard>
          </div>
        </UScrollArea>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const jokes = [
  {
    setup: "What did the new sheriff say on his first day?",
    punchline: "Time to clean up this one-horse town... as soon as I find the horse!",
    category: "workplace",
    tags: ["leadership", "humor"]
  },
  {
    setup: "How do you know when there's a new sheriff in town?",
    punchline: "The old one is still looking for his parking spot!",
    category: "workplace",
    tags: ["change", "humor"]
  }
  // More jokes can be added here
]
</script>
