<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { useLanguageStore } from './stores/language'
import Navbar from './components/Navbar.vue'
import FooterSection from './views/FooterSection.vue'

const { locale } = useI18n()
const langStore = useLanguageStore()
const router = useRouter()

watch(() => langStore.current, (val) => {
  locale.value = val
  document.documentElement.lang = val === 'zh' ? 'zh-CN' : 'ja'
})

// ===== 页面切换时滚动到顶部 =====
router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

// ===== 背景樱雪粒子画布（内联） =====
const canvasRef = ref(null)
let particles = []
let animFrame = null
let pmouseX = -1000
let pmouseY = -1000
const MAX_PARTICLES = 55
const PARTICLE_COLOR = [255, 181, 181]

function initParticles() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight)
  }
  resize()
  window.addEventListener('resize', resize)

  for (let i = 0; i < MAX_PARTICLES; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3.5 + 1,
      d: Math.random() * MAX_PARTICLES,
      speed: Math.random() * 0.8 + 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    })
  }

  const moveHandler = (e) => { pmouseX = e.pageX; pmouseY = e.pageY }
  const leaveHandler = () => { pmouseX = -1000; pmouseY = -1000 }
  window.addEventListener('mousemove', moveHandler)
  window.addEventListener('mouseleave', leaveHandler)

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = particles[i]
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
      ctx.fillStyle = `rgba(${PARTICLE_COLOR[0]}, ${PARTICLE_COLOR[1]}, ${PARTICLE_COLOR[2]}, ${p.opacity})`
      ctx.fill()

      p.y += p.speed
      p.x += Math.sin(p.d / 10) * 0.4

      const dx = p.x - pmouseX
      const dy = p.y - pmouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        const force = (100 - dist) / 100
        p.x += (dx / dist) * force * 10
        p.y += (dy / dist) * force * 10
      }

      if (p.y > canvas.height) {
        particles[i] = { x: Math.random() * canvas.width, y: -10, r: p.r, d: p.d, speed: p.speed, opacity: p.opacity }
      }
    }
    animFrame = requestAnimationFrame(draw)
  }
  draw()
}

onMounted(initParticles)
onUnmounted(() => { if (animFrame) cancelAnimationFrame(animFrame) })
</script>

<template>
  <div class="relative min-h-screen flex flex-col antialiased bg-dots selection:bg-pink-200 selection:text-pink-900">
    <!-- 背景粒子画布 -->
    <canvas ref="canvasRef" class="fixed inset-0 z-0 pointer-events-none w-full h-full"></canvas>

    <!-- 主要内容区域 -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />

      <!-- 主内容（自动撑满剩余空间） -->
      <main class="flex-1">
        <router-view v-slot="{ Component }">
          <Suspense>
            <component :is="Component" :key="$route.path" />
          </Suspense>
        </router-view>
      </main>

      <!-- 页脚始终在底部 -->
      <FooterSection />
    </div>
  </div>
</template>

<style>
/* 确保内容区域有最小高度 */
main {
  min-height: 50vh;
}
</style>
