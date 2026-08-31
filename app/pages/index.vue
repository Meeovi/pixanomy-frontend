<template>
    <div class="contentPage">
          <section data-bs-version="5.1" class="header3 cid-sqn8aWIxpX" id="header3-15">
    <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(187, 187, 187);"></div>

    <div class="align-center container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Pixanomy</strong></h1>
                
                <p class="mbr-text mbr-fonts-style display-7">All your creative media in one place.</p>
                
            </div>
        </div>
    </div>
</section>
            <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Latest Artwork for sale</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="(products, index) in latestArt" :key="index">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="fas fa-circle-xmark" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>

        <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Explore</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="(products, index) in products" :key="index">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="fas fa-circle-xmark" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>

        <section data-bs-version="5.1" class="mbr-section features20 cid-txNnCwzel4" id="features20-4t"
      data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-5">
          Website Templates</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>
        <v-sheet class="mx-auto">
          <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="(products, index) in templates" :key="index">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />

              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="fas fa-circle-xmark" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import productCard from '#commerce/app/components/catalog/product/productCard.vue'

    const model = ref(null)
  const {
    $directus,
    $readItems
  } = useNuxtApp()

  const {
    data: latestArt
  } = await useAsyncData('latestArt', () => {
    return $directus.request($readItems('products', {
      fields: ['*',
        'products.products_id.*',
        'products.products_id.image.*',
        'brands.brands_id.*',
        'image.*',
      ],
      limit: 10,
      filter: {
        status: {
          _eq: "published"
        },
        departments: {
            departments_id: {
                name: {
                    _eq: 'Art'
                }
            }
        }
      }
    }))
  })

  const {
    data: products
  } = await useAsyncData('products', () => {
    return $directus.request($readItems('products', {
      fields: ['*',
        'products.products_id.*',
        'products.products_id.image.*',
        'brands.brands_id.*',
        'image.*',
      ],
      limit: 10,
      filter: {
        status: {
          _eq: "published"
        },
        product_type: {
            product_type_id: {
                name: {
                    _eq: 'Image'
                }
            }
        }
      }
    }))
  })

  const {
    data: templates
  } = await useAsyncData('templates', () => {
    return $directus.request($readItems('products', {
      fields: ['*',
        'products.products_id.*',
        'products.products_id.image.*',
        'brands.brands_id.*',
        'image.*',
      ],
      limit: 10,
      filter: {
        status: {
          _eq: "published"
        },
        product_type: {
            product_type_id: {
                name: {
                    _eq: 'Template'
                }
            }
        }
      }
    }))
  })
</script>