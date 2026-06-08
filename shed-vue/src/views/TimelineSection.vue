<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const milestones = ref([
  {
    id: 1, year: 2020, date: '2020.04.15', category: 'life',
    icon: 'fa-solid fa-cake-candles', color: '#f43f5e',
    title: '学会了烤第一个戚风蛋糕 🎂',
    description: '烤箱里飘出浓郁的奶香。经历了三次失败后，终于烤出了蓬松完美的云朵戚风。',
    detailedNotes: '厨房弄得像面粉爆炸过一样，脸上甚至蹭上了一道白印。但当爸妈吃完第一口大赞美味时，那种简单、纯粹的踏实感填满了整个午后。',
    isRevealed: false, isExpanded: false,
  },
  {
    id: 2, year: 2021, date: '2021.08.20', category: 'pet',
    icon: 'fa-solid fa-cat', color: '#f59e0b',
    title: '在雨天路边收养了小橘猫 🐱',
    description: '一个雷雨交加的下午，在花坛旁捡到一只湿透的小奶橘。带回家擦干后，它竟然在怀里呼噜呼噜地睡着了。',
    detailedNotes: '给它取名叫"芝士"。从刚回家时的警惕、缩在床底下，到如今变成胖乎乎的"沙发霸主"，它用小脑袋蹭我的时候，带给我无穷无尽的温柔和治愈。',
    isRevealed: false, isExpanded: false,
  },
  {
    id: 3, year: 2022, date: '2022.05.01', category: 'growth',
    icon: 'fa-solid fa-car', color: '#3b82f6',
    title: '拿到驾照后第一次独自上路 🚗',
    description: '从驾校顺利"毕业"，第一次坐上家里的驾驶位。独自转动方向盘，看着两旁的风景在倒退，心跳兴奋得清晰可闻。',
    detailedNotes: '虽然一路上都在小心翼翼，甚至被后面的车按喇叭，但安全开回小区倒车入库的那一刻，感觉自己真正掌握了说走就走的自由选择权。',
    isRevealed: false, isExpanded: false,
  },
  {
    id: 4, year: 2023, date: '2023.10.15', category: 'growth',
    icon: 'fa-solid fa-person-running', color: '#10b981',
    title: '完成了人生的第一次长跑挑战 🏃‍♂️',
    description: '完成了环湖5公里的慢跑挑战。在最后一公里呼吸几乎到达极限时，依然稳住节奏，用坚定的脚步跨过了终点标线。',
    detailedNotes: '跑完后直接坐在木栈道上，大汗淋漓地喝完冰水。看着微风吹皱的湖水和斜阳，突然领悟到，很多生活的坎坷，就像那段酸痛的最后五百米，跑着跑着也就挺过来了。',
    isRevealed: false, isExpanded: false,
  },
  {
    id: 5, year: 2024, date: '2024.03.20', category: 'life',
    icon: 'fa-solid fa-key', color: '#8b5cf6',
    title: '租下了属于自己的第一个温馨小屋 🔑',
    description: '交了押金、拿过黄铜钥匙，虽然房间里还空无一物，但那一抹透过玻璃直洒在木地板上的和煦阳光，告诉我：独立旅程开始了。',
    detailedNotes: '逛了两天家具市场，亲手拼好了小书桌，挂上向日葵帘子。虽然房子是租的，但每当下班开锁推开门，感受到独属于自己的温馨暖光，这里就是我的避风港。',
    isRevealed: false, isExpanded: false,
  },
  {
    id: 6, year: 2025, date: '2025.10.05', category: 'travel',
    icon: 'fa-solid fa-water', color: '#06b6d4',
    title: '独自去远方看了向往很久的大海 🌊',
    description: '背上一只简单双肩包，坐了六个钟头的动车。在清晨的海滩上，迎着有些凉意的秋风，目睹了万道霞光穿破重雾、把海面染得通红的瞬间。',
    detailedNotes: '海浪一次次打到光脚丫上，退去时细沙摩擦着脚底，舒服极了。在大海无边无际的空灵叹息面前，突然发现平日那些纠结、叹气的琐事，渺小得就像一粒微沙。',
    isRevealed: false, isExpanded: false,
  },
  {
    id: 7, year: 2026, date: '2026.05.20', category: 'life',
    icon: 'fa-solid fa-cloud-sun', color: '#f43f5e',
    title: '下班路上撞见了一场粉色橘子晚霞 🌇',
    description: '偶然在拐角抬头，整座城市上空正被巨大的、梦幻的粉橘色火烧云包裹。宽阔的立交桥上，好多陌生人都驻足停留，默默拿手机对着天空拍照。',
    detailedNotes: '晚风刚好吹得很温柔。大家都静静地看着落日落幕，那一刻的繁忙与焦虑荡然无存，原来生活只要偶尔抬起头，就会赠予你不期而遇的浪漫。',
    isRevealed: false, isExpanded: false,
  },
])

