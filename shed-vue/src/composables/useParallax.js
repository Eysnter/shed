import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax(containerRef) {
  const mouseX = ref(0)
  const mouseY = ref(0)

  function onMouseMove(e) {
    const rect = containerRef.value?.getBoundingClientRect()
    if (!rect) return
    mouseX.value = (e.clientX - rect.left - rect.width / 2) / rect.width
    mouseY.value = (e.clientY - rect.top - rect.height / 2) / rect.height
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })

  function getTransform(depth) {
    const x = mouseX.value * depth * -100
    const y = mouseY.value * depth * -100
    return `translate3d(${x}px, ${y}px, 0)`
  }

  return { mouseX, mouseY, getTransform }
}
