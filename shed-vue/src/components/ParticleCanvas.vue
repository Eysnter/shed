<script setup>
import { ref } from 'vue'
import { useParticles } from '../composables/useParticles'

const canvasRef = ref(null)
useParticles(canvasRef)
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 z-0 pointer-events-none w-full h-full"></canvas>
</template>
