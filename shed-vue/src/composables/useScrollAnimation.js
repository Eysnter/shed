import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollAnimation() {
  let observer = null

  onMounted(async () => {
    await nextTick()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.anim').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
