<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ===== 运行时间计算（内联） =====
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let runtimeTimer = null

function updateRuntime() {
  const diff = Date.now() - new Date('2025-02-02T09:32:00').getTime()
  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000)
}

onMounted(() => { updateRuntime(); runtimeTimer = setInterval(updateRuntime, 1000) })
onUnmounted(() => { if (runtimeTimer) clearInterval(runtimeTimer) })
</script>

<template>
  <section id="contact" style="padding: 5rem 0; background: #faf9f7; border-top: 1px solid rgba(252,220,222,0.2);">
    <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem;">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
        <!-- 版权 -->
        <div style="background: white; padding: 2rem; border-radius: 1.5rem; border: 1px solid #fce7f3; box-shadow: 0 1px 2px rgba(0,0,0,0.05); text-align: center; font-family: monospace;">
          <h4 style="font-weight: 800; color: #1f2937; border-bottom: 1px solid #f8fafc; padding-bottom: 0.75rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
            © {{ t('contact.copyright.title') }}
          </h4>
          <div style="font-size: 12px; color: #6b7280; display: flex; flex-direction: column; gap: 10px;">
            <p>{{ t('contact.copyright.line1') }}</p>
            <p>{{ t('contact.copyright.line2') }}</p>
            <p>{{ t('contact.copyright.line3') }}</p>
          </div>
        </div>

        <!-- 运行统计 -->
        <div style="background: white; padding: 2rem; border-radius: 1.5rem; border: 1px solid #fce7f3; box-shadow: 0 1px 2px rgba(0,0,0,0.05); text-align: center;">
          <h4 style="font-weight: 800; color: #1f2937; border-bottom: 1px solid #f8fafc; padding-bottom: 0.75rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
            📊 {{ t('contact.stats.title') }}
          </h4>
          <div style="font-size: 12px; color: #6b7280; display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 12px;">
              <div style="background: #f8fafc; padding: 6px 12px; border-radius: 12px; border: 1px solid #f1f5f9;">
                <span style="font-size: 12px; color: #9ca3af; display: block;">{{ t('contact.stats.visitors') }}</span>
                <span style="font-size: 14px; font-weight: 900; color: #4f8bae;">12,430</span>
              </div>
              <div style="background: #f8fafc; padding: 6px 12px; border-radius: 12px; border: 1px solid #f1f5f9;">
                <span style="font-size: 12px; color: #9ca3af; display: block;">{{ t('contact.stats.views') }}</span>
                <span style="font-size: 14px; font-weight: 900; color: #ec4899;">45,920</span>
              </div>
            </div>
            <div style="font-size: 10px; color: #9ca3af; letter-spacing: 0.05em;">{{ t('contact.stats.source') }}</div>
            <div style="color: #4f8bae; font-weight: 900; font-size: 14px; letter-spacing: 0.05em;">
              {{ days }}天 {{ hours }}小时 {{ minutes }}分 {{ seconds }}秒
            </div>
            <div style="font-size: 10px; color: #9ca3af;">{{ t('contact.stats.running') }}</div>
          </div>
        </div>

        <!-- 联系 -->
        <div style="background: white; padding: 2rem; border-radius: 1.5rem; border: 1px solid #fce7f3; box-shadow: 0 1px 2px rgba(0,0,0,0.05); text-align: center;">
          <h4 style="font-weight: 800; color: #1f2937; border-bottom: 1px solid #f8fafc; padding-bottom: 0.75rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; gap: 8px;">
            ✉️ {{ t('contact.contactInfo.title') }}
          </h4>
          <div style="font-size: 12px; color: #6b7280; display: flex; flex-direction: column; gap: 1rem;">
            <p>{{ t('contact.contactInfo.line1') }}</p>
            <a href="#ask" style="display: inline-block; padding: 10px 20px; border-radius: 9999px; background: #fce7f3; color: #ec4899; font-weight: 700; text-decoration: none;">
              {{ t('contact.contactInfo.btn') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
