<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(true)
const fading = ref(false)

onMounted(() => {
  window.addEventListener('load', () => {
    setTimeout(() => {
      fading.value = true
      setTimeout(() => {
        visible.value = false
      }, 600)
    }, 1600)
  })
})
</script>

<template>
  <Transition name="fade">
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-[#f7f9fa] z-[999999]" :class="{ 'opacity-0 scale-[1.03]': fading }" :style="{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }">
      <div class="relative w-[100px] h-[100px] bg-[#f7f9fa] overflow-hidden rounded-2xl shadow-lg">
        <div class="absolute bg-[#4f8bae]" style="animation: el-one 1.5s linear forwards 0.4s; height: 50px;"></div>
        <div class="absolute bg-[#4f8bae]" style="animation: el-two 1.5s linear forwards 0.6s; width: 50px; left: 50px;"></div>
        <div class="absolute bg-[#4f8bae]" style="animation: el-three 1.5s linear forwards 0.8s; height: 50px; top: 50px;"></div>
        <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 22 33" class="absolute" style="animation: pop-up 0.8s forwards 0.8s; transform: translateY(100%);">
          <path fill="transparent" d="M 0 0 h 22 v 33 h -6 v -1 h 1 v -7 h -1 v -2 h 1 v -2 h 1 v -4 h -1 v -2 h -1 v -1 h 1 v -6 h -1 v -1 h -1 v -1 h -1 v 1 h -1 v 1 h -1 v 6 h -2 v -6 h -1 v -1 h -1 v -1 h -1 v 1 h -1 v 1 h -1 v 6 h 1 v 1 h -1 v 2 h -1 v 4 h 1 v 2 h 1 v 2 h -1 v 7 h 1 v 1 h -6 v -33"></path>
          <path fill="#f5f5f5" fill-rule="evenodd" d="M 7 6 h 1 v 1 h 1 v 1 h 1 v 6 h 2 v -6 h 1 v -1 h 1 v -1 h 1 v 1 h 1 v 1 h 1 v 6 h -1 v 1 h 1 v 2 h 1 v 4 h -1 v 2 h -1 v 2 h 1 v 7 h -1 v 1 h -10 v -1 h -1 v -7 h 1 v -2 h -1 v -2 h -1 v -4 h 1 v -2 h 1 v -1 h -1 v -6 h 1 v -1 h 1 v -1 M 7 17 h 1 v 2 h -1 v -2 M 14 17 h 1 v 2 h -1 v -2 M 10 20 h 2 v 1 h -2 v -1"></path>
        </svg>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes pop-up {
  0% { transform: translateY(100%) scale(1); }
  50% { transform: translateY(-5%) scale(1, 1.15); }
  60% { transform: translateY(5%) scale(1.1, 0.9); }
  100% { transform: translateY(0) scale(1); }
}
@keyframes el-one {
  0% { width: 0; left: 0; }
  5% { width: 100px; left: 0; }
  95% { width: 100px; left: 0; }
  100% { width: 0; left: 100px; }
}
@keyframes el-two {
  0% { height: 0; top: 0; }
  5% { height: 100px; top: 0; }
  95% { height: 100px; top: 0; }
  100% { height: 0; top: 100px; }
}
@keyframes el-three {
  0% { width: 0; right: 0; }
  5% { width: 100px; right: 0; }
  95% { width: 100px; right: 0; }
  100% { width: 0; right: 100px; }
}
</style>
