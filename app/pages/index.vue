<template>
    <div class="contentPage">
<section data-bs-version="5.1" class="header19 cid-vvYicgPJ6g mbr-fullscreen mbr-parallax-background" id="header19-2p">

    

    
    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(35, 35, 35);">
    </div>

    <div class="container">
        <div class="media-container">
            <div class="col-md-12 align-center">
                <h1 class="mbr-section-title mbr-white mbr-bold mbr-fonts-style mb-3 display-1">
                    {{ homepage?.content?.[0]?.name }}</h1>
                <p class="mbr-text mbr-white mbr-fonts-style display-7" v-dompurify-html="homepage?.content?.[0]?.content"></p>
                <div class="mbr-section-btn align-center"><NuxtLink class="btn btn-primary display-4" :to="homepage?.content?.[0]?.url">{{ homepage?.content?.[0]?.url_name }}</NuxtLink></div>

                <div class="row justify-content-center">
                    <div class="item features-without-image col-12 col-md-3">
                        <div class="item-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-image-slider mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ homepage?.menus?.[0]?.name }}</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image col-12 col-md-3">
                        <div class="item-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-devices mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ homepage?.menus?.[1]?.name }}</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image col-12 col-md-3">
                        <div class="item-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-camera mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ homepage?.menus?.[2]?.name }}</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="item features-without-image col-12 col-md-3">
                        <div class="item-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-users mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>{{ homepage?.menus?.[3]?.name }}</strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features16 cid-vvYiecuZo5" id="features16-2q">

    

    
    
    <div class="container">
        <div class="content-wrapper">
            <div class="row align-items-center">
                <div class="col-12 col-lg">
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style display-2">
                            <strong>{{ homepage?.content?.[1]?.name }}</strong></h6>
                        <p class="mbr-text mbr-fonts-style mb-4 display-4" v-dompurify-html="homepage?.content?.[1]?.content"></p>
                        <div class="mbr-section-btn mt-3">
                            <NuxtLink class="btn btn-warning display-4" :to="homepage?.content?.[1]?.url" target="_blank">
                               {{ homepage?.content?.[1]?.url_name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="image-wrapper">
                        <img src="assets/images/screenshot-22-9-2026-18489-app.pixanomy.com-1160x554.jpg" alt="Pixanomy Files">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features17 cid-vvYiey8oxF" id="features17-2r">
    

    
    
    <div class="container">
        <div class="content-wrapper">
            <div class="row align-items-center">
                <div class="col-12 col-lg-6">
                    <div class="image-wrapper">
                        <img src="assets/images/screenshot-22-9-2026-184657-app.pixanomy.com-1160x554.jpg" alt="Pixanomy">
                    </div>
                </div>
                <div class="col-12 col-lg">
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style display-5">
                            <strong>{{ homepage?.content?.[2]?.name }}</strong></h6>
                        <p class="mbr-text mbr-fonts-style mb-4 display-4" v-dompurify-html="homepage?.content?.[2]?.content"></p>
                        <div class="mbr-section-btn mt-3"><NuxtLink class="btn btn-primary display-4" :to="homepage?.content?.[2]?.url" target="_blank">
                                {{ homepage?.content?.[2]?.url_name }}
                            </NuxtLink></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="features13 cid-vvYifS7tw3" id="features13-2s">

    

    <!--At a glance-->
    <div class="mbr-overlay" style="opacity: 0.8; background-color: rgb(255, 255, 255);">
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
                <div class="card-wrapper">
                    <div class="card-box align-left">
                        <h4 class="card-title mbr-fonts-style mb-4 display-2">
                            <strong>{{ homepage?.content?.[3]?.name }}</strong>
                        </h4>
                        <p class="mbr-text mbr-fonts-style mb-4 display-7" v-dompurify-html="homepage?.content?.[3]?.content"></p>
                        <div class="mbr-section-btn"><NuxtLink class="btn btn-primary display-4" :to="homepage?.content?.[3]?.url" target="_blank">
                                {{ homepage?.content?.[3]?.url_name }}
                            </NuxtLink></div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="item features-without-image">
                    <div class="item-wrapper mbr-flex">
                        <div class="icon-box">
                            <span class="mbr-iconfont mobi-mbri-globe-2 mobi-mbri"></span>
                        </div>
                        <div class="text-box">
                            <h4 class="icon-title mbr-black mbr-fonts-style display-7">
                                <strong>{{ homepage?.content?.[4]?.name }}</strong></h4>
                            <h5 class="icon-text mbr-black mbr-fonts-style display-4" v-dompurify-html="homepage?.content?.[4]?.content"></h5>
                        </div>
                    </div>
                </div>
                <div class="item features-without-image">
                    <div class="item-wrapper mbr-flex">
                        <div class="icon-box">
                            <span class="mbr-iconfont mobi-mbri-update mobi-mbri"></span>
                        </div>
                        <div class="text-box">
                            <h4 class="icon-title mbr-black mbr-fonts-style display-7">
                                <strong>{{ homepage?.content?.[5]?.name }}</strong></h4>
                            <h5 class="icon-text mbr-black mbr-fonts-style display-4" v-dompurify-html="homepage?.content?.[5]?.content"></h5>
                        </div>
                    </div>
                </div>
                <div class="item features-without-image">
                    <div class="item-wrapper mbr-flex">
                        <div class="icon-box">
                            <span class="mbr-iconfont mobi-mbri-user-2 mobi-mbri"></span>
                        </div>
                        <div class="text-box">
                            <h4 class="icon-title mbr-black mbr-fonts-style display-7">
                                <strong>{{ homepage?.content?.[6]?.name }}</strong></h4>
                            <h5 class="icon-text mbr-black mbr-fonts-style display-4" v-dompurify-html="homepage?.content?.[6]?.content"></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" class="info3 cid-vvYigXaOUm" id="info3-2t">

    

    
    <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="card col-12 col-lg-10">
                <div class="card-wrapper">
                    <div class="card-box align-center">
                        <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                            <strong>{{ homepage?.content?.[7]?.name }}</strong></h4>
                        <p class="mbr-text mbr-fonts-style mb-4 display-7" v-dompurify-html="homepage?.content?.[7]?.content">
                        </p>
                        <div class="mbr-section-btn mt-3"><NuxtLink class="btn btn-warning display-4" :to="homepage?.content?.[7]?.url" target="_blank">
                                {{ homepage?.content?.[7]?.url_name }}
                            </NuxtLink></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null)
  const {
    $directus,
    $readItem,
    $readItems
  } = useNuxtApp()

  const {
    data: homepage
  } = await useAsyncData('homepage', () => {
    return $directus.request($readItem('page_blocks', '24', {
      fields: ['*',
        'media.*',
      ],
    }))
  })

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

  useHead({
    title: 'Welcome to Pixanomy - All your creative media in one place',
    meta: [
      {
        name: 'description',
        content: 'Pixanomy is a platform that allows you to manage and showcase all your creative media in one place. Discover a wide range of products, templates, and art to enhance your creative projects.'
      },
      {
        name: 'keywords',
        content: 'Pixanomy, creative media, products, templates, art, showcase, manage media, creative projects'
      }
    ]
  })
</script>