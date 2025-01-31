<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }

  @font-face {
    font-family: 'RyeFontRegular';
    src: url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rye', cursive;
  }
}

@layer components {
  .western-card {
    @apply bg-amber-50 border-2 border-amber-900/20 shadow-lg rounded-lg overflow-hidden;
  }
  
  .western-button {
    @apply bg-amber-800 hover:bg-amber-900 text-amber-50 font-bold py-2 px-4 rounded-md 
    shadow-md transition-all duration-200 ease-in-out;
  }
}
</style>
