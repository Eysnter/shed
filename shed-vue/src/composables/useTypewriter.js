import { ref, onMounted, onUnmounted, unref, watch } from 'vue'

export function useTypewriter(stringsRef, options = {}) {
  const { speed = 110, deleteSpeed = 40, pause = 2500 } = options
  const text = ref('')
  let stringIdx = 0
  let charIdx = 0
  let isDeleting = false
  let timer = null

  function getStrings() {
    const val = unref(stringsRef)
    return Array.isArray(val) ? val : [String(val)]
  }

  function tick() {
    const strings = getStrings()
    const current = strings[stringIdx] || ''
    if (isDeleting) {
      text.value = current.substring(0, charIdx - 1)
      charIdx--
    } else {
      text.value = current.substring(0, charIdx + 1)
      charIdx++
    }

    let delta = speed - Math.random() * 30
    if (isDeleting) delta = deleteSpeed

    if (!isDeleting && charIdx === current.length) {
      delta = pause
      isDeleting = true
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false
      stringIdx = (stringIdx + 1) % strings.length
      delta = 600
    }

    timer = setTimeout(tick, delta)
  }

  function start() {
    stop()
    charIdx = 0
    isDeleting = false
    stringIdx = 0
    text.value = ''
    tick()
  }

  function stop() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  onMounted(start)
  onUnmounted(stop)

  return { text, start, stop }
}
