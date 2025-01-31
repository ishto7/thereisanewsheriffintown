<template>
  <div class="relative overflow-hidden" :class="className">
    <div class="h-full w-full rounded-[inherit]">
      <slot></slot>
    </div>
    <div class="absolute right-0 top-0 h-full w-2.5 transition-colors">
      <div class="relative flex-1 rounded-full bg-border"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>
