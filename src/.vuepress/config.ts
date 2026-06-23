import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "星の箱",
  description: "专为中国Launchpadder打造的工具箱",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});