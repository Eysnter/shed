<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="rec" style="padding: 5rem 0; background: white; overflow: hidden;">
    <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h2 style="font-size: 1.875rem; font-weight: 800; color: #111827;">
          <span style="color: #4f8bae;">{{ t('rec.title') }}</span>
        </h2>
        <p style="font-size: 13px; color: #9ca3af; margin-top: 8px;">{{ t('rec.subtitle') }}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 64rem; margin: 0 auto 4rem;">
        <div v-for="i in 3" :key="i" style="background: white; padding: 1rem; border-radius: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #fce7f3; cursor: pointer; transition: all 0.3s;">
          <div style="aspect-ratio: 16/9; border-radius: 1rem; overflow: hidden; position: relative;" :style="{ background: ['#fce7f3', '#dbeafe', '#f3e8ff'][i-1] }">
            <img src="/images/paint-1.jpg" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="margin-top: 1rem; text-align: center;">
            <p style="font-size: 14px; font-weight: 700; color: #374151;">Paint Collection #{{ i }}</p>
            <p style="font-size: 11px; color: #9ca3af;">By Eysnter</p>
          </div>
        </div>
      </div>

      <div style="text-align: center;">
        <a href="#rec" style="padding: 14px 32px; border-radius: 9999px; background: #4f8bae; color: white; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
          🎨 {{ t('rec.btnLive2D') }}
        </a>
      </div>
    </div>
  </section>
</template>
