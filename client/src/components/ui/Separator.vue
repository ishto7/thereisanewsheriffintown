<template>
  <div 
    class="shrink-0 bg-border"
    :class="[
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
    ]"
  >
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  orientation?: 'horizontal' | 'vertical'
}>(), {
  orientation: 'horizontal'
})
</script>
