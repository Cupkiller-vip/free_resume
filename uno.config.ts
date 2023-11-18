import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      collections: {
        ion: () =>
          import('@iconify-json/ion/icons.json').then((i) => i.default),
      },
    }),
  ],
});
