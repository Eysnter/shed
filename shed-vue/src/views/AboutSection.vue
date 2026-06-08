<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 技能进度条
const isBoosted = ref(false)
const currentPct = ref([85, 80, 75])
const skillLabels = ['C++ / ICPC 算法竞赛级', 'Python / 标书查重系统研发', 'JS / Tailwind 精致手账网页工坊']
const skillGradients = [
    'linear-gradient(to right, #4f8bae, #92cdd6)',
    'linear-gradient(to right, #92cdd6, #f9a8d4)',
    'linear-gradient(to right, #6ee7b7, #2dd4bf)',
]
const skillPctColors = ['#4f8bae', '#ec4899', '#10b981']

function boostCodingMachine() {
    if (isBoosted.value) return
    isBoosted.value = true
    currentPct.value = [100, 100, 100]
    setTimeout(() => {
        currentPct.value = [85, 80, 75]
        isBoosted.value = false
    }, 3000)
}

// 白洲梓细节
const azusaDetails = [
    { emoji: '🌸', color: '#ec4899', label: '容貌：', text: '透明感淡紫银长发 + 澄澈双眸，傲娇又无辜的绝佳神情。' },
    { emoji: '🎀', color: '#a855f7', label: '细节：', text: '左侧别着紫罗兰金色发卡，脑后系着黑色大蝴蝶结。' },
    { emoji: '👗', color: '#3b82f6', label: '穿搭：', text: '经典圣三一黑白水手服连衣裙，缀有十字架与百合徽章。' },
    { emoji: '🎒', color: '#f59e0b', label: '反差：', text: '身后是点缀着小花的纯白羽翼，怀里紧抱着佩罗罗玩偶，反差萌瞬间拉满！' },
]

// 进度条动画
const barsVisible = ref(false)
onMounted(() => {
    setTimeout(() => { barsVisible.value = true }, 1000)
})
</script>

