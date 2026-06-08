<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from './stores/language'
import { useParticles } from './composables/useParticles'

import Navbar from './components/Navbar.vue'
import HomeSection from './views/HomeSection.vue'
import AboutSection from './views/AboutSection.vue'
import AskSection from './views/AskSection.vue'
import RecSection from './views/RecSection.vue'
import BlogSection from './views/BlogSection.vue'
import ApiSection from './views/ApiSection.vue'
import ContactSection from './views/ContactSection.vue'
import FooterSection from './views/FooterSection.vue'

const { locale } = useI18n()
const langStore = useLanguageStore()
const canvasRef = ref(null)

watch(() => langStore.current, (val) => {
  locale.value = val
  document.documentElement.lang = val === 'zh' ? 'zh-CN' : 'ja'
})

// 粒子画布
useParticles(canvasRef)

// 滚动触发动画
onMounted(async () => {
  await nextTick()
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.anim').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="app-root">
    <!-- 粒子画布 -->
    <canvas ref="canvasRef" class="particle-canvas"></canvas>

    <Navbar />

    <main class="main-content">
      <HomeSection />
      <AboutSection />
      <AskSection />
      <RecSection />
      <BlogSection />
      <ApiSection />
      <ContactSection />
      <FooterSection />
    </main>
  </div>
</template>

<style>
/* 全局样式 */
@import "tailwindcss";

:root {
  --color-primary: #4f8bae;
  --color-primary-light: #e6f2f7;
  --color-secondary: #ffb5b5;
  --color-accent: #92cdd6;
  --color-pink-light: #fcdcde;
  --font-xiaolai: 'XiaolaiSC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

@font-face {
  font-family: 'XiaolaiSC';
  src: url('/fonts/xiaolaisc-subset.woff2') format('woff2');
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-xiaolai);
  color: #4a4a4a;
  overflow-x: hidden;
}

::selection {
  background: #fbcfe8;
  color: #831843;
}

/* 点状背景 */
.app-root {
  min-height: 100vh;
  position: relative;
}

/* 粒子画布 */
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* 主内容 */
.main-content {
  position: relative;
  z-index: 1;
}

/* Ruby 注音 */
ruby {
  ruby-position: over;
  padding: 0 3px;
  cursor: default;
  transition: color 0.2s;
}
ruby:hover {
  color: var(--color-primary);
}
rt {
  font-size: 0.65em;
  color: var(--color-primary);
  opacity: 0.8;
  font-weight: bold;
  letter-spacing: 0.05em;
}

/* 渐变时间线 */
.timeline-line {
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 6px;
  background: linear-gradient(to bottom, #dbeafe, #fed7aa, #fbcfe8);
  border-radius: 99px;
}
@media (min-width: 768px) {
  .timeline-line {
    left: 50%;
    transform: translateX(-50%);
  }
}

/* 滚动触发动画 */
.anim {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.anim.animate {
  opacity: 1;
  transform: translateY(0);
}

/* 导航下划线 */
.nav-link-item {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-link-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
  border-radius: 99px;
}
.nav-link-item:hover::after {
  width: 60%;
}
</style>