const categories = [
  { id: 'all', name: '全部记忆', icon: 'fa-solid fa-infinity' },
  { id: 'life', name: '居家日常', icon: 'fa-solid fa-house-chimney' },
  { id: 'pet', name: '萌宠暖心', icon: 'fa-solid fa-paw' },
  { id: 'growth', name: '个人突破', icon: 'fa-solid fa-seedling' },
  { id: 'travel', name: '旅途足迹', icon: 'fa-solid fa-compass' },
]

const searchQuery = ref('')
const activeCategory = ref('all')
const isAscending = ref(true)
const activeYear = ref(null)
const progressHeight = ref(0)
const isAutoplay = ref(false)
let autoplayTimer = null
let currentAutoplayIdx = 0

const getCategoryLabel = (catId) => {
  const matched = categories.find(c => c.id === catId)
  return matched ? matched.name : '生活'
}

const filteredMilestones = computed(() => {
  let result = milestones.value.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCat = activeCategory.value === 'all' || item.category === activeCategory.value
    return matchesSearch && matchesCat
  })
  return result.sort((a, b) => isAscending.value ? a.year - b.year : b.year - a.year)
})

const categoryStats = computed(() => {
  const statsMap = {}
  categories.slice(1).forEach(cat => {
    statsMap[cat.id] = { name: cat.name, color: '#94a3b8', icon: cat.icon, count: 0 }
  })
  statsMap['life'].color = '#f43f5e'
  statsMap['pet'].color = '#f59e0b'
  statsMap['growth'].color = '#10b981'
  statsMap['travel'].color = '#06b6d4'

  let total = 0
  filteredMilestones.value.forEach(item => {
    if (statsMap[item.category]) { statsMap[item.category].count++; total++ }
  })
  return Object.keys(statsMap).map(key => ({
    id: key, ...statsMap[key],
    percentage: total > 0 ? Math.round((statsMap[key].count / total) * 100) : 0,
  }))
})

const availableYears = computed(() => {
  return [...new Set(milestones.value.map(item => item.year))].sort((a, b) => a - b)
})

const toggleSort = () => { isAscending.value = !isAscending.value }
const toggleItemDetails = (item) => { item.isExpanded = !item.isExpanded }
const focusNode = (item) => { activeYear.value = item.year }

