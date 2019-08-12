module.exports = {
  mode: 'spa',
  devModules: [
    '@nuxtjs/vuetify',
  ],
  router: {
    middleware: ["firebase"],
  },
  plugins: [
    '~/plugins/firebase',
    '~/plugins/components',
  ]
};
