<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLoadingIndicator />
    <v-responsive class="border rounded">
          <v-app :theme="theme?.global?.name?.value" class="auto-text">
        <ClientOnly>
          <Header :drawer="drawer" @toggle-drawer="drawer = !drawer" />
        </ClientOnly>
        <OfflineAlert />
        <v-alert v-if="pwa?.offlineReady" type="success" density="compact" class="mb-2">
          App ready to work offline
        </v-alert>

        <v-main>
          <div class="page-wrapper">
            <v-navigation-drawer v-model="drawer" temporary>
              <sidebarnav />
              <v-spacer />
            </v-navigation-drawer>

            <div id="sidebarNav"></div>
            <div id="mainSection">
              <!--<announcements />-->

              <div class="contentPage">
                <slot />
              </div>
            </div>
          </div>

          <copyright />
          <!---->
        </v-main>
      </v-app>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
  import Header from '../components/menus/Header.vue'
  import sidebarnav from '../components/menus/sidebar/sidebarnav.vue'
  import copyright from '../components/blocks/copyright.vue'
  import mobileNav from '../components/menus/mobile/mobileNav.vue'
  import OfflineAlert from '#shared/app/components/alerts/OfflineAlert.vue'
  import {
    useTheme
  } from 'vuetify'

  const drawer = ref(false)
  let theme: any = null
  try {
    theme = useTheme()
  } catch {
    theme = null
  }

  const STORAGE_KEY = 'elite-theme'
  const pwa = usePWA()

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

  useHead({
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        key: 'theme-color',
        name: 'theme-color',
        content: process.env.NUXT_PUBLIC_APP_THEME_COLOR || '#ffffff'
      }
    ],
    link: [{
      rel: 'icon',
      href: '/favicon.ico'
    }],
    htmlAttrs: {
      lang: 'en'
    }
  })
</script>