<template>
  <div class="app">
    <h1>Hello Vue!</h1>
    <button @click="count++" class="button">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
}

.button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #42b883;
}

.button:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
}
</style>