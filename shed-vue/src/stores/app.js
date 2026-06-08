import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const loading = ref(true)
  const friends = ref([])

  function setLoading(val) {
    loading.value = val
  }

  async function fetchFriends() {
    try {
      const res = await fetch('/api/x/get_friends/')
      const data = await res.json()
      friends.value = data.friends || []
    } catch {
      friends.value = []
    }
  }

  return { loading, friends, setLoading, fetchFriends }
})
