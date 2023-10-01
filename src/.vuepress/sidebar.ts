import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/res/": [
    "software",
    "mobileapp",
    "amxd",
    "manual",
    "driver",
    "palette",
    "vfootage",
    "fwupdater",
  ],

  "/lessons/": [
    "t1",
    "t2",
  ],

  "/": [
    "contact",
    "support",
  ],
//  "/res/": [
//    {
//      text: "常用工具下载",
//      //link: "/README",
//      icon: "download",
//      children: [
//        "amxd",
//        "manual",
//      ]
//    },
//  ],
//  "/tutorial/": [
//    {
//      text: "从零开始学习",
//      //link: "README",
//      icon: "graduation-cap",
//      children: [
//        "1",
//      ]
//    },
//  ],
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
