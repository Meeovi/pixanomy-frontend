<template>
  <div class="drawer-content">
    <v-list nav>
      <trendingMenu />

      <v-divider></v-divider>
      <footersidebarNav />
    </v-list>
  </div>
</template>

<script setup lang="ts">
  import {
    useTheme
  } from 'vuetify'
  import trendingMenu from './trendingMenu.vue'
  import footersidebarNav from './footersidebarNav.vue'

  // Drawer state is now controlled by the layout
  let theme: any = null
  try {
    theme = useTheme()
  } catch {
    theme = null
  }

  const STORAGE_KEY = 'elite-theme'

  // Theme is now initialized via plugins (server + client)
  // This watcher just ensures persistence when user toggles theme
  watch(
    () => theme?.global?.name?.value,
    (value) => {
      if (typeof localStorage === 'undefined') return
      if (value) {
        localStorage.setItem(STORAGE_KEY, value)
        document.documentElement.setAttribute('data-theme', value)
      }
    },
  )

  // Add theme toggling support for sidebar
  const isDark = computed(() => theme?.global?.name?.value === 'dark')

  function toggleDark() {
    if (!theme) return
    theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'
  }
</script>