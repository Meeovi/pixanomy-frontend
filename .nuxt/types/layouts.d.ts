import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/sehilton/Documents/github/Portfolio/pixanomy-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}