const scrollToYear = (year) => {
  activeYear.value = year
  const matchedItem = filteredMilestones.value.find(item => item.year === year)
  if (matchedItem) {
    const el = document.getElementById('milestone-' + matchedItem.id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const toggleAutoplay = () => {
  isAutoplay.value = !isAutoplay.value
  if (isAutoplay.value) { runAutoplay() }
  else { clearInterval(autoplayTimer) }
}

const runAutoplay = () => {
  milestones.value.forEach(m => { m.isExpanded = false })
  currentAutoplayIdx = 0
  autoplayTimer = setInterval(() => {
    const targetList = filteredMilestones.value
    if (targetList.length === 0) return
    const item = targetList[currentAutoplayIdx]
    activeYear.value = item.year
    milestones.value.forEach(m => { m.isExpanded = m.id === item.id })
    progressHeight.value = ((currentAutoplayIdx + 1) / targetList.length) * 100
    const el = document.getElementById('milestone-' + item.id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    currentAutoplayIdx = (currentAutoplayIdx + 1) % targetList.length
  }, 4000)
}

const updateDrawLine = () => {
  const main = document.querySelector('.tl-main-area')
  if (!main) return
  const rect = main.getBoundingClientRect()
  const topOffset = rect.top + window.scrollY
  const penFocus = window.scrollY + (window.innerHeight * 0.5)
  let pct = ((penFocus - topOffset) / rect.height) * 100
  progressHeight.value = Math.max(0, Math.min(100, pct))
}

let observer = null
const initScrollObserver = () => {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        const idStr = entry.target.id.split('-')[1]
        const matched = milestones.value.find(m => m.id === parseInt(idStr))
        if (matched) { matched.isRevealed = true; activeYear.value = matched.year }
      }
    })
  }, { rootMargin: '0px 0px -15% 0px', threshold: 0.15 })
  document.querySelectorAll('.scroll-pop-card').forEach(card => { observer.observe(card) })
}

onMounted(async () => {
  window.addEventListener('scroll', updateDrawLine)
  await nextTick()
  setTimeout(() => {
    initScrollObserver()
    updateDrawLine()
  }, 200)
})

// 筛选变化后重新观察
watch(filteredMilestones, async () => {
  await nextTick()
  setTimeout(() => initScrollObserver(), 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateDrawLine)
  if (observer) observer.disconnect()
  if (autoplayTimer) clearInterval(autoplayTimer)
})
</script>

