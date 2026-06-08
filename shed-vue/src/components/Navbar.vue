<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../stores/language'

const { t, locale } = useI18n()
const langStore = useLanguageStore()
const mobileOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'ask', key: 'nav.ask' },
  { id: 'rec', key: 'nav.rec' },
  { id: 'blog', key: 'nav.blog' },
  { id: 'api', key: 'nav.api' },
  { id: 'contact', key: 'nav.contact' },
]

let observer = null

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)

  // Scroll spy: 检测当前可见的区块
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-85px 0px -60% 0px',
      threshold: 0,
    }
  )

  navLinks.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (observer) observer.disconnect()
})

function toggleLang() {
  langStore.toggle()
  locale.value = langStore.current
}

function scrollTo(id) {
  mobileOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <header class="nav-header" :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-inner">
        <!-- Logo -->
        <a href="#" class="nav-brand" @click.prevent="scrollTo('home')">
          <div class="nav-brand-icon">
            <i class="fa-solid fa-snowflake"></i>
          </div>
          <span class="nav-brand-text">Eysnter<span class="cn">.cn</span></span>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-links">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            class="nav-item"
            :class="{ active: activeSection === link.id }"
            @click.prevent="scrollTo(link.id)"
          >{{ t(link.key) }}</a>
          <a href="https://www.travellings.cn/go.html" target="_blank" class="nav-item nav-travellings">
            <i class="fa-solid fa-train-subway" style="font-size: 12px; margin-right: 4px;"></i>{{ t('nav.travellings') }}
          </a>
        </nav>

        <!-- Lang Switch -->
        <div class="nav-right">
          <button @click="toggleLang" class="lang-btn">
            <i class="fa-solid fa-globe"></i>
            <span v-if="langStore.current === 'zh'">日本語へ</span>
            <span v-else>中国語に</span>
          </button>
        </div>

        <!-- Mobile Toggle -->
        <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :class="{ active: mobileOpen }">
          <span class="toggler-icon"></span>
          <span class="toggler-icon"></span>
          <span class="toggler-icon"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" class="mobile-menu">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          class="mobile-link"
          :class="{ 'mobile-active': activeSection === link.id }"
          @click.prevent="scrollTo(link.id)"
        >{{ t(link.key) }}</a>
        <a href="https://www.travellings.cn/go.html" target="_blank" class="mobile-link mobile-travellings">
          <i class="fa-solid fa-train-subway" style="font-size: 12px; margin-right: 6px;"></i>{{ t('nav.travellings') }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(252, 220, 222, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
}

.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85px;
  position: relative;
}

/* Brand */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 0;
}

.nav-brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, #4f8bae, #92cdd6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(79, 139, 174, 0.3);
  transition: all 0.3s ease;
}

.nav-brand:hover .nav-brand-icon {
  transform: rotate(15deg) scale(1.1);
}

.nav-brand-text {
  font-family: 'XiaolaiSC', 'PingFang SC', 'Microsoft YaHei', monospace;
  font-size: 20px;
  font-weight: 900;
  color: #333;
  letter-spacing: 0.05em;
  transition: color 0.3s;
}

.nav-brand-text .cn {
  color: #ffb5b5;
  font-weight: 700;
}

.nav-brand:hover .nav-brand-text {
  color: #4f8bae;
}

/* Desktop Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'XiaolaiSC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.nav-item {
  font-size: 14px;
  color: #666;
  font-weight: 600;
  position: relative;
  padding: 8px 14px;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 悬停 */
.nav-item:hover {
  color: #4f8bae;
  background: rgba(230, 242, 247, 0.5);
}

/* 下划线动画 */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #4f8bae;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
  border-radius: 99px;
}

.nav-item:hover::after {
  width: 60%;
}

/* 活动指示器：当前区块高亮 */
.nav-item.active {
  color: #4f8bae;
  background: rgba(230, 242, 247, 0.5);
}

.nav-item.active::after {
  width: 60%;
}

/* 开往 */
.nav-travellings {
  color: #f97316 !important;
  font-weight: 700;
}
.nav-travellings:hover {
  background: rgba(249, 115, 22, 0.08) !important;
}

/* Lang Button */
.nav-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid #fecdd3;
  font-size: 12px;
  font-weight: 700;
  color: #8a8fa3;
  background: white;
  cursor: pointer;
  transition: all 0.25s;
}
.lang-btn:hover {
  border-color: #4f8bae;
  color: #4f8bae;
  box-shadow: 0 1px 4px rgba(79, 139, 174, 0.15);
}
.lang-btn:active {
  transform: scale(0.95);
}

.lang-btn i {
  animation: spin 15s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  padding: 8px 10px;
  border: none;
  border-radius: 12px;
  background: none;
  cursor: pointer;
  transition: all 0.2s;
}
.mobile-toggle:hover {
  background: rgba(0, 0, 0, 0.04);
}

.toggler-icon {
  width: 22px;
  height: 2px;
  background-color: #555;
  margin: 4px 0;
  display: block;
  position: relative;
  border-radius: 2px;
  transition: all 0.3s ease-out;
}

.mobile-toggle.active .toggler-icon:nth-of-type(1) {
  transform: rotate(45deg);
  top: 6px;
}
.mobile-toggle.active .toggler-icon:nth-of-type(2) {
  opacity: 0;
}
.mobile-toggle.active .toggler-icon:nth-of-type(3) {
  transform: rotate(-45deg);
  top: -6px;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 8px 16px 20px;
  background: rgba(255, 255, 255, 0.95);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(252, 220, 222, 0.4);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 0 0 16px 16px;
}

.mobile-link {
  display: block;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  text-decoration: none;
  transition: all 0.2s;
}
.mobile-link:hover {
  background: rgba(230, 242, 247, 0.5);
  color: #4f8bae;
}
.mobile-link.mobile-active {
  color: #4f8bae;
  background: rgba(230, 242, 247, 0.5);
}
.mobile-travellings {
  color: #f97316 !important;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 767px) {
  .nav-links, .nav-right {
    display: none;
  }
  .mobile-toggle, .mobile-menu {
    display: flex;
  }
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
