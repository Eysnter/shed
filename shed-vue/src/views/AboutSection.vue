<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isBoosted = ref(false)
const currentPct = ref([85, 80, 75])
const pctColors = ['#4f8bae', '#ffb5b5', '#34d399']
const pctGradients = [
  'linear-gradient(to right, #4f8bae, #92cdd6)',
  'linear-gradient(to right, #92cdd6, #f9a8d4)',
  'linear-gradient(to right, #6ee7b7, #2dd4bf)',
]

function boostCodingMachine() {
  if (isBoosted.value) return
  isBoosted.value = true
  currentPct.value = [100, 100, 100]
  alert(t('about.skills.boostMsg'))
  setTimeout(() => {
    currentPct.value = [85, 80, 75]
    isBoosted.value = false
  }, 3000)
}

const timelineItems = [
  { date: '2016.08.13', title: '运行的第一段代码「求天数.c」', desc: 'C 语言启蒙之作', icon: '💻', color: '#4f8bae' },
  { date: '2016.12.11', title: '写的第一段 JavaScript 代码', desc: '第一次参加编程比赛', icon: '🎮', color: '#ec4899' },
  { date: '2017.05.27', title: '首次接触 Windows API', desc: '从此开始了造轮子的不归路', icon: '🐛', color: '#a855f7' },
  { date: '2024.06.01', title: '蓝桥杯全国一等奖 & 组建ICPC校队 🏆', desc: '拿奖学金啦！', icon: '🏆', color: '#f59e0b' },
  { date: '2025.05.10', title: 'ICPC 西安铜牌 🥉', desc: '与队友合力捧回铜牌！', icon: '🥇', color: '#10b981' },
  { date: '2025.07-08', title: 'COSCON IT 暑期实习', desc: '标书查重系统开发', icon: '💼', color: '#06b6d4' },
]

const azusaDetails = [
  { emoji: '🌸', label: '容貌：', text: '透明感淡紫银长发 + 澄澈双眸，傲娇又无辜的绝佳神情。' },
  { emoji: '🎀', label: '细节：', text: '左侧别着紫罗兰金色发卡，脑后系着黑色大蝴蝶结。' },
  { emoji: '👗', label: '穿搭：', text: '经典圣三一黑白水手服连衣裙，缀有十字架与百合徽章。' },
  { emoji: '🎒', label: '反差：', text: '身后是点缀着小花的纯白羽翼，怀里紧抱着佩罗罗玩偶，反差萌拉满！' },
]
</script>

