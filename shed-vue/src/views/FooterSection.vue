<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

function randomFriend() {
  window.open('https://www.travellings.cn/go.html', '_blank')
}
</script>

<template>
  <footer id="footer" style="background: #10172a; color: #94a3b8; padding: 4rem 0;">
    <div style="max-width: 80rem; margin: 0 auto; padding: 0 1rem;">
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem;">
        <!-- Logo -->
        <div style="text-align: left;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 1rem;">
            <div style="width: 32px; height: 32px; border-radius: 12px; background: linear-gradient(to top right, #4f8bae, #92cdd6); display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;">❄</div>
            <span style="color: white; font-weight: 900; font-size: 20px; letter-spacing: 0.05em; font-family: monospace;">Eysnter<span style="color: #f472b6; font-weight: bold;">.cn</span></span>
          </div>
          <p style="font-size: 12px; color: #64748b;">{{ t('footer.copyright') }}</p>
          <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px; color: #64748b; margin-top: 8px;">
            <a href="https://beian.miit.gov.cn/" target="_blank" style="color: #64748b; text-decoration: none;">{{ t('footer.icp') }}</a>
            <a href="https://www.beian.gov.cn/" target="_blank" style="color: #64748b; text-decoration: none; display: flex; align-items: center; gap: 4px;">
              <img src="/images/gonganlogo.png" style="width: 14px; height: 14px;">
              <span>{{ t('footer.police') }}</span>
            </a>
          </div>
        </div>

        <!-- 导航 -->
        <div style="text-align: left;">
          <h5 style="font-weight: 800; color: white; font-size: 14px; margin-bottom: 1rem;">{{ t('footer.navTitle') }}</h5>
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 12px;">
            <li><a href="#ask" style="color: #94a3b8; text-decoration: none;">{{ t('footer.nav.ask') }}</a></li>
            <li><a href="#rec" style="color: #94a3b8; text-decoration: none;">{{ t('footer.nav.rec') }}</a></li>
            <li><a href="#blog" style="color: #94a3b8; text-decoration: none;">{{ t('footer.nav.blog') }}</a></li>
            <li><a href="#api" style="color: #94a3b8; text-decoration: none;">{{ t('footer.nav.api') }}</a></li>
          </ul>
        </div>

        <!-- 友链 -->
        <div style="text-align: left;">
          <h5 style="font-weight: 800; color: white; font-size: 14px; margin-bottom: 1rem;">{{ t('footer.friendsTitle') }}</h5>
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 12px;">
            <li><button @click="randomFriend" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 12px; padding: 0;">✨ {{ t('footer.friends.random') }}</button></li>
            <li><a href="#ask" style="color: #94a3b8; text-decoration: none;">{{ t('footer.friends.more') }}</a></li>
          </ul>
        </div>

        <!-- 社交 -->
        <div style="text-align: left;">
          <h5 style="font-weight: 800; color: white; font-size: 14px; margin-bottom: 1rem;">{{ t('footer.socialTitle') }}</h5>
          <div style="display: flex; gap: 1rem;">
            <a href="https://github.com/Eysnter" target="_blank" style="width: 36px; height: 36px; border-radius: 9999px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 16px;" title="Github">🐙</a>
            <a href="https://pixiv.net" target="_blank" style="width: 36px; height: 36px; border-radius: 9999px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 16px;" title="Pixiv">🎨</a>
            <a href="https://space.bilibili.com" target="_blank" style="width: 36px; height: 36px; border-radius: 9999px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 16px;" title="Bilibili">📺</a>
            <a href="https://x.com" target="_blank" style="width: 36px; height: 36px; border-radius: 9999px; background: #1e293b; color: white; display: flex; align-items: center; justify-content: center; text-decoration: none; font-size: 16px;" title="Twitter">🐦</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
