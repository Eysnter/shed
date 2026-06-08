<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../stores/language'

const { locale } = useI18n()
const langStore = useLanguageStore()

// 语言状态：与模板完全一致
const currentLang = ref(langStore.current)
const { t } = useI18n()

// 同步语言切换
import { watch } from 'vue'
watch(() => langStore.current, (val) => {
  currentLang.value = val
  locale.value = val
})

// ===== 代码实力 (与模板2完全一致) =====
const isBoosted = ref(false)
const skills = ref([
  { name: "Java学习", nameJa: "Java開発", target: 85, gradientClass: "from-[#4f8bae]/40 to-[#4f8bae]" },
  { name: "Python / 标书查重系统", nameJa: "Python / システム開発", target: 50, gradientClass: "from-[#92cdd6]/40 to-pink-400" },
  { name: "JavaWeb开发", nameJa: "JavaWebスタック", target: 75, gradientClass: "from-emerald-300/40 to-teal-400" }
])

// ===== 箴言便签 (与模板2完全一致) =====
const vanitasIdx = ref(0)
const vanitasQuotes = [
  {
    title: "“ Vanitas vanitatum, et omnia vanitas. ”",
    zh: "即便一切都是虚无，即便任何挣扎可能都毫无意义，我也绝对不会向虚无妥协，更不会停下敲击键盘的双手。为了守护住心中最温暖重要的冰屋避风港，艾斯特会一直战斗并敲出完美运行的代码！",
    ja: "すべてが虚無だとしても、私は戦うことを諦めないし、コードを書く手も止めない。大切なイグルーを守るため、エイスターはこれからも完璧に動くコードを書き続けます！"
  },
  {
    title: "“ Dum spiro, spero. ”",
    zh: "只要我还在呼吸，我就心怀希望。在漫长而枯燥的代码编译世界里，每一个敲下的字符，都是我向美好明天发出的微光。加油，艾斯特！",
    ja: "息をする限り、希望を持つ。果てしないコンパイルの世界で、私が打ち込むすべての文字が、美しい明日への光です。頑張れ、エイスター！"
  },
  {
    title: "“ Per aspera ad astra. ”",
    zh: "循此苦旅，终抵群星。Bug 再多、困难再大，只要心中有那一团炉火，冰屋里也会充满战胜一切的无限勇气和极客浪漫！",
    ja: "困難を乗り越えて星々へ。どんなにバグが多くとも、心に炉火があれば、イグルーは無限の勇気とロマンで満たされます！"
  },
  {
    title: "“ Sol lucet omnibus. ”",
    zh: "太阳照耀着每一个人。在这小小的数字温宿一隅，愿我写下的这行代码，能化作冬日里的一缕和煦日光，温暖每一个漂泊而至的灵魂。",
    ja: "太陽はすべての人を照らす。この小さなデジタル温宿で、私の書いたコードが冬の日の温かい陽光となり、訪れるすべての魂を温めますように。"
  }
]

// ===== 阿梓配音唱片机 (与模板2完全一致) =====
const azusaIdx = ref(0)
const azusaActive = ref(false)
const azusaQuotes = [
  { zh: "“ 无论未来如何，老师，我也绝对不会放弃挣扎的！ ”", ja: "“ どんな未来が待っていようと、先生、私は絶対に諦めない！ ”" },
  { zh: "“ 虚无之虚无，一切都是虚无...即便是这样，那又如何呢！ ”", ja: "“ 全ては虚無。……だとしても、それがどうしたというの！ ”" },
  { zh: "“ 老师，我的十字架和发卡...好看吗？ ”", ja: "“ 先生、私の十字架とピン……似合ってる、かな？ ”" },
  { zh: "“ 因为有老师在，日常，是会一直温柔延续的。 ”", ja: "“ 先生がいるから、私は信じられる。優しい日常が続くって。 ”" }
]

// ===== 功能函数 (与模板2完全一致) =====
function boostCodingMachine() {
  if (isBoosted.value) return
  isBoosted.value = true
  const bubbleContainer = document.getElementById('bubbleContainer')
  if (bubbleContainer) {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const bubble = document.createElement('div')
        bubble.className = 'bubble-particle'
        const size = Math.random() * 8 + 6
        bubble.style.width = size + 'px'
        bubble.style.height = size + 'px'
        bubble.style.left = Math.random() * 100 + '%'
        bubble.style.bottom = '10px'
        bubble.style.animationDelay = Math.random() * 0.5 + 's'
        bubbleContainer.appendChild(bubble)
        setTimeout(() => bubble.remove(), 1500)
      }, i * 100)
    }
  }
  setTimeout(() => { isBoosted.value = false }, 3500)
}

