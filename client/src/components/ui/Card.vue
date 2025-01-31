<template>
  <div class="bg-card text-card-foreground shadow-sm rounded-lg border">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// No additional setup needed
</script>

<style scoped>
:deep(.card-header) {
  @apply flex flex-col space-y-1.5 p-6;
}

:deep(.card-content) {
  @apply p-6 pt-0;
}

:deep(.card-footer) {
  @apply flex items-center p-6 pt-0;
}

:deep(.card-title) {
  @apply text-2xl font-semibold leading-none tracking-tight;
}

:deep(.card-description) {
  @apply text-sm text-muted-foreground;
}
</style>
