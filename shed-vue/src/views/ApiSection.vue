<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showModal = ref(false)
const disagreeStyle = ref({})

function openModal() {
  showModal.value = true
  disagreeStyle.value = { position: 'absolute', right: '0', top: '0' }
}

function closeModal() {
  showModal.value = false
}

function acceptCuterness() {
  alert(t('apiSection.agreeMsg'))
  closeModal()
}

function moveButton() {
  disagreeStyle.value = {
    position: 'absolute',
    left: Math.floor(Math.random() * 120) - 40 + 'px',
    top: Math.floor(Math.random() * 80) - 60 + 'px',
    transition: 'all 0.15s ease-out',
  }
}
</script>

<template>
  <section id="api" style="padding: 5rem 0; background: white;">
    <div style="max-width: 56rem; margin: 0 auto; padding: 0 1rem; text-align: center;">
      <h2 style="font-size: 1.875rem; font-weight: 800; color: #4f8bae; margin-bottom: 1rem;">{{ t('apiSection.title') }}</h2>
      <p style="color: #6b7280; max-width: 36rem; margin: 0 auto 2rem; font-size: 14px; line-height: 1.6;">{{ t('apiSection.subtitle') }}</p>
      <button @click="openModal" style="padding: 14px 28px; border-radius: 9999px; background: #ffb5b5; color: white; font-weight: 800; letter-spacing: 0.05em; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; font-size: 14px;">
        🎁 {{ t('apiSection.btn') }}
      </button>
    </div>

    <!-- Modal -->
    <div v-if="showModal" style="position: fixed; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center;">
      <div style="position: fixed; inset: 0; background: rgba(15,23,42,0.4); backdrop-filter: blur(12px);" @click="closeModal"></div>
      <div style="position: relative; border-radius: 36px; background: #fcdcde; border: 8px solid white; padding: 2rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); width: 100%; max-width: 24rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
          <h3 style="font-size: 1.125rem; font-weight: 900; color: #ef4444; display: flex; align-items: center; gap: 8px;">
            ❤️ {{ t('apiSection.modalTitle') }}
          </h3>
          <button @click="closeModal" style="border-radius: 9999px; background: rgba(255,255,255,0.6); color: #6b7280; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 12px; border: none; cursor: pointer;">✕</button>
        </div>
        <div style="width: 96px; height: 96px; margin: 0 auto 1.5rem; border-radius: 9999px; overflow: hidden; border: 4px solid white; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); background: white;">
          <img src="/images/pix-favicon.webp" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="text-align: center; color: #1e293b; font-weight: 800; font-size: 16px; margin-bottom: 2rem; padding: 0 8px; line-height: 1.6;">
          {{ t('apiSection.modalText') }}
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; min-height: 50px; position: relative;">
          <button @click="acceptCuterness" style="padding: 10px 24px; border-radius: 9999px; background: #f87171; color: white; font-weight: 900; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); font-size: 12px; border: none; cursor: pointer; z-index: 10;">{{ t('apiSection.agree') }}</button>
          <button @mouseover="moveButton" @touchstart.prevent="moveButton" :style="disagreeStyle" style="padding: 10px 20px; border-radius: 9999px; background: white; color: #6b7280; font-weight: 700; border: 1px solid #f3f4f6; font-size: 12px; cursor: pointer;">{{ t('apiSection.disagree') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>