<template>
    <section id="about" style="padding: 5rem 0 7rem; background: rgba(255,255,255,0.5); backdrop-filter: blur(12px);">
        <div style="max-width: 80rem; margin: 0 auto; padding: 0 1.5rem;">

            <!-- 标题 + 引言 -->
            <div style="text-align: center; max-width: 48rem; margin: 0 auto 4rem;">
                <h2
                    style="font-size: 1.875rem; font-weight: 800; color: #111827; display: flex; align-items: center; justify-content: center; gap: 10px;">
                    <span style="color: #4f8bae;">🌺 {{ t('about.title') }}</span>
                </h2>
                <div
                    style="padding: 1.25rem; border-radius: 1.5rem; background: rgba(252,220,222,0.5); border: 1px solid rgba(252,220,222,0.6); box-shadow: inset 0 2px 4px rgba(0,0,0,0.06); font-style: italic; color: #4b5563; font-size: 0.9rem; line-height: 1.6; margin-top: 1rem;">
                    {{ t('about.quote') }}
                </div>
            </div>

            <!-- 两栏布局：左7 右5 -->
            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start;" class="about-grid">

                <!-- ===== 左侧主列 ===== -->
                <div style="display: flex; flex-direction: column; gap: 1.5rem;">

                    <!-- 名片行 -->
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 1.5rem; font-weight: 900; color: #111827;">
                            <ruby>
                                <rb>{{ t('about.name') }}</rb>
                                <rt>{{ t('about.nameReading') }}</rt>
                            </ruby>
                        </span>
                        <span
                            style="padding: 4px 10px; font-size: 12px; border-radius: 9999px; background: #e6f2f7; color: #4f8bae; font-weight: 700;">{{ t('about.handle') }}</span>
                    </div>

                    <!-- 简介文案 -->
                    <div style="color: #4b5563; font-size: 0.95rem; line-height: 1.7;">
                        <div style="display: flex; flex-direction: column; gap: 14px;">
                            <p style="display: flex; align-items: flex-start; gap: 8px;">
                                <span style="flex-shrink: 0; font-size: 1.125rem;">👋</span>
                                <span>幸识吖！这里是<strong>艾斯特</strong>，请多指教~ <span
                                        style="font-size: 12px; color: #4f8bae;">(超级大鞠躬！)</span></span>
                            </p>
                            <p style="display: flex; align-items: flex-start; gap: 8px;">
                                <span style="flex-shrink: 0; font-size: 1.125rem;">📍</span>
                                <span>坐标<strong>湖北十堰</strong>，非常欢迎大家来我的家乡玩耍。</span>
                            </p>
                            <p style="display: flex; align-items: flex-start; gap: 8px;">
                                <span style="flex-shrink: 0; font-size: 1.125rem;">🎮</span>
                                <span>兴趣：打游戏、刷番，以及疯狂贴贴各种可爱的纸面美少女。</span>
                            </p>
                            <p style="display: flex; align-items: flex-start; gap: 8px;">
                                <span style="flex-shrink: 0; font-size: 1.125rem;">💰</span>
                                <span>梦想：对"钱钱"有着极度狂热的兴趣，努力向<ruby>
                                        <rb>富婆</rb>
                                        <rt>进化中...</rt>
                                    </ruby>进化中 <span style="color: #ec4899; font-weight: 700;">(✧∇✧)</span></span>
                            </p>
                            <p style="display: flex; align-items: flex-start; gap: 8px;">
                                <span style="flex-shrink: 0; font-size: 1.125rem;">💻</span>
                                <span>属性：一个偶尔被 Bug 气到抓狂、但绝大多数时候极其无情的<ruby>
                                        <rb>敲代码机器</rb>
                                        <rt>Coding Machine</rt>
                                    </ruby>。</span>
                            </p>
                            <p style="display: flex; align-items: flex-start; gap: 8px;">
                                <span style="flex-shrink: 0; font-size: 1.125rem;">🍰</span>
                                <span>美食：喜欢吃桃子，柚子，西瓜，樱桃,最喜欢<ruby>
                                        <rb>草莓</rb>
                                        <rt>Strawberry</rt>
                                    </ruby>。</span>
                            </p>

                        </div>
                    </div>

                    <!-- 参数网格 4格 -->
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; padding-top: 1rem;">
                        <div
                            style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: box-shadow 0.2s;">
                            <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">🎂
                                {{ t('about.params.birthday') }}</p>
                            <p style="font-size: 0.95rem; font-weight: 900; color: #1f2937; margin-top: 4px;">27 Dec.
                            </p>
                        </div>
                        <div
                            style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: box-shadow 0.2s;">
                            <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">🔒 {{ t('about.params.age') }}
                            </p>
                            <p style="font-size: 0.95rem; font-weight: 900; color: #1f2937; margin-top: 4px;">Secret</p>
                        </div>
                        <div
                            style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: box-shadow 0.2s;">
                            <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">📍
                                {{ t('about.params.location') }}</p>
                            <p style="font-size: 0.95rem; font-weight: 900; color: #1f2937; margin-top: 4px;">湖北十堰</p>
                        </div>
                        <div
                            style="padding: 1rem; background: white; border-radius: 1rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05); transition: box-shadow 0.2s;">
                            <p style="font-size: 12px; color: #9ca3af; font-weight: 700;">🌸
                                {{ t('about.params.oshi') }}</p>
                            <p style="font-size: 0.95rem; font-weight: 900; color: #ec4899; margin-top: 4px;">白洲梓 (BA)
                            </p>
                        </div>
                    </div>

                    <!-- 技能进度条卡片 -->
                    <div
                        style="padding: 1.5rem; background: white; border-radius: 1.5rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 1.5rem; transition: box-shadow 0.3s;">
                        <!-- 标题行 -->
                        <div
                            style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #f8fafc; padding-bottom: 0.75rem;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 1.125rem;">⚡</span>
                                <h4 style="font-weight: 800; color: #1f2937; font-size: 0.95rem;">
                                    {{ t('about.skills.title') }}</h4>
                            </div>
                            <button @click="boostCodingMachine"
                                style="padding: 4px 14px; font-size: 12px; border-radius: 9999px; background: #fce7f3; color: #ec4899; font-weight: 700; border: none; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: all 0.2s;">
                                🔥 {{ t('about.skills.boost') }}
                            </button>
                        </div>

                        <!-- 进度条 -->
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            <div v-for="(pct, i) in currentPct" :key="i">
                                <div
                                    style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; color: #6b7280; margin-bottom: 6px;">
                                    <span>{{ skillLabels[i] }}</span>
                                    <span :style="{ color: skillPctColors[i] }">{{ pct }}%</span>
                                </div>
                                <div
                                    style="width: 100%; background: #f1f5f9; height: 10px; border-radius: 9999px; overflow: hidden;">
                                    <div style="height: 100%; border-radius: 9999px; transition: width 1s ease;"
                                        :style="{ width: (barsVisible ? pct : 0) + '%', background: skillGradients[i] }">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 阿梓便签 -->
                        <div
                            style="padding: 1rem; background: rgba(248,250,252,0.5); border-radius: 1rem; border: 1px solid #f1f5f9; font-size: 0.85rem; color: #6b7280; display: flex; flex-direction: column; gap: 8px;">
                            <div style="color: #4f8bae; font-weight: 700; font-family: monospace; font-size: 0.9rem;">"
                                Vanitas vanitatum, et omnia vanitas. "</div>
                            <p style="line-height: 1.6;">
                                即便一切都是虚无，即便任何挣扎可能都毫无意义，我也绝对不会向虚无妥协，更不会停下敲击键盘的双手。为了守护住心中最温暖重要的冰屋避风港，艾斯特会一直战斗并敲出完美运行的代码！
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ===== 右侧白洲梓 ===== -->
                <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 360px; margin: 0 auto;">
                    <!-- 高清拍立得相框 -->
                    <div
                        style="position: relative; width: 100%; overflow: hidden; border-radius: 1.5rem; border: 4px solid white; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); background: #f1f5f9;">
                        <div style="position: relative; aspect-ratio: 3/4;">
                            <img src="https://img.eysnter.cn/file/posts/icon/1780810746181_zi-3.png" alt="白洲梓"
                                style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s;"
                                class="azusa-img">
                            <div
                                style="position: absolute; bottom: 12px; left: 12px; background: rgba(0,0,0,0.6); color: white; font-size: 10px; padding: 4px 10px; border-radius: 9999px; backdrop-filter: blur(4px); letter-spacing: 0.05em; font-weight: 600;">
                                支柱 · 白洲 梓
                            </div>
                        </div>
                    </div>

                    <!-- 细节考究卡 -->
                    <div
                        style="padding: 1.5rem; background: white; border-radius: 1.5rem; border: 1px solid rgba(252,220,222,0.3); box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 1rem;">
                        <div
                            style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #f8fafc; padding-bottom: 8px;">
                            <span style="font-size: 1.125rem;">🕊️</span>
                            <h4 style="font-weight: 800; color: #1f2937; font-size: 14px;">吾之本命 · 白洲梓 (BA - 阿梓)</h4>
                        </div>
                        <p style="font-size: 12px; color: #9ca3af; font-style: italic;">
                            是我最爱的《蔚蓝档案》"冰之魔女"白洲梓，也是我敲代码的精神支柱！</p>
                        <div
                            style="font-size: 12px; color: #4b5563; display: flex; flex-direction: column; gap: 10px; line-height: 1.6;">
                            <p v-for="d in azusaDetails" :key="d.label" style="display: flex; gap: 8px;">
                                <span style="flex-shrink: 0;" :style="{ color: d.color }">{{ d.emoji }}</span>
                                <span><strong style="color: #1f2937;">{{ d.label }}</strong>{{ d.text }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* 响应式：大屏两栏 */
@media (min-width: 1024px) {
    .about-grid {
        grid-template-columns: 7fr 5fr !important;
    }
}

/* 白洲梓图片悬停放大 */
.azusa-img:hover {
    transform: scale(1.05);
}
</style>
