<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 300
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition name="fade-up">
    <button
      v-if="visible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-gray-500 hover:text-[#4f8bae] hover:shadow-lg transition-all flex items-center justify-center shadow-md hover:-translate-y-0.5"
    >
      <i class="fa-solid fa-chevron-up text-lg"></i>
    </button>
  </Transition>
</template>

<style scoped>
.fade-up-enter-active, .fade-up-leave-active {
  transition: all 0.3s ease;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
