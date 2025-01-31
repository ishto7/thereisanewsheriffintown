<template>
  <div class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all"
        :class="[toast.variant === 'destructive' ? 'destructive border-destructive bg-destructive text-destructive-foreground' : 'border bg-background text-foreground']"
      >
        <div class="flex flex-col space-y-1">
          <div class="text-sm font-semibold">{{ toast.title }}</div>
          <div class="text-sm opacity-90">{{ toast.description }}</div>
        </div>
        <button
          @click="dismissToast(toast.id)"
          class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100"
        >
          <span class="sr-only">Close</span>
          <XIcon class="h-4 w-4" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XIcon } from 'lucide-vue-next'

interface Toast {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'destructive'
}

const toasts = ref<Toast[]>([])

const addToast = (toast: Omit<Toast, 'id'>) => {
  const id = Math.random().toString(36).substring(7)
  toasts.value.unshift({ ...toast, id })
  setTimeout(() => dismissToast(id), 5000)
}

const dismissToast = (id: string) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

defineExpose({
  addToast
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
