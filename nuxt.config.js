module.exports = {
  mode: 'spa',
  head: {
    title: 'dd5tools',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'tool for twilight the game club' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  devModules:[
    '@nuxtjs/vuetify',
  ],
  plugins: [
    "~/plugins/components.js",
  ],
  router: {
    middleware: ["firebase"],
  },
  // router: {
  //   middleware: ["firebase"],
  // },
};
