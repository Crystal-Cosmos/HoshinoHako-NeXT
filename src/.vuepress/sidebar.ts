import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "about",
    "tos",
    "changelog",
    "support",
  ],

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
    {
      text: "从零开始学习Launchpad with Ableton Live 12",
      collapsible: true,
      prefix: "zero2intro/",
      icon: "graduation-cap",
      children: [
        "01",
        "02",
        "03",
        "04",
      ],
    },
    {
      text: "从零开始学习Launchpad with Ableton Live 11",
      collapsible: true,
      prefix: "zero2intro-al11/",
      icon: "graduation-cap",
      children: [
        "01",
        "02",
        "03",
        "04",
      ],
    },
    {
      text: "从零开始工程制作",
      prefix: "make-proj/",
      collapsible: true,
      icon: "graduation-cap",
      children: [
        "noob",
        "intro",
        "advance",
      ],
    },
    {
      text: "其他教学",
      prefix: "others/",
      collapsible: true,
      icon: "graduation-cap",
      children: [
        "cfwmanual",
        "midiportset",
        "push2dev",
        "resetlive",
        "audiovisualization",
        "importvideo",
        "sai-installer",
        "unbrick",
      ],
    },
    "master-class",
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