<template>
  <section id="about" style="padding: 5rem 0; background: rgba(255,255,255,0.5); backdrop-filter: blur(12px);">
    <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem;">

      <!-- 标题 -->
      <div style="text-align: center; max-width: 48rem; margin: 0 auto 4rem;">
        <h2 style="font-size: 1.875rem; font-weight: 800; color: #111827;">
          <span style="color: #4f8bae;">🌺 {{ t('about.title') }}</span>
        </h2>
        <div style="padding: 1.25rem; border-radius: 1.5rem; background: rgba(252,220,222,0.5); border: 1px solid rgba(252,220,222,0.6); font-style: italic; color: #4b5563; font-size: 0.875rem; margin-top: 1rem;">
          {{ t('about.quote') }}
        </div>
      </div>

      <!-- 左右布局 -->
      <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start;">
        <!-- 左侧 -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <!-- 名片 -->
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.5rem; font-weight: 900; color: #111827;">
              <ruby><rb>{{ t('about.name') }}</rb><rt>{{ t('about.nameReading') }}</rt></ruby>
            </span>
            <span style="padding: 4px 10px; font-size: 12px; border-radius: 9999px; background: #e6f2f7; color: #4f8bae; font-weight: 700;">{{ t('about.handle') }}</span>
          </div>

          <!-- 简介文案 -->
          <div style="color: #4b5563; font-size: 0.875rem; line-height: 1.625;">
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <p style="display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.125rem; flex-shrink: 0;">👋</span>
                <span v-html="t('about.intro.greeting')"></span>
              </p>
              <p style="display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.125rem; flex-shrink: 0;">📍</span>
                <span v-html="t('about.intro.location')"></span>
              </p>
              <p style="display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.125rem; flex-shrink: 0;">🎮</span>
                <span>{{ t('about.intro.hobby') }}</span>
              </p>
              <p style="display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.125rem; flex-shrink: 0;">💰</span>
                <span>{{ t('about.intro.dream') }}</span>
              </p>
              <p style="display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.125rem; flex-shrink: 0;">💻</span>
                <span>{{ t('about.intro.attribute') }}</span>
              </p>
            </div>
          </div>

          <!-- 参数网格 -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; padding-top: 1rem;">
            <div style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
              <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">🎂 {{ t('about.params.birthday') }}</p>
              <p style="font-size: 14px; font-weight: 900; color: #1f2937; margin-top: 4px;">{{ t('about.params.birthdayVal') }}</p>
            </div>
            <div style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
              <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">🔒 {{ t('about.params.age') }}</p>
              <p style="font-size: 14px; font-weight: 900; color: #1f2937; margin-top: 4px;">{{ t('about.params.ageVal') }}</p>
            </div>
            <div style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
              <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">📍 {{ t('about.params.location') }}</p>
              <p style="font-size: 14px; font-weight: 900; color: #1f2937; margin-top: 4px;">{{ t('about.params.locationVal') }}</p>
            </div>
            <div style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
              <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">🌸 {{ t('about.params.oshi') }}</p>
              <p style="font-size: 14px; font-weight: 900; color: #ec4899; margin-top: 4px;">{{ t('about.params.oshiVal') }}</p>
            </div>
          </div>

          <!-- 技能进度条 -->
          <div style="padding: 1.5rem; background: white; border-radius: 1.5rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f8fafc; padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 1.125rem;">⚡</span>
                <h4 style="font-weight: 800; color: #1f2937; font-size: 14px;">{{ t('about.skills.title') }}</h4>
              </div>
              <button @click="boostCodingMachine" style="padding: 4px 14px; font-size: 12px; border-radius: 9999px; background: #fce7f3; color: #ec4899; font-weight: 700; border: none; cursor: pointer;">
                🔥 {{ t('about.skills.boost') }}
              </button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div v-for="(pct, i) in currentPct" :key="i">
                <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #6b7280; margin-bottom: 6px;">
                  <span>{{ t('about.skills.' + ['cpp','python','js'][i]) }}</span>
                  <span :style="{ color: pctColors[i] }">{{ pct }}%</span>
                </div>
                <div style="width: 100%; background: #f1f5f9; height: 10px; border-radius: 9999px; overflow: hidden;">
                  <div style="height: 100%; border-radius: 9999px; transition: all 1s ease;" :style="{ width: pct + '%', background: pctGradients[i] }"></div>
                </div>
              </div>
            </div>
            <!-- 阿梓便签 -->
            <div style="padding: 1rem; background: rgba(248,250,252,0.5); border-radius: 1rem; border: 1px solid #f1f5f9; font-size: 13px; color: #6b7280; margin-top: 1.5rem;">
              <div style="color: #4f8bae; font-weight: 700; font-family: monospace; font-size: 14px;">{{ t('about.quote2') }}</div>
              <p style="line-height: 1.6; margin-top: 8px;">{{ t('about.quoteText') }}</p>
            </div>
          </div>
        </div>

        <!-- 右侧：白洲梓 -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 360px; margin: 0 auto;">
          <div style="border-radius: 1.5rem; border: 4px solid white; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); overflow: hidden; background: #f1f5f9;">
            <div style="position: relative; aspect-ratio: 3/4;">
              <img src="/images/self.png" style="width: 100%; height: 100%; object-fit: cover;">
              <div style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.6); color: white; font-size: 10px; padding: 4px 10px; border-radius: 9999px; backdrop-filter: blur(4px); letter-spacing: 0.05em; font-weight: 600;">
                {{ t('about.azusa.badge') }}
              </div>
            </div>
          </div>
          <div style="padding: 1.5rem; background: white; border-radius: 1.5rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
            <div style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #f8fafc; padding-bottom: 8px; margin-bottom: 12px;">
              <span style="font-size: 1.125rem;">🕊️</span>
              <h4 style="font-weight: 800; color: #1f2937; font-size: 14px;">{{ t('about.azusa.title') }}</h4>
            </div>
            <p style="font-size: 12px; color: #9ca3af; font-style: italic;">{{ t('about.azusa.subtitle') }}</p>
            <div style="font-size: 12px; color: #4b5563; display: flex; flex-direction: column; gap: 10px; margin-top: 12px; line-height: 1.6;">
              <p v-for="d in azusaDetails" :key="d.label" style="display: flex; gap: 8px;">
                <span style="flex-shrink: 0;">{{ d.emoji }}</span>
                <span><strong style="color: #1f2937;">{{ d.label }}</strong>{{ d.text }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 成长时间轴 -->
      <div style="margin-top: 6rem;">
        <div style="text-align: center; margin-bottom: 4rem;">
          <h3 style="font-size: 1.5rem; font-weight: 800; color: #111827;">{{ t('about.timeline.title') }}</h3>
          <p style="font-size: 13px; color: #9ca3af; margin-top: 8px;">{{ t('about.timeline.subtitle') }}</p>
        </div>
        <div style="max-width: 64rem; margin: 0 auto; position: relative;">
          <div class="timeline-line"></div>
          <div style="display: flex; flex-direction: column; gap: 3rem;">
            <div v-for="(item, i) in timelineItems" :key="i" style="position: relative; display: flex; align-items: flex-start;">
              <div style="position: absolute; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; border-radius: 9999px; background: white; border: 4px solid; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; z-index: 10;" :style="{ borderColor: item.color }">
                <span style="font-size: 14px;">{{ item.icon }}</span>
              </div>
              <div :style="{ width: '50%', paddingRight: '3.5rem', textAlign: 'right' }">
                <div style="background: rgba(255,255,255,0.85); padding: 1.5rem; border-radius: 1.5rem; border: 1px solid rgba(252,220,222,0.5); box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                  <span style="display: inline-block; padding: 4px 10px; font-size: 10px; border-radius: 9999px; background: #eff6ff; color: #4f8bae; font-weight: 700;">{{ item.date }}</span>
                  <h4 style="font-size: 16px; font-weight: 700; color: #1f2937; margin-top: 8px;">{{ item.title }}</h4>
                  <p style="font-size: 12px; color: #9ca3af; margin-top: 4px;">{{ item.desc }}</p>
                </div>
              </div>
              <div style="width: 50%;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
