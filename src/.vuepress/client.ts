import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
//import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import { inject } from "@vercel/analytics";
import Antd from "ant-design-vue";
import DownloadButton from "./components/DownloadButton.vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.use(Antd);
    app.component("DownloadButton", DownloadButton);
  },
  setup: () => {
    setupTransparentNavbar({
      type: "homepage",
      dark: "#ffffff",
    });

    if (typeof window !== "undefined") {
      inject({ framework: "vuepress" });
    }

    //setupRunningTimeFooter(
    //  new Date("2021-11-13"),
    //  {
    //    "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
    //  },
    //  true,
    //);
  },
});
