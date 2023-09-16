import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/res/": [
    {
      text: "常用工具下载",
      link: "README",
      icon: "download",
      children: [
        "amxd",
      ]
    },
  ],
  "/tutorial/": [
    {
      text: "从零开始学习",
      link: "README",
      icon: "graduation-cap",
      children: [
        "1",
      ]
    },
  ],
//  "/": [
//    "",
//    {
//      text: "案例",
//      icon: "laptop-code",
//      prefix: "demo/",
//      link: "demo/",
//      children: "structure",
//    },
//   {
//      text: "文档",
//      icon: "book",
//      prefix: "guide/",
//      children: "structure",
//    },
//    "slides",
//  ],
});
