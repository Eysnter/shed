import { createI18n } from 'vue-i18n'
import zh from './zh'
import ja from './ja'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh, ja },
})

export default i18n
