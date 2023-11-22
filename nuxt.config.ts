import { defineNuxtConfig } from 'nuxt'

export default {
  buildModules: [
    '@nuxtjs/sanity',
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity',
  ],
  googleFonts: {
    families: {
      'IBM Plex Mono': [500, 700],
      Inter: [500, 700, 800],
      'PT Serif': [400, 700],
    },
    download: true,
    inject: true,
  },
  sanity: {
    projectId: 'o114okr0',
    dataset: 'production',
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2021-03-25',
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      'postcss-nested': {},
    },
  },
};
