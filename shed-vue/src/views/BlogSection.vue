<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const posts = [
  { tag: 'Video', color: '#3b82f6', bg: '#eff6ff', img: '/images/paint-1.jpg', title: '【视频】在 Minecraft BE 中手搓搭建神经网络？', date: '2024.11' },
  { tag: 'Tech', color: '#a855f7', bg: '#f5f3ff', img: '/images/paint-1.jpg', title: '【博客】基于 mclib 开发的便携剪切板管理器', date: '2024.08' },
  { tag: 'Gadget', color: '#f59e0b', bg: '#fffbeb', img: '/images/paint-1.jpg', title: '【博客】想不到吧？在 CASIO 计算器里编程', date: '2023.12' },
]
</script>

<template>
  <section id="blog" style="padding: 5rem 0; background: #f4f8f7; border-top: 1px solid rgba(252,220,222,0.2);">
    <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h2 style="font-size: 1.875rem; font-weight: 800; color: #111827;">
          <span style="color: #4f8bae;">{{ t('blog.title') }}</span>
        </h2>
        <p style="font-size: 13px; color: #9ca3af; margin-top: 8px;">{{ t('blog.subtitle') }}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <div v-for="(post, i) in posts" :key="i" style="background: white; border-radius: 1.5rem; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,0.05); border: 1px solid #f1f5f9; transition: all 0.3s;">
          <div style="aspect-ratio: 16/9; overflow: hidden; background: #f1f5f9;">
            <img :src="post.img" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="padding: 1.5rem;">
            <span style="display: inline-block; padding: 2px 10px; border-radius: 9999px; font-size: 10px; text-transform: uppercase; font-weight: 800;" :style="{ color: post.color, background: post.bg }">{{ post.tag }}</span>
            <h3 style="font-size: 16px; font-weight: 700; color: #1f2937; margin-top: 12px; line-height: 1.4;">
              <a href="https://Eysnter.cn" target="_blank" style="color: inherit; text-decoration: none;">{{ post.title }}</a>
            </h3>
            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #f8fafc; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #9ca3af;">
              <span>{{ post.date }}</span>
              <a href="https://Eysnter.cn" target="_blank" style="color: #4f8bae; font-weight: 700; text-decoration: none;">{{ t('blog.readMore') }} →</a>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 3rem;">
        <div style="display: inline-flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <a href="https://Eysnter.cn" target="_blank" style="padding: 12px 24px; border-radius: 9999px; background: #4f8bae; color: white; font-weight: 700; font-size: 14px; text-decoration: none;">{{ t('blog.btnAll') }}</a>
          <a href="https://Eysnter.cn" target="_blank" style="padding: 12px 24px; border-radius: 9999px; background: white; color: #4b5563; border: 1px solid #e2e8f0; font-weight: 700; font-size: 14px; text-decoration: none;">{{ t('blog.btnShort') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>
