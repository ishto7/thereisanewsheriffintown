<template>
  <nav class="border-b bg-card shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <Icon name="lucide:badge" class="h-8 w-8 text-amber-800" />
          <UBadge variant="outline" class="font-rye text-lg">
            Wild West Sheriff
          </UBadge>
        </div>

        <div class="flex gap-4">
          <NuxtLink 
            v-for="link in links" 
            :key="link.path"
            :to="link.path"
            class="font-rye text-lg"
          >
            <UButton
              :variant="$route.path === link.path ? 'secondary' : 'ghost'"
              :class="[
                $route.path === link.path && 'bg-amber-100 hover:bg-amber-200'
              ]"
            >
              {{ link.label }}
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const links = [
  { path: '/', label: 'Home' },
  { path: '/jokes', label: 'Jokes' },
  { path: '/sayings', label: 'Sayings' },
  { path: '/social', label: 'Social' }
]

const route = useRoute()
</script>
