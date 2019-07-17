const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nobelium With Added Ions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/@ionic/core@latest/css/ionic.bundle.css' },
      { rel: 'stylesheet', href: '@/assets/css/app.scss' }
    ],
    css: [
      '@/assets/css/app.scss'
    ],
    script: [
      { src: 'https://unpkg.com/@ionic/core@latest/dist/ionic.js' }
    ],
  },
    plugins: [ '~/plugins/webcomponents.js' ],

  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#607D8B' },
    loading: false,
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
