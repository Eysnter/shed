<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const heroRef = ref(null)

// ===== 视差效果（内联） =====
const mouseX = ref(0)
const mouseY = ref(0)
function onMouseMove(e) {
  const rect = heroRef.value?.getBoundingClientRect()
  if (!rect) return
  mouseX.value = (e.clientX - rect.left - rect.width / 2) / rect.width
  mouseY.value = (e.clientY - rect.top - rect.height / 2) / rect.height
}
function getTransform(depth) {
  const x = mouseX.value * depth * -100
  const y = mouseY.value * depth * -100
  return `translate3d(${x}px, ${y}px, 0)`
}

// 打字机
const typedText = ref('')
const strings = ['你好～我是 艾斯特！✨', '一个努力前行的敲代码小狐猫！🦊🐾', '欢迎来到我的温宿炉火~❄️']
let stringIdx = 0, charIdx = 0, isDeleting = false, timer = null

function tick() {
  const current = strings[stringIdx]
  if (isDeleting) { typedText.value = current.substring(0, --charIdx) }
  else { typedText.value = current.substring(0, ++charIdx) }

  let delta = 100 - Math.random() * 30
  if (isDeleting) delta = 40
  if (!isDeleting && charIdx === current.length) { delta = 2200; isDeleting = true }
  else if (isDeleting && charIdx === 0) { isDeleting = false; stringIdx = (stringIdx + 1) % strings.length; delta = 600 }
  timer = setTimeout(tick, delta)
}

// 浮动装饰形状
const shapes = [
  { src: '/images/shape-2.png', depth: 0.30, style: 'top: -18px; left: 20%;', w: 91, title: '左边桃子自取' },
  { src: '/images/shape-3.png', depth: 0.40, style: 'top: 0; left: 40%;', w: 173 },
  { src: '/images/shape-2.png', depth: 0.60, style: 'top: 28px; right: 7.6%; left: auto;', w: 91 },
  { src: '/images/shape-4.png', depth: 0.15, style: 'top: 44%; left: 13%; transform: translateY(-50%);', w: 100 },
  { src: '/images/shape-5.png', depth: 0.50, style: 'left: 30px; bottom: 50px; top: auto;', w: 195 },
  { src: '/images/shape-3.png', depth: 0.40, style: 'left: 90px; bottom: 140px; top: auto;', w: 173 },
  { src: '/images/shape-6.png', depth: 0.20, style: 'left: 450px; transform: translateX(-50%); bottom: 28px; top: auto;', w: 136, title: '嗷呜~' },
  { src: '/images/shape-3.png', depth: 0.30, style: 'right: 30px; bottom: 5px; left: auto; top: auto;', w: 173 },
]

// 鼠标点击爱心
const hearts = ref([])
let heartId = 0

function spawnHeart(e) {
  const id = heartId++
  hearts.value.push({ id, x: e.clientX, y: e.clientY })
  setTimeout(() => { hearts.value = hearts.value.filter(h => h.id !== id) }, 1000)
}

onMounted(() => { tick(); document.addEventListener('click', spawnHeart); window.addEventListener('mousemove', onMouseMove) })
onUnmounted(() => { clearTimeout(timer); document.removeEventListener('click', spawnHeart); window.removeEventListener('mousemove', onMouseMove) })
</script>

