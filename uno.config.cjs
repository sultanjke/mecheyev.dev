const { presetIcons, presetUno, transformerVariantGroup, defineConfig } = require('unocss')
const { presetRadix } = require('unocss-preset-radix-ui-colors')
const { rules, shortcuts } = require('./uno-rules.cjs')
const phIcons = require('@iconify-json/ph/icons.json')
const svgSpinnerIcons = require('@iconify-json/svg-spinners/icons.json')
const logoIcons = require('@iconify-json/logos/icons.json')

module.exports = defineConfig({
  rules,
  shortcuts,
  theme: {
    color: {
      subdued: 'var(--rx-slate11)',
    },
    breakpoints: {
      xxs: '420px',
      xs: '480px',
      sm: '640px',
      md: '768px',
    },
  },
  transformers: [transformerVariantGroup()],
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetIcons({
      collections: {
        ph: phIcons,
        'svg-spinners': svgSpinnerIcons,
        logos: logoIcons,
      },
    }),
    presetRadix({
      prefix: '--rx-',
      aliases: {
        accent: 'cyan',
        base: 'slate',
        success: 'jade',
        warning: 'amber',
        error: 'tomato',
        info: 'blue',
      },
      useP3Colors: true,
      onlyOneTheme: 'dark',
      safelist: ['cyan8A'],
    }),
  ],
})