function triggerAzusaQuote() {
  if (azusaActive.value) return
  azusaActive.value = true
  setTimeout(() => {
    azusaActive.value = false
    azusaIdx.value = (azusaIdx.value + 1) % azusaQuotes.length
  }, 5400)
}

// 箴言自动轮播
let vanitasTimer = null
onMounted(() => {
  vanitasTimer = setInterval(() => {
    vanitasIdx.value = (vanitasIdx.value + 1) % vanitasQuotes.length
  }, 8500)
})
onUnmounted(() => {
  if (vanitasTimer) clearInterval(vanitasTimer)
})
</script>

<template>
  <!-- 简介区块 (与模板2完全一致的代码) -->
  <section id="about" class="py-20 md:py-28 bg-[#faf7f2]/95 backdrop-blur-sm relative overflow-hidden about-page">

    <!-- 手账本上方活页装订孔拟物效果 -->
    <div class="absolute top-0 left-0 right-0 h-8 flex justify-around px-8 pointer-events-none z-20">
      <div v-for="n in 8" :key="n" class="flex flex-col items-center">
        <div class="w-3.5 h-3.5 bg-[#eae3d8] rounded-full border border-stone-300 shadow-inner"></div>
        <div class="w-1.5 h-5 bg-gradient-to-b from-stone-400 to-transparent -translate-y-1"></div>
      </div>
    </div>

    <!-- 背景模糊光圈饰件 -->
    <div class="blur-orb w-[300px] h-[300px] bg-rose-200/50 top-24 left-10"></div>
    <div class="blur-orb w-[250px] h-[250px] bg-sky-200/50 bottom-24 right-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-4">

      <!-- 标题 Header 装饰纸带 -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-20 relative">
        <div class="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-10 bg-pink-100/50 rounded-lg skew-x-12 -rotate-2 pointer-events-none"></div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight flex items-center justify-center gap-2.5 relative">
          <span class="text-[#4f8bae]">
            <span v-if="currentLang === 'zh'">🌺 关于 艾斯特</span>
            <span v-else>🌺 エイスターについて</span>
          </span>
        </h2>

        <!-- 精致的手账随记悬挂泡泡 -->
        <div class="p-6 rounded-[24px_32px_20px_36px] bg-white border border-pink-100/50 shadow-sm italic text-slate-600 text-sm md:text-base leading-relaxed relative">
          <div class="clip-deco -top-5 left-12 rotate-[15deg]"></div>
          <span v-if="currentLang === 'zh'">&ldquo; 才不是<ruby><rb>雪</rb><rt>ユキ</rt></ruby><ruby><rb>梨</rb><rt>ナシ</rt></ruby>，也不是晴天娃娃！真是的～人家叫·<ruby><rb>艾</rb><rt>EY</rt></ruby><ruby><rb>斯</rb><rt>SN</rt></ruby><ruby><rb>特</rb><rt>TER</rt></ruby>·哦！嘟——艾斯特气鼓鼓地纠正道 &rdquo;</span>
          <span v-else>&ldquo; 雪梨（ゆきなし）大福でも、てるてる坊主でもないもん！ぷー、あたしは『エイスター』だよ！とエイスターはふくれっ面で言った。 &rdquo;</span>
        </div>
      </div>

      <!-- 完美配平布局的 Grid 栅格网格 -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        <!-- 左半部：艾斯特手稿组合 (Scrapbook Area) -->
        <div class="lg:col-span-7 space-y-8">

          <!-- 极富设计感的古着吊牌挂签 (Vintage Gift Tag) -->
          <div class="bg-white p-8 border border-stone-200 shadow-sm relative rounded-[20px] transition-all hover:shadow-md hover:translate-y-[-2px] duration-300">
            <!-- 拟真麻绳扣吊牌悬挂结 (SVG 绘图) -->
            <div class="absolute -top-5 left-8 w-10 h-10 pointer-events-none z-20">
              <svg viewBox="0 0 40 40" class="w-full h-full">
                <circle cx="20" cy="24" r="3.5" fill="#a1a1aa" stroke="#fff" stroke-width="1.5" />
                <path d="M 20,20 C 20,10 12,12 18,2" stroke="#b4a08f" stroke-width="1.5" fill="none" />
                <path d="M 20,20 C 20,10 28,12 22,2" stroke="#b4a08f" stroke-width="1.5" fill="none" />
              </svg>
            </div>
            <div class="tape-deco tape-deco-pink -top-2 right-14 rotate-[3deg]"></div>

            <div class="flex items-center gap-3 mb-6 pt-2">
              <span class="text-2xl font-black text-slate-800">
                <ruby><rb>艾斯特</rb><rt v-if="currentLang === 'zh'">エイスター / Eysnter</rt><rt v-else>Eysnter / エイスター</rt></ruby>
              </span>
              <span class="px-3 py-0.5 text-xs rounded-full bg-[#e6f2f7] text-[#4f8bae] font-bold border border-blue-200/30">@Eysnter</span>
            </div>

            <!-- 温暖多姿的列表内容 (响应语言切换) -->
            <div class="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
              <div v-if="currentLang === 'zh'" class="space-y-3.5">
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">👋</span>
                  <span>幸识吖！这里是<strong>艾斯特</strong>，请多指教~ <span class="text-xs text-[#4f8bae] font-bold bg-[#e6f2f7] px-2 py-0.5 rounded-full ml-1">超级大鞠躬！</span></span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">📍</span>
                  <span>坐标<strong>湖北十堰</strong>，非常欢迎大家来我的家乡玩耍 🏔️。</span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">🎮</span>
                  <span>兴趣：打游戏、刷番，以及疯狂贴贴各种可爱的纸面美少女。</span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">💰</span>
                  <span>梦想：对"钱钱"有着极度狂热的兴趣，努力向<ruby><rb>富婆</rb><rt>进化中...</rt></ruby>进化中 <span class="text-pink-400 font-bold">(✧∇✧)</span></span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">💻</span>
                  <span>属性：一个偶尔被 Bug 气到抓狂、但绝大多数时候极其无情的<strong>敲代码机器Coding Machine</strong>。</span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">🍿</span>
                  <span>美食：各种热气腾腾的小火锅、甜甜的零食，是写代码时最不可缺少的燃料！</span>
                </p>
              </div>
              <div v-else class="space-y-3.5">
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">👋</span>
                  <span>はじめまして！<strong>エイスター</strong>です、どうぞよろしくお願いします～ <span class="text-xs text-[#4f8bae] font-bold bg-[#e6f2f7] px-2 py-0.5 rounded-full ml-1">深々とお辞儀！</span></span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">📍</span>
                  <span>所在地は<strong>湖北省十堰市</strong>。ぜひ私の故郷に遊びに来てくださいね 🏔️。</span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">🎮</span>
                  <span>趣味：ゲーム、アニメ鑑賞、インテリア、そして可愛い二次元美少女たちとイチャイチャすること。</span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">💰</span>
                  <span>夢：「お金」に異常なほどの執念を燃やし、ただいま<ruby><rb>富豪女子</rb><rt>セレブ</rt></ruby>へ進化中！ <span class="text-pink-400 font-bold">(✧∇✧)</span></span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">💻</span>
                  <span>属性：たまにバグで発狂するけれど、普段は極めて冷酷な<strong>コーディングマシーン</strong>。</span>
                </p>
                <p class="flex items-start gap-2.5">
                  <span class="text-lg">🍿</span>
                  <span>グルメ：温かいお鍋、甘いお菓子は、コードを書くときに欠かせないエネルギー源！</span>
                </p>
              </div>
            </div>
          </div>

          <!-- 拟物手作便贴纸网格 (Post-it Card Grid) -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            <!-- 便签 1：生日 -->
            <div class="p-4 bg-[#fffef0] border border-yellow-200/50 shadow-sm transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 relative">
              <div class="tape-deco w-12 h-4 -top-2 left-6 rotate-[10deg] opacity-75"></div>
              <p class="text-[11px] text-amber-700/80 font-black">
                <span v-if="currentLang === 'zh'">🎂 生日</span><span v-else>🎂 誕生日</span>
              </p>
              <p class="text-base font-black text-slate-800 mt-1 font-mono">27 Dec.</p>
            </div>

            <!-- 便签 2：年龄 -->
            <div class="p-4 bg-[#fbf5ff] border border-purple-200/50 shadow-sm transform rotate-[1.5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div class="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#faf7f2] rounded-full border border-purple-200/50"></div>
              <div class="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#faf7f2] rounded-full border border-purple-200/50"></div>
              <p class="text-[11px] text-purple-700/80 font-black">
                <span v-if="currentLang === 'zh'">🔒 年龄</span><span v-else>🔒 年齢</span>
              </p>
              <p class="text-base font-black text-slate-800 mt-1 font-mono">Secret</p>
            </div>

            <!-- 便签 3：坐标 -->
            <div class="p-4 bg-white border-2 border-dashed border-sky-200 shadow-sm transform rotate-[-1deg] hover:rotate-0 hover:scale-105 transition-all duration-300 relative stamp-deco">
              <p class="text-[11px] text-sky-700/80 font-black">
                <span v-if="currentLang === 'zh'">📍 坐标</span><span v-else>📍 所在地</span>
              </p>
              <p class="text-xs font-black text-slate-800 mt-1.5">
                <span v-if="currentLang === 'zh'">湖北十堰</span><span v-else>中国 十堰市</span>
              </p>
            </div>

            <!-- 便签 4：本命 -->
            <div class="p-3 bg-[#fff5f6] border border-pink-200 shadow-sm transform rotate-[2.5deg] hover:rotate-0 hover:scale-105 transition-all duration-300 text-center relative">
              <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-md z-10"></div>
              <p class="text-[10px] text-pink-600/80 font-black mb-1">
                <span v-if="currentLang === 'zh'">🌸 本命</span><span v-else>🌸 推し</span>
              </p>
              <span class="text-[10px] font-black bg-pink-100/50 text-pink-500 px-1 py-0.5 rounded border border-pink-200/30">白洲梓</span>
            </div>
          </div>

          <!-- 燃料储备 (交互式代码机水平) -->
          <div id="fuelBoard" class="p-8 bg-white border-4 border-[#ebd8cc] shadow-sm relative rounded-[28px] space-y-6 transform transition-all duration-300 hover:shadow-md">
            <div class="clip-deco -top-5 right-14 rotate-[-12deg]"></div>

            <!-- 动态浮动水晶气泡容器 -->
            <div id="bubbleContainer" class="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-3xl"></div>

            <div class="flex items-center justify-between border-b border-dashed border-slate-200 pb-3 relative z-10">
              <div class="flex items-center gap-2">
                <span class="text-lg">⚡</span>
                <h4 class="font-extrabold text-slate-800 text-sm sm:text-base">
                  <span v-if="currentLang === 'zh'">无情代码机的燃料储备</span>
                  <span v-else>無情なコードマシンの燃料供給</span>
                </h4>
              </div>
              <button @click="boostCodingMachine" class="px-4 py-1.5 text-xs rounded-full bg-pink-100/60 hover:bg-[#ffb5b5] text-pink-600 hover:text-white font-bold transition-all duration-300 active:scale-95 flex items-center gap-1.5 shadow-sm border border-pink-200/30">
                <i class="fa-solid fa-fire animate-pulse text-[10px]"></i>
                <span v-if="currentLang === 'zh'">喂燃料充能</span>
                <span v-else>燃料補給</span>
              </button>
            </div>

            <!-- 实力进度条：水彩晕染手绘风 -->
            <div class="space-y-4 relative z-10">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between text-xs font-bold text-slate-500 mb-1.5">
                  <span>{{ currentLang === 'zh' ? skill.name : skill.nameJa }}</span>
                  <span class="skill-pct font-mono font-bold transition-all duration-500" :class="isBoosted ? 'text-rose-500 scale-110' : 'text-[#4f8bae]'">
                    {{ isBoosted ? '100% 🔥' : skill.target + '%' }}
                  </span>
                </div>
                <div class="w-full h-3 rounded-full overflow-hidden waterwash-bar p-[1.5px]" :class="{ 'fuel-activated': isBoosted }">
                  <div class="bg-gradient-to-r h-full rounded-full transition-all duration-1000 ease-out"
                       :class="skill.gradientClass"
                       :style="{ width: isBoosted ? '100%' : skill.target + '%' }"></div>
                </div>
              </div>
            </div>

            <!-- 虚无但顽强的阿梓主义便签 (中日双语自动轮播) -->
            <div class="p-5 bg-[#faf8f5] rounded-2xl border-l-4 border-[#4f8bae] text-xs sm:text-sm text-slate-600 space-y-2 relative overflow-hidden z-10 min-h-[140px]">
              <div class="absolute -right-2 -bottom-2 text-slate-200/30 text-5xl pointer-events-none font-serif">&ldquo;</div>
              <div class="transition-all duration-500 ease-in-out">
                <div class="text-[#4f8bae] font-bold font-mono text-xs sm:text-sm tracking-wide">
                  {{ vanitasQuotes[vanitasIdx].title }}
                </div>
                <p class="leading-relaxed italic mt-2 text-slate-500 text-xs sm:text-sm">
                  <span v-if="currentLang === 'zh'">{{ vanitasQuotes[vanitasIdx].zh }}</span>
                  <span v-else>{{ vanitasQuotes[vanitasIdx].ja }}</span>
                </p>
              </div>
            </div>
          </div>
        </div> <!-- [左半部 lg:col-span-7 结束] -->

        <!-- 右半部：白洲梓手账圣殿 (The Sanctuary Room) -->
        <div class="lg:col-span-5 flex flex-col gap-6 relative">

          <!-- 拍立得相框 -->
          <div class="relative w-full max-w-[340px] mx-auto p-4">
            <!-- 镂空蕾丝花边衬底 (Doily Paper) -->
            <div class="absolute inset-0 lace-doily rounded-full transform rotate-[-8deg] scale-95 opacity-60 z-0"></div>

            <!-- 真实拍立得相框 -->
            <div class="relative overflow-hidden rounded-[28px] border-[8px] border-white shadow-xl bg-slate-50 group transform rotate-[1.5deg] hover:rotate-0 hover:scale-[1.03] transition-all duration-500 z-10">
              <div class="absolute top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full shadow-md z-30 flex items-center justify-center">
                <div class="w-1.5 h-1.5 bg-white/60 rounded-full -translate-x-[1px] -translate-y-[1px]"></div>
              </div>

              <div class="aspect-[3/4] relative overflow-hidden">
                <img src="https://img.eysnter.cn/file/MyFavrites/1780590949781_白洲梓.png" alt="白洲梓" class="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20"></div>
                <div class="absolute bottom-3 left-3 bg-black/60 text-white text-[10px] px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wider font-semibold z-20">
                  <span v-if="currentLang === 'zh'">支柱 · 白洲 梓</span><span v-else>白洲アズサ (BA)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 白洲梓圣三一女子学园机密手账 -->
          <div class="p-6 bg-white border border-stone-200/80 shadow-md rounded-[32px] relative overflow-hidden space-y-4">
            <div class="tape-deco -top-3 right-8 rotate-[2deg] bg-pink-100/70"></div>

            <!-- 垂落出底部的红色丝质书签缎带 -->
            <div class="absolute bottom-0 right-12 w-4 h-16 bg-rose-500 shadow-sm origin-top animate-bounce" style="animation-duration: 4s; clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%);"></div>

            <!-- 圣三一学园鸽子背景遮罩 -->
            <div class="absolute -right-4 -bottom-4 text-slate-100 pointer-events-none select-none text-9xl">
              <i class="fa-solid fa-dove opacity-20"></i>
            </div>

            <div class="flex items-center gap-2.5 border-b border-dashed border-slate-200 pb-2.5 relative z-10">
              <span class="text-lg">🕊️</span>
              <h4 class="font-extrabold text-slate-800 text-sm">
                <span v-if="currentLang === 'zh'">吾之本命 · 白洲梓 (BA - 阿梓)</span>
                <span v-else>私の推し · 白洲アズサについて</span>
              </h4>
            </div>

            <p class="text-xs text-slate-400 italic relative z-10">
              <span v-if="currentLang === 'zh'">是我最爱的《蔚蓝档案》"冰之魔女"白洲梓，也是我敲代码的精神支柱！</span>
              <span v-else>大好きなゲーム『ブルーアーカイブ』の「氷の魔女」、私のコーディングを支える精神的支柱です！</span>
            </p>

            <!-- 手绘质感列表细节 -->
            <div class="text-xs text-slate-600 space-y-3 leading-relaxed relative z-10 pb-4">
              <p class="flex gap-2">
                <span class="shrink-0 text-pink-400"><i class="fa-solid fa-clover"></i></span>
                <span>
                  <strong class="text-slate-800"><span v-if="currentLang === 'zh'">容貌：</span><span v-else>容姿：</span></strong>
                  <span v-if="currentLang === 'zh'">透明感淡紫银长发 + 澄澈双眸，傲娇又无辜的绝佳神情。</span>
                  <span v-else>透明感のある薄紫シルバーのロングヘアと澄んだ瞳、ツンデレで純真な愛らしい表情。</span>
                </span>
              </p>
              <p class="flex gap-2">
                <span class="shrink-0 text-purple-400"><i class="fa-solid fa-ribbon"></i></span>
                <span>
                  <strong class="text-slate-800"><span v-if="currentLang === 'zh'">细节：</span><span v-else>詳細：</span></strong>
                  <span v-if="currentLang === 'zh'">左侧别着紫罗兰金色发卡，脑后系着黑色大蝴蝶结。</span>
                  <span v-else>左側にスミレゴールドのヘアピンを飾り、後頭部には黒い大きなリボン。</span>
                </span>
              </p>
              <p class="flex gap-2">
                <span class="shrink-0 text-blue-400"><i class="fa-solid fa-cross"></i></span>
                <span>
                  <strong class="text-slate-800"><span v-if="currentLang === 'zh'">穿搭：</span><span v-else>衣装：</span></strong>
                  <span v-if="currentLang === 'zh'">经典圣三一黑白水手服连衣裙，缀有十字架与百合徽章。</span>
                  <span v-else>トリニティの伝統的な白黒のセーラーワンピースに十字架と百合の徽章。</span>
                </span>
              </p>
              <p class="flex gap-2">
                <span class="shrink-0 text-amber-400"><i class="fa-solid fa-heart"></i></span>
                <span>
                  <strong class="text-slate-800"><span v-if="currentLang === 'zh'">反差：</span><span v-else>ギャップ：</span></strong>
                  <span v-if="currentLang === 'zh'">身后是点缀着小花的纯白羽翼，怀里却紧抱着带有小恶魔爱心尾巴的黑白佩罗罗玩偶，反差萌瞬间拉满！</span>
                  <span v-else>背中の純白の小さな翼と、両手でぎゅっと抱きしめたデビル仕様のペロロのぬいぐるみとのギャップ萌え！</span>
                </span>
              </p>
            </div>
          </div>

          <!-- 阿梓的心情八音盒 (带有唱机针落下的物理感觉交互) -->
          <div id="gramophoneBox" class="p-4 bg-gradient-to-tr from-[#fff5f6] to-white border border-pink-200/50 shadow-sm rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3 cursor-pointer" @click="triggerAzusaQuote">
                <!-- 八音盒黑胶碟片 -->
                <div class="relative w-11 h-11 shrink-0 bg-slate-900 rounded-full flex items-center justify-center border-2 border-slate-700 shadow-inner"
                     :class="{ 'animate-spin-slow': azusaActive }"
                     style="animation-duration: 3s">
                  <div class="w-4 h-4 bg-pink-300 rounded-full border border-pink-400 flex items-center justify-center">
                    <div class="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                  </div>
                  <div class="absolute inset-1.5 border border-slate-800 rounded-full pointer-events-none"></div>
                  <div class="absolute inset-3 border border-slate-800/80 rounded-full pointer-events-none"></div>
                </div>

                <div>
                  <h5 class="text-xs font-black text-slate-800">
                    <span v-if="currentLang === 'zh'">阿梓的心情八音盒 🎵</span><span v-else>アズサのオルゴール 🎵</span>
                  </h5>
                  <p class="text-[10px] text-slate-400">
                    <span v-if="currentLang === 'zh'">点击触发阿梓的心情配音气泡</span><span v-else>クリックしてアズサのセリフを再生</span>
                  </p>
                </div>
              </div>

              <!-- 拟物唱针 -->
              <div class="relative w-12 h-10 shrink-0 pointer-events-none">
                <div class="absolute top-0 right-4 w-4 h-4 bg-amber-400/80 rounded-full border border-amber-500 shadow-sm"></div>
                <div class="absolute top-2 right-5 w-12 h-1 bg-gradient-to-l from-slate-400 to-slate-300 origin-right transition-transform duration-700 ease-out"
                     :style="{ transform: azusaActive ? 'rotate(0deg)' : 'rotate(-32deg)' }">
                  <div class="absolute left-0 -top-1 w-2.5 h-3 bg-slate-600 border border-slate-700 rounded-sm"></div>
                </div>
              </div>
            </div>

            <!-- 动态漫画对话气泡 -->
            <div class="mt-3 p-3 bg-white border border-pink-100 rounded-xl shadow-inner text-xs text-slate-600 transition-all duration-500 scale-0 opacity-0 transform origin-top-right relative"
                 :class="{ 'scale-100 opacity-100': azusaActive }">
              <div class="absolute -top-1.5 right-12 w-3 h-3 bg-white border-t border-l border-pink-100 transform rotate-45"></div>
              <p class="italic font-bold text-pink-500 text-xs">
                <span v-if="currentLang === 'zh'">{{ azusaQuotes[azusaIdx].zh }}</span>
                <span v-else>{{ azusaQuotes[azusaIdx].ja }}</span>
              </p>
            </div>
          </div>
        </div> <!-- [右半部 lg:col-span-5 结束] -->

      </div> <!-- [栅格布局 Container 结束] -->
    </div>
  </section>