<template>
  <section id="home" ref="heroRef" class="hero-section" @click="spawnHeart">
    <!-- 背景遮罩 -->
    <div class="hero-overlay"></div>

    <!-- 浮动装饰形状 (视差效果) -->
    <div class="shapes-container">
      <div
        v-for="(s, i) in shapes"
        :key="i"
        class="header-shape floating-shape"
        :style="s.style + ' transform: ' + getTransform(s.depth) + ';'"
        :title="s.title"
      >
        <img :src="s.src" :width="s.w" draggable="false" :alt="'shape-' + i">
      </div>
    </div>

    <!-- 主内容 -->
    <div class="hero-content">
      <div class="hero-card">
        <div class="hero-badge">✨ {{ t('home.welcome') }}</div>

        <div>
          <h1 class="hero-title">
            <span class="hero-title-blue">一隅温宿一炉火</span>
            <div class="hero-subtitle">
              <span>{{ t('home.subtitle') }}</span>
              <span class="hero-site-badge">{{ t('home.siteName') }}</span>
            </div>
          </h1>
          <p class="hero-desc">{{ t('home.desc') }}</p>
        </div>

        <!-- 打字机 -->
        <div class="typing-box">
          <h4 class="typing-text">
            <span class="typing-icon">$</span>
            <span class="typing-cursor">{{ typedText }}</span>
          </h4>
        </div>

        <!-- CTA 按钮 -->
        <div class="hero-buttons">
          <a href="#rec" class="btn-primary">
            <span>📦</span> {{ t('home.btnResource') }}
          </a>
          <a href="https://Eysnter.cn" target="_blank" class="btn-secondary">
            <span>🪶</span> {{ t('home.btnBlog') }}
          </a>
        </div>
      </div>
    </div>

    <!-- 点击爱心特效 -->
    <div v-for="h in hearts" :key="h.id" class="click-heart" :style="{ left: h.x + 'px', top: h.y + 'px' }">
      ❤️
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: calc(100vh - 100px);
  margin-top: 85px;
  padding: 80px 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: default;
  background: url('https://img.eysnter.cn/file/Wallpaper/1780812502559_白洲梓.webp') center / cover no-repeat;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 70% 20%, hsla(40, 85%, 70%, 0.4) 0%, transparent 35%),
    radial-gradient(circle at 20% 80%, hsla(342, 65%, 69%, 0.4) 0%, transparent 35%);
  z-index: 0;
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.shapes-container {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.header-shape {
  position: absolute !important;
  transition: transform 0.1s ease-out;
  animation: float-shape 6s ease-in-out infinite alternate;
  opacity: 0.7;
}

.header-shape:nth-child(2n) {
  animation-duration: 8s;
  animation-delay: 1.5s;
}
.header-shape:nth-child(3n) {
  animation-duration: 10s;
  animation-delay: 2.5s;
}
.header-shape:nth-child(5n) {
  animation-duration: 7s;
  animation-delay: 0.8s;
}

@keyframes float-shape {
  0% { margin-top: 0px; }
  100% { margin-top: -18px; }
}

.hero-content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.hero-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  padding: 2rem 3rem;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.5s ease-out;
}
.hero-card:hover {
  transform: scale(1.01);
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(252, 220, 222, 0.8);
  color: #ec4899;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  animation: pulse-badge 2s infinite;
  align-self: center;
}

@keyframes pulse-badge {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #111827;
  line-height: 1.2;
}

.hero-title-blue {
  color: #4f8bae;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 700;
  color: #6b7280;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.hero-site-badge {
  font-size: 12px;
  background: #92cdd6;
  color: white;
  padding: 4px 10px;
  border-radius: 9999px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: monospace;
}

.hero-desc {
  font-size: 13px;
  color: #9ca3af;
  font-style: italic;
  margin-top: 4px;
}

.typing-box {
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(252, 220, 222, 0.2);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-text {
  font-size: 14px;
  color: #4b5563;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 4px;
}

.typing-icon {
  color: #4f8bae;
  font-family: monospace;
}

.typing-cursor {
  color: #4f8bae;
  border-right: 2px solid #4f8bae;
  padding-right: 4px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-top: 8px;
}

.btn-primary {
  padding: 14px 24px;
  border-radius: 9999px;
  background: #4f8bae;
  color: white;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}
.btn-primary:hover {
  background: #396c8a;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.btn-secondary {
  padding: 14px 24px;
  border-radius: 9999px;
  background: white;
  color: #374151;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}
.btn-secondary:hover {
  background: #f8fafc;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* 点击爱心 */
.click-heart {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  font-size: 20px;
  animation: heart-fly 1s ease-out forwards;
}

@keyframes heart-fly {
  0% { opacity: 1; transform: translate(-50%, 0) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -80px) scale(1.5); }
}

@media (max-width: 767px) {
  .hero-title { font-size: 1.75rem; }
  .hero-subtitle { font-size: 1rem; }
  .hero-card { padding: 1.5rem; border-radius: 24px; }
  .header-shape img { width: 40px !important; }
  .hero-buttons { flex-direction: column; }
}
</style>
