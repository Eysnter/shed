<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from './stores/language'
import Navbar from './components/Navbar.vue'
import FooterSection from './views/FooterSection.vue'

const { locale } = useI18n()
const langStore = useLanguageStore()

watch(() => langStore.current, (val) => {
  locale.value = val
  document.documentElement.lang = val === 'zh' ? 'zh-CN' : 'ja'
})
</script>

<template>
  <div class="app-root">
    <Navbar />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <FooterSection />
  </div>
</template>

<style>
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

.app-root {
  min-height: 100vh;
  position: relative;
}

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

/* 页面切换过渡 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
