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

        <UScrollArea class="rounded-lg">
          <div class="space-y-8">
            <UCard v-for="(section, index) in sections" :key="index" class="western-card">
              <div class="p-6 space-y-6">
                <UBadge class="bg-amber-800 text-amber-50">{{ section.title }}</UBadge>
                <div class="prose prose-amber max-w-none">
                  <h2 class="text-2xl font-bold text-amber-900">{{ section.heading }}</h2>
                  <p class="text-amber-800">{{ section.content }}</p>
                  
                  <template v-if="section.subContent">
                    <h3 class="text-xl font-bold text-amber-900 mt-4">{{ section.subHeading }}</h3>
                    <p class="text-amber-800">{{ section.subContent }}</p>
                    
                    <ul v-if="section.list" class="list-disc pl-6 text-amber-800">
                      <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
                    </ul>
                  </template>
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
const sections = [
  {
    title: 'Historical Origins',
    heading: 'The Birth of a Phrase',
    content: 'The phrase "there\'s a new sheriff in town" emerged during the American frontier era of the 1800s, a period marked by rapid westward expansion and the establishment of law and order in newly formed settlements. During this time, the arrival of a new sheriff was a significant event that often marked a turning point in a town\'s history.',
    subHeading: 'Historical Context',
    subContent: 'In the American Old West, sheriffs were more than just law enforcement officers; they were symbols of civilization and order in often chaotic frontier towns. The position of sheriff was unique to American law enforcement, combining the roles of peace officer, tax collector, and sometimes even town leader.'
  },
  {
    title: 'Cultural Significance',
    heading: 'Impact on Popular Culture',
    content: 'The phrase gained widespread popularity through Western films and television shows of the mid-20th century. These media portrayals often depicted the new sheriff as a catalyst for change, whether cleaning up a corrupt town or bringing justice to lawless territories. This reinforced the phrase\'s association with transformative leadership and decisive action.',
    subHeading: 'Modern Usage',
    subContent: 'Today, the phrase has transcended its literal meaning to become a powerful metaphor used across various contexts:',
    list: [
      'Business: New CEOs or managers signaling organizational change',
      'Politics: Newly elected officials announcing reform initiatives',
      'Sports: New coaches or team leaders marking a shift in strategy',
      'Technology: Disrupting companies changing industry dynamics'
    ]
  }
]
</script>
