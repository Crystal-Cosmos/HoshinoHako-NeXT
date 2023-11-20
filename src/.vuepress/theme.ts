import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://box.arkitosekai.net",

  author: {
    name: "Arkito",
    url: "https://space.bilibili.com/16215189",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/favicon.ico",

  repo: "arkitowho/hoshinohako",

  repoDisplay: false,

  docsDir: "src",

  fullscreen: false,

  print: false,

  hotReload: true,

  // navbar
  navbar,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  // sidebar
  sidebar,

  footer: "「Vanitas Vanitatum Et Omnia Vanitas」",

  displayFooter: true,

  lastUpdated: false,

  editLink: false,

  contributors: false,

  darkmode: "enable",

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    // You should generate and use your own comment service
    autoCatalog: true,
    comment: false,
    copyCode: {},
    copyright: {
      global: true,
      disableCopy: true,
      disableSelection: true,
      triggerLength: 1,
    },
    components: {
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "公告",
            content: "新版本：NeXT现已推送，如果遇到了Bug或者什么问题欢迎报告 <br/><br/> 本网站并未对手机做适配，会有很多不正常的页面布局，请尽量使用电脑访问哦",
            showOnce: true,
            confirm: true,
            actions: [
              {
                text: "知道了知道了别说了━━(￣ー￣*|||━━",
                type: "primary",
              },
            ],
            fullscreen: true,
          },
        ],
      },
      components: [
        "PDF",
      ],
    },
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      card: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: false,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
