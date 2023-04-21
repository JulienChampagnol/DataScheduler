import colors from 'vuetify/lib/util/colors'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: process.env.NODE_ENV === 'production' ? 'api.share-twin.com:443' : 'localhost:80',
      VIEWER_PROTOCOL: process.env.NODE_ENV === 'production' ? 'wss' : 'ws',
      GEODE_PROTOCOL: process.env.NODE_ENV === 'production' ? 'https' : 'http',
      SITE_URL: process.env.SITE_URL,
      SITE_BRANCH: process.env.NODE_ENV === 'production' ? process.env.SITE_BRANCH : '',
      NODE_ENV: process.env.NODE_ENV,
    }
  },

  app: {
    head: {
      titleTemplate: 'Data Scheduler',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'Data scheduler' },
        { hid: 'description', name: 'description' }
      ],
      link: [
        { rel: 'icon', type: 'image/ico', href: '/icon_share_twin.ico' }
      ]
    }
  },
  devtools: process.env.NODE_ENV === 'production' ? false : true,
  ssr: false,
  target: 'static',

  // ** Customize the progress-bar color
  loading: { color: '#fff' },

  // ** Global CSS
  css: ['vuetify/lib/styles/main.sass'],

  // ** Nuxt.js modules
  modules:
    [
      ['@pinia/nuxt',
        {
          autoImports: [
            'storeToRefs',
          ],
        }],
    ],

  // ** Build configuration
  build: {
    transpile: ['vuetify'],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['md-linedivider'].includes(tag)
    }
  },
  nitro: {
    preset: 'netlify'
  }
})
