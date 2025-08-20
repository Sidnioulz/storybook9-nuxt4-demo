const config = {
  stories: ['../app/**/*.mdx', '../app/**/*.stories.ts'],

  addons: [
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },

  docs: {},
}

export default config
