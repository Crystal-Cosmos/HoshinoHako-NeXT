import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"
import { path } from '@vuepress/utils';

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "星の箱",
  description: "专为Launchpadder打造的工具箱",
  theme,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});