<template>
  <section id="journal" class="journal-page">
    <!-- 页面标题 -->
    <div class="journal-header">
      <div class="journal-header-badge">
        <i class="fa-solid fa-feather-pointed"></i> Sweet Moments Journal
      </div>
      <h1 class="journal-title">
        <span>生活中的小确幸手账</span>
      </h1>
      <p class="journal-subtitle">有些平凡温软的小事，在记忆的底片里，被揉进了细碎温柔的微光。</p>
    </div>

    <!-- 控制面板 -->
    <section style="margin-bottom: 3rem; background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); padding: 1.5rem; border-radius: 32px; border: 1px solid rgba(214,211,209,0.5); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.07);">
      <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; align-items: center;" class="ctrl-grid">
        <!-- 搜索 -->
        <div style="position: relative;">
          <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 14px;">🔍</span>
          <input v-model="searchQuery" type="text" placeholder="在手账记忆里翻阅..."
            style="width: 100%; padding: 12px 16px 12px 44px; border-radius: 16px; background: #faf9f5; border: 1px solid rgba(226,232,240,0.6); font-size: 14px; color: #1e293b; outline: none; transition: all 0.2s; box-sizing: border-box;">
        </div>

        <!-- 分类标签 -->
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <button v-for="cat in categories" :key="cat.id" @click="activeCategory = cat.id"
            style="padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 700; transition: all 0.3s; display: flex; align-items: center; gap: 6px; border: 1px solid; cursor: pointer;"
            :style="activeCategory === cat.id
              ? 'background: #ec4899; color: white; border-color: #ec4899;'
              : 'background: white; color: #64748b; border-color: rgba(226,232,240,0.8);'">
            {{ cat.name }}
          </button>
        </div>

        <!-- 排序 & 漫游 -->
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <button @click="toggleSort"
            style="padding: 12px; border-radius: 12px; background: white; color: #475569; border: 1px solid rgba(226,232,240,0.6); cursor: pointer; font-size: 12px; font-weight: 700; display: flex; align-items: center; gap: 8px; transition: all 0.2s;">
            {{ isAscending ? '⬆️ 正序' : '⬇️ 倒序' }}
          </button>
          <button @click="toggleAutoplay"
            style="padding: 12px 16px; border-radius: 12px; font-size: 12px; font-weight: 900; display: flex; align-items: center; gap: 8px; border: 1px solid; cursor: pointer; transition: all 0.3s;"
            :style="isAutoplay
              ? 'background: #f43f5e; color: white; border-color: #f43f5e;'
              : 'background: rgba(236,72,153,0.1); color: #ec4899; border-color: #fbcfe8;'">
            {{ isAutoplay ? '⏹ 停下' : '▶ 漫游' }}
          </button>
        </div>
      </div>
    </section>

    <!-- 主体：左栏 + 右栏 -->
    <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: start;" class="tl-layout">

      <!-- 左侧边栏 -->
      <aside class="tl-sidebar">
        <!-- 个人名片 -->
        <div class="tl-aside-card" style="text-align: center; position: relative; overflow: hidden;">
          <!-- 活页环装饰 -->
          <div style="position: absolute; top: 50%; left: -4px; transform: translateY(-50%); display: flex; flex-direction: column; gap: 20px; z-index: 20;">
            <div style="width: 10px; height: 24px; background: linear-gradient(to right, #94a3b8, #64748b); border-radius: 9999px; border: 1px solid white;"></div>
            <div style="width: 10px; height: 24px; background: linear-gradient(to right, #94a3b8, #64748b); border-radius: 9999px; border: 1px solid white;"></div>
            <div style="width: 10px; height: 24px; background: linear-gradient(to right, #94a3b8, #64748b); border-radius: 9999px; border: 1px solid white;"></div>
          </div>
          <div style="position: relative; width: 80px; height: 80px; margin: 0 auto; border-radius: 9999px; padding: 4px; border: 2px dashed #f9a8d4;">
            <img src="https://img.eysnter.cn/file/posts/icon/1780810746181_zi-3.png" style="width: 100%; height: 100%; object-fit: cover; border-radius: 9999px; background: #f8fafc;">
            <span style="position: absolute; bottom: 0; right: 0; width: 20px; height: 20px; background: #34d399; border: 2px solid white; border-radius: 9999px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white;">✨</span>
          </div>
          <div style="margin-top: 12px;">
            <h2 style="font-size: 1.125rem; font-weight: 900; color: #1e293b;">Eysnter · 艾斯特</h2>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 4px;">「一隅温宿一炉火，记下生活的小碎星」</p>
          </div>
          <div style="padding-top: 12px; margin-top: 12px; border-top: 1px dashed #f1f5f9; font-style: italic; font-size: 12px; color: #64748b;">
            " 我们不记得日期，我们只记得那些闪光的瞬间。 "
          </div>
        </div>

        <!-- 记忆构成 -->
        <div class="tl-aside-card">
          <h4 style="font-size: 13px; font-weight: 900; color: #1e293b; display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">📊 当前记忆构成占比</h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div v-for="stat in categoryStats" :key="stat.id">
              <div style="display: flex; align-items: center; justify-content: space-between; font-size: 12px; font-weight: 700; color: #64748b; margin-bottom: 4px;">
                <span style="display: flex; align-items: center; gap: 4px;"><span :style="{ color: stat.color }">●</span> {{ stat.name }}</span>
                <span style="font-family: monospace;" :style="{ color: stat.color }">{{ stat.count }} 篇 ({{ stat.percentage }}%)</span>
              </div>
              <div style="width: 100%; background: #f1f5f9; height: 8px; border-radius: 9999px; overflow: hidden;">
                <div style="height: 100%; border-radius: 9999px; transition: width 0.7s;" :style="{ width: stat.percentage + '%', background: stat.color }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 年份锚点 -->
        <div class="tl-aside-card">
          <h4 style="font-size: 13px; font-weight: 900; color: #1e293b; display: flex; align-items: center; gap: 6px; margin-bottom: 10px;">🕐 时光穿梭快速锚点</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <button v-for="year in availableYears" :key="year" @click="scrollToYear(year)"
              style="padding: 6px 14px; border-radius: 12px; font-size: 12px; font-weight: 700; border: 1px solid; cursor: pointer; transition: all 0.2s;"
              :style="activeYear === year ? 'background: #6366f1; border-color: #6366f1; color: white;' : 'background: #f8fafc; border-color: #e2e8f0; color: #64748b;'">
              {{ year }} 年
            </button>
          </div>
        </div>
      </aside>

      <!-- 右侧时间轴 -->
      <main class="tl-main-area" style="position: relative; min-height: 400px;">
        <!-- 缝纫线导轨 -->
        <div style="position: absolute; left: 24px; top: 16px; bottom: 16px; border-left: 3px dashed #e2e8f0; z-index: 0;"></div>

        <!-- 渐变墨线 -->
        <div style="position: absolute; left: 24px; top: 16px; width: 3px; border-radius: 9999px; z-index: 10; transition: height 0.3s;"
          :style="{ height: progressHeight + '%', background: 'linear-gradient(to bottom, #f43f5e, #a855f7, #3b82f6, #06b6d4, #10b981)' }">
        </div>

        <!-- 卡片列表 -->
        <transition-group name="timeline-list" tag="div" style="display: flex; flex-direction: column; gap: 2rem; position: relative; z-index: 20; padding-left: 56px; min-height: 400px;">
          <div v-for="(item, index) in filteredMilestones" :key="item.id"
            :id="'milestone-' + item.id"
            class="scroll-pop-card"
            :class="{ 'revealed': item.isRevealed || isAutoplay }"
            :data-year="item.year"
            style="position: relative; padding-bottom: 8px;">

            <!-- 节点圈 -->
            <div style="position: absolute; left: -44px; top: 28px; width: 32px; height: 32px; border-radius: 9999px; background: white; border: 4px solid; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; z-index: 30; transition: all 0.5s; cursor: pointer;"
              :style="{ borderColor: activeYear === item.year ? item.color : '#e2e8f0', backgroundColor: activeYear === item.year ? item.color : 'transparent' }"
              @click="focusNode(item)">
              <i :class="item.icon" style="font-size: 10px; transition: all 0.3s;" :style="{ color: activeYear === item.year ? '#ffffff' : item.color }"></i>
            </div>

            <!-- 卡片 -->
            <div style="padding: 1.5rem; background: white; border: 1px solid #e7e5e4; box-shadow: 0 1px 3px rgba(0,0,0,0.05); cursor: pointer; position: relative; overflow: hidden; transition: all 0.5s;"
              :style="{ borderRadius: index % 2 === 0 ? '24px 32px 28px 36px' : '36px 28px 32px 24px' }"
              class="tl-card-hover"
              :class="{ 'ring-4 ring-pink-50 border-pink-300': activeYear === item.year }"
              @click="toggleItemDetails(item)">

              <!-- 和纸胶带 -->
              <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%) rotate(-1.5deg); width: 100px; height: 22px; backdrop-filter: blur(2px); border-left: 2px dashed rgba(255,255,255,0.4); border-right: 2px dashed rgba(255,255,255,0.4); pointer-events: none; z-index: 10;"
                :style="{ background: index % 2 === 0 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(244, 63, 94, 0.18)' }">
              </div>

              <!-- 日期 + 分类 -->
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-size: 10px; margin-top: 4px;">
                <span style="padding: 2px 10px; border-radius: 9999px; font-weight: 800; display: flex; align-items: center; gap: 4px;"
                  :style="{ background: item.color + '12', color: item.color }">
                  🕐 {{ item.date }}
                </span>
                <span style="color: #94a3b8; font-weight: 900; font-family: monospace; letter-spacing: 0.1em; text-transform: uppercase;">
                  {{ getCategoryLabel(item.category) }}
                </span>
              </div>

              <!-- 标题 -->
              <h3 style="font-size: 1rem; font-weight: 900; color: #1e293b; margin-top: 16px; display: flex; align-items: center; gap: 8px; transition: color 0.2s;" class="tl-title-hover">
                {{ item.title }}
              </h3>

              <!-- 描述 -->
              <p style="color: #64748b; font-size: 13px; margin-top: 10px; line-height: 1.6;">
                {{ item.description }}
              </p>

              <!-- 展开随笔 -->
              <div style="overflow: hidden; transition: all 0.5s ease-in-out;"
                :style="{ maxHeight: item.isExpanded ? '200px' : '0px', opacity: item.isExpanded ? 1 : 0 }">
                <div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed #e2e8f0; font-size: 12px; color: #475569; background: rgba(250,248,245,0.8); padding: 16px; border-radius: 16px; position: relative;">
                  <div style="position: absolute; right: 16px; bottom: 8px; opacity: 0.1; pointer-events: none; user-select: none;">
                    <i class="fa-solid fa-stamp" style="font-size: 3rem; transform: rotate(12deg);" :style="{ color: item.color }"></i>
                  </div>
                  <p style="font-weight: 800; display: flex; align-items: center; gap: 4px; margin-bottom: 8px;" :style="{ color: item.color }">
                    ✨ 心情随感 · Stamp：
                  </p>
                  <p style="font-style: italic; line-height: 1.6; color: #64748b;">
                    "{{ item.detailedNotes }}"
                  </p>
                </div>
              </div>

              <!-- 底部 -->
              <div style="margin-top: 16px; padding-top: 10px; border-top: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; font-size: 10px; font-weight: 700;" :style="{ color: item.color }">
                <span style="color: #94a3b8; font-weight: 400;">点击纸张展读书信随笔</span>
                <span style="display: flex; align-items: center; gap: 4px;">
                  {{ item.isExpanded ? '叠起手账' : '展开信笺' }}
                  <i class="fa-solid fa-chevron-down" style="transition: transform 0.3s;" :style="{ transform: item.isExpanded ? 'rotate(180deg)' : 'rotate(0)' }"></i>
                </span>
              </div>
            </div>
          </div>
        </transition-group>
      </main>
    </div>
  </section>
