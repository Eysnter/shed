<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const openIndex = ref(-1)

const askItems = [
  { name: '林林', question: '你的网站有加「开往」的跳转链接吗？', answer: '有呀有呀！主站导航栏最右边"日本語切换"按钮左边就是「开往」按钮，棉花糖的友链页面"服务"栏目下也有传送门哦。', color: '#3b82f6' },
  { name: '枫羊', question: '假如你有无穷无尽的顶级算力，你会拿去干嘛？', answer: '那我可要大一统了！不过在此之前，我可能会先训练出足够强大的安全熔断限制模型。当然还是最想用它帮自己解决养家和事业，把时间留给爱好！', color: '#ec4899' },
  { name: 'Elaina', question: '把我骗进来要对我负责任哦！一辈子喜欢你 (=・ω・=)', answer: '好嘛好嘛～ 那...以后你要经常来玩、rua 艾斯特，艾斯特才能负责呀（明明是你自己自投罗网跳进来的啦！）', color: '#f59e0b' },
]

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}
</script>

<template>
  <section id="ask" style="padding: 5rem 0; background: #faf9f7; border-top: 1px solid rgba(252,220,222,0.2); border-bottom: 1px solid rgba(252,220,222,0.2);">
    <div style="max-width: 56rem; margin: 0 auto; padding: 0 1rem;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h2 style="font-size: 1.875rem; font-weight: 800; color: #4f8bae;">{{ t('ask.title') }}</h2>
        <p style="font-size: 13px; color: #9ca3af; margin-top: 8px;">{{ t('ask.subtitle') }}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div v-for="(item, i) in askItems" :key="i" style="background: white; border-radius: 1.5rem; border: 1px solid rgba(252,220,222,0.4); box-shadow: 0 1px 2px rgba(0,0,0,0.05); overflow: hidden;">
          <button @click="toggle(i)" style="width: 100%; text-align: left; padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; background: none; border: none; cursor: pointer;">
            <span style="font-weight: 800; color: #1f2937; font-size: 14px; display: flex; align-items: center; gap: 10px;">
              <span style="padding: 2px 10px; border-radius: 9999px; font-size: 12px; font-weight: 700; background: #eff6ff; color: #3b82f6;">{{ item.name }}</span>
              {{ item.question }}
            </span>
            <span style="color: #9ca3af; font-size: 12px; transition: transform 0.3s;" :style="{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)' }">▼</span>
          </button>
          <div v-if="openIndex === i" style="padding: 1.5rem; background: #fbfbfb; border-top: 1px solid #f9fafb; font-size: 13px; color: #4b5563; display: flex; gap: 12px; line-height: 1.6;">
            <div style="color: #ec4899; font-weight: 800; flex-shrink: 0;">Reply:</div>
            <div>{{ item.answer }}</div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2.5rem;">
        <a href="#ask" style="padding: 12px 24px; border-radius: 9999px; background: #4f8bae; color: white; font-size: 14px; font-weight: 700; text-decoration: none;">💌 {{ t('ask.btnSubmit') }}</a>
        <a href="#ask" style="padding: 12px 24px; border-radius: 9999px; background: white; color: #4b5563; border: 1px solid #e2e8f0; font-size: 14px; font-weight: 700; text-decoration: none;">🤝 {{ t('ask.btnFriends') }}</a>
      </div>
    </div>
  </section>
</template>
