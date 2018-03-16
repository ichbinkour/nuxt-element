module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '{{ name }}',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '{{escape description }}'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#2a5fe1'},
  /*
  ** Add global styles
  */
  css: [
    // Main scss importing element-io
    '@/assets/scss/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Add plugins
   */
  plugins: [
    // Adds internationalization and global components
    '~/plugins/element-ui.js'
  ]
}
