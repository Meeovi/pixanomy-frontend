<template>
  <div class="contentPage">
    <!--<div v-if="page?.slug === 'about-meeovi-account'"><about /></div>-->

    <div class="contentSection">
      <v-card elevation="0">
        <v-card-text v-html="page?.content"></v-card-text>

        <v-card-actions>
          <share />
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    watch
  } from 'vue'
  import share from '#social/app/components/blocks/share.vue'
  //import about from '../components/blocks/about.vue'

  const route = useRoute()
  const {
    $directus,
    $readItems,
  } = useNuxtApp()

  const {
    data: page
  } = await useAsyncData('page', async () => {
    const result = await $directus.request($readItems('pages', {
      filter: {
        slug: {
          _eq: `${route.params.slug}`
        }
      },
      fields: '*',
      limit: 1
    }))
    return Array.isArray(result) ? result[0] : null
  })

  watch(() => route.params.slug, async () => {
    await refreshNuxtData('page')
  })

  useHead({
    title: () => page.value?.name || 'Page',
  })

  useSeoMeta({
    title: () => page.value?.name || 'Page',
    description: () => page.value?.description || '',
    ogTitle: () => page.value?.name || 'Page',
    ogDescription: () => page.value?.description || '',
    twitterCard: 'summary_large_image',
  })

  defineOgImageComponent('Nuxt', {
    title: () => page.value?.name || 'Nuxt Commerce',
    description: () => page.value?.description ||
      'A high-performance, server-rendered E-commerce app built with Nuxt & Shopify',
    theme: '#4ADE80',
    headline: '',
    colorMode: 'dark',
  })
</script>