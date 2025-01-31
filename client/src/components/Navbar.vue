<template>
  <nav class="border-b bg-card shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-2">
          <Badge class="h-8 w-8 text-amber-800" />
          <span class="font-rye text-lg border border-amber-800/20 rounded px-2 py-1">
            Wild West Sheriff
          </span>
        </div>

        <div class="flex gap-4">
          <router-link 
            v-for="link in links" 
            :key="link.path"
            :to="link.path"
            custom
            v-slot="{ isActive, navigate }"
          >
            <button
              @click="navigate"
              :class="[
                'font-rye text-lg px-4 py-2 rounded-md',
                isActive ? 'bg-amber-100 hover:bg-amber-200' : 'hover:bg-amber-50'
              ]"
            >
              {{ link.name }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Badge } from 'lucide-vue-next'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Jokes', path: '/jokes' },
  { name: 'Sayings', path: '/sayings' },
  { name: 'Social', path: '/social' }
]
</script>
