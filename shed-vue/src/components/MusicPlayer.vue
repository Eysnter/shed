<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  // 延迟加载播放器
  setTimeout(() => {
    visible.value = true
  }, 3000)
})
</script>

<template>
  <Transition name="slide-up">
    <div v-if="visible" class="fixed bottom-6 left-6 z-40">
      <meting-js
        server="tencent"
        type="playlist"
        id="8362688172"
        mini="true"
        autoplay="false"
        theme="#4f8bae"
      ></meting-js>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
