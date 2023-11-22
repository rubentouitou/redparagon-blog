import { updateAppConfig } from '#app'
import { defuFn } from '/Users/ruben/GitHub/redparagon-blog/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
let hotUpdateApplied = false;

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    if (!hotUpdateApplied) {
      updateAppConfig(newModule.default);
      hotUpdateApplied = true;
    }
  });
}

export default /* #__PURE__ */ defuFn(inlineConfig)
