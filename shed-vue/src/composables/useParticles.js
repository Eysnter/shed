import { onMounted, onUnmounted } from 'vue'

export function useParticles(canvasRef, options = {}) {
  const { maxParticles = 55, color = [255, 181, 181] } = options
  let particles = []
  let animFrame = null
  let mouseX = -1000
  let mouseY = -1000
  let resizeHandler, moveHandler, leaveHandler

  function init() {
    const canvas = canvasRef.value
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = Math.max(document.documentElement.scrollHeight, window.innerHeight)
    }
    resize()
    resizeHandler = resize
    window.addEventListener('resize', resize)

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3.5 + 1,
        d: Math.random() * maxParticles,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    moveHandler = (e) => { mouseX = e.pageX; mouseY = e.pageY }
    leaveHandler = () => { mouseX = -1000; mouseY = -1000 }
    window.addEventListener('mousemove', moveHandler)
    window.addEventListener('mouseleave', leaveHandler)

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < maxParticles; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true)
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${p.opacity})`
        ctx.fill()

        p.y += p.speed
        p.x += Math.sin(p.d / 10) * 0.4

        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          const force = (100 - dist) / 100
          p.x += (dx / dist) * force * 10
          p.y += (dy / dist) * force * 10
        }

        if (p.y > canvas.height) {
          particles[i] = {
            x: Math.random() * canvas.width,
            y: -10,
            r: p.r, d: p.d,
            speed: p.speed,
            opacity: p.opacity,
          }
        }
      }
      animFrame = requestAnimationFrame(draw)
    }
    draw()
  }

  onMounted(init)
  onUnmounted(() => {
    if (animFrame) cancelAnimationFrame(animFrame)
    if (resizeHandler) window.removeEventListener('resize', resizeHandler)
    if (moveHandler) window.removeEventListener('mousemove', moveHandler)
    if (leaveHandler) window.removeEventListener('mouseleave', leaveHandler)
  })
}
