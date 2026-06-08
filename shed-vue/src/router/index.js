import { createRouter, createWebHistory } from 'vue-router'

import HomeSection from '../views/HomeSection.vue'
import AboutSection from '../views/AboutSection.vue'
import TimelineSection from '../views/TimelineSection.vue'
import AskSection from '../views/AskSection.vue'
import RecSection from '../views/RecSection.vue'
import BlogSection from '../views/BlogSection.vue'
import ApiSection from '../views/ApiSection.vue'
import ContactSection from '../views/ContactSection.vue'

const routes = [
  { path: '/', name: 'home', component: HomeSection, meta: { title: '主页' } },
  { path: '/about', name: 'about', component: AboutSection, meta: { title: '简介' } },
  { path: '/journal', name: 'journal', component: TimelineSection, meta: { title: '小确幸手账' } },
  { path: '/ask', name: 'ask', component: AskSection, meta: { title: '棉花糖' } },
  { path: '/rec', name: 'rec', component: RecSection, meta: { title: '资源' } },
  { path: '/blog', name: 'blog', component: BlogSection, meta: { title: '工作台' } },
  { path: '/api', name: 'api', component: ApiSection, meta: { title: 'API' } },
  { path: '/contact', name: 'contact', component: ContactSection, meta: { title: '关于' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