</template>

<style>
.about-page {
  padding-top: 6rem;
}

/* 以下样式与模板2完全一致 */
.blur-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.14;
  pointer-events: none;
  z-index: 0;
  animation: orb-drift 22s infinite alternate ease-in-out;
}
@keyframes orb-drift {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(60px, 40px) scale(1.15); }
}

.tape-deco {
  position: absolute;
  height: 24px;
  width: 110px;
  background: rgba(254, 215, 170, 0.5);
  backdrop-filter: blur(1.5px);
  border-left: 3px dashed rgba(255,255,255,0.6);
  border-right: 3px dashed rgba(255,255,255,0.6);
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  z-index: 20;
  pointer-events: none;
}
.tape-deco-pink { background: rgba(252, 219, 222, 0.6); }

.clip-deco {
  position: absolute;
  width: 14px;
  height: 42px;
  border: 2px solid #94a3b8;
  border-radius: 10px;
  background: transparent;
  z-index: 30;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.08);
  pointer-events: none;
}
.clip-deco::before {
  content: '';
  position: absolute;
  top: 4px; left: 1px; right: 1px; bottom: 8px;
  border: 2px solid #94a3b8;
  border-radius: 8px;
}

.lace-doily {
  background-image: radial-gradient(circle, transparent 55%, #fbf8f5 56%), radial-gradient(circle, #fbf8f5 25%, transparent 26%);
  background-size: 16px 16px;
  border: 2px dashed #ece5df;
}

.stamp-deco {
  background-image:
    radial-gradient(circle at 0 50%, transparent 6px, white 6px),
    radial-gradient(circle at 100% 50%, transparent 6px, white 6px);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.waterwash-bar {
  background: linear-gradient(90deg, rgba(79, 139, 174, 0.1) 0%, rgba(146, 205, 214, 0.1) 100%);
  border: 1.5px dashed rgba(79, 139, 174, 0.25);
}

@keyframes fuel-glow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.fuel-activated {
  background: linear-gradient(270deg, #ffb5b5, #92cdd6, #e6f2f7, #ffd6e8);
  background-size: 400% 400%;
  animation: fuel-glow 2s ease infinite;
  border-style: solid !important;
  border-color: #ffb5b5 !important;
}

@keyframes bubble-rise {
  0% { transform: translateY(12px) scale(0.6); opacity: 0; }
  50% { opacity: 0.8; }
  100% { transform: translateY(-24px) scale(1.1); opacity: 0; }
}
.bubble-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 181, 181, 0.6);
  animation: bubble-rise 1.5s ease-out infinite;
  pointer-events: none;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow { animation: spin 10s linear infinite; }
</style>
