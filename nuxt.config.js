
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'santa-s4nt4',
    titleTemplate:  'santa-s4nt4 | %s',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@santa_s4nt4' },
      { hid: 'og:type', property: 'og:type', content: 'portfolio' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'santa-s4nt4'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://s4nt4.graphics/'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'web portfolio of santa-s4nt4'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://lh3.googleusercontent.com/HfYYJQrNLaxxTvRmNGNM33GqA5B22d8vbVx-q1AMj-Rah10qaROfuWLz95SRISUr7nMQRCD1fzuPfn9Y4AOkwLxJ9WUa2QyyqV2WXSl53lwfgB9G202er0OHqox4R3vfkgZJlZE5OLw=w2400'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'santa-s4nt4' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_santa.png' }
    ],
    script: [
      { src: 'https://use.typekit.net/krb5kuj.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
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
