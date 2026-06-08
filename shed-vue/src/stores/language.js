import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const current = ref('zh')

  function toggle() {
    current.value = current.value === 'zh' ? 'ja' : 'zh'
  }

  function setLang(lang) {
    current.value = lang
  }

  return { current, toggle, setLang }
})
