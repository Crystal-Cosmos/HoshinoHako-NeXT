import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/lessons/",
  "/res/",
  {
    text: "常用网站",
    icon: "compass",
    children: [
      {
        text: "Launchpad固件助手",
        icon: "earth-america",
        link: "https://lfu.arkitosekai.net",
      },
      {
        text: "在线游玩Unipad工程",
        icon: "/assets/icon/play203logo-16.ico",
        link: "https://play.203.io",
      },
    ],
  },
  {
    text: "关于",
    link: "/about/",
    icon: "circle-info",
  },
  "/support/",
//  {
//    text: "TEST",
//    icon: "lightbulb",
//    prefix: "/guide/",
//    children: [
//      {
//        text: "Bar",
//        icon: "lightbulb",
//        prefix: "bar/",
//        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
//      },
//      {
//        text: "Foo",
//        icon: "lightbulb",
//        prefix: "foo/",
//        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
//      },
//    ],
//  },
//  {
//   text: "V2 文档",
//    icon: "book",
//    link: "https://theme-hope.vuejs.press/zh/",
//  },//
]);