</template>

<style scoped>
.journal-page {
  padding: 7rem 1.5rem 5rem;
  max-width: 80rem;
  margin: 0 auto;
}

.journal-header {
  text-align: center;
  margin-bottom: 4rem;
}

.journal-header-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(236, 72, 153, 0.1);
  border: 1px solid rgba(236, 72, 153, 0.2);
  color: #ec4899;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.journal-title {
  font-size: 2rem;
  font-weight: 900;
  color: #1e293b;
  margin-top: 16px;
}

.journal-title span {
  background: linear-gradient(to right, #f43f5e, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.journal-subtitle {
  color: #64748b;
  max-width: 36rem;
  margin: 8px auto 0;
  font-size: 14px;
  line-height: 1.6;
}

@media (min-width: 1024px) {
  .tl-layout { grid-template-columns: 4fr 8fr !important; }
  .tl-sidebar { position: sticky; top: 100px; }
  .ctrl-grid { grid-template-columns: 4fr 5fr 3fr !important; }
}

.tl-aside-card {
  background: white;
  border-radius: 28px;
  border: 1px solid #e7e5e4;
  padding: 1.5rem;
  box-shadow: 0 4px 20px -2px rgba(148, 163, 184, 0.12);
  margin-bottom: 1.5rem;
}

.tl-card-hover:hover {
  background: rgba(248, 250, 252, 0.4) !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
}
.tl-title-hover:hover { color: #ec4899 !important; }

.scroll-pop-card {
  opacity: 0;
  transform: translateY(50px) scale(0.97);
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.15);
}
.scroll-pop-card.revealed {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.timeline-list-move,
.timeline-list-enter-active,
.timeline-list-leave-active {
  transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.timeline-list-enter-from { opacity: 0; transform: scale(0.9) translateY(40px); }
.timeline-list-leave-to { opacity: 0; transform: scale(0.85) translateY(-30px); }
.timeline-list-leave-active { position: absolute; width: 100%; }
</style>
