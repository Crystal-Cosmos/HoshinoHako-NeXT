---
title: 如何更新Launchpad固件
description: 如何更新Launchpad固件
icon: 
---
在游玩Launchpad前你首先需要确定你的固件是否是最新的，如果是旧版本的固件可能会导致Bug，或者说灯光不稳定之类的问题，这篇文章叫你如何升级你的固件

::: warning
请务必在升级确保你已经安装好了USB驱动，并关闭Ableton Live以及所有需要用到MIDI的软件，还有退出所有的杀毒软件
:::

## Launchpad MK3系列
MK3系列采用了WebApp的模式进行设备的管理，也就是Novation Components，只需要访问网页你就可以对Launchpad进行一系列的设置与修改，比方说添加自定义模式，更新等等，免去了采用软件的形式，当然它也是有独立的软件版本（基于Electron），需要你注册Novation账户将你的设备绑定至账户才可下载

### 如何更新？
首先你需要访问[Novation Components](https://components.novationmusic.com/)
第一次打开请点击“Yes，I Agree”同意获取Cookie，其次如果浏览器提示你访问MIDI设备请允许它：
![img =800x](/images/tutorial/components-cookies.png)

![img =400x](/images/tutorial/chrome-allow-midi.png)

然后插上你的设备，他会自动识别，点击进入设置页，这时如果你的固件版本过低，Components会自动弹出窗口提醒你更新

![img =400x](/images/tutorial/components-states.png)

更新时需要你手动确认一次，他会提示你按哪个按键，按下它显示的按键即可开始升级，升级完成后Launchpad会自动重启

![img =400x](/images/tutorial/components-update-agree.png)

至此你就完成了升级

### 我无法访问Novation Components，有别的方法吗？

Novation Components采用国外的服务器，国内由于国情访问速度非常慢甚至打不开，在这种情况下你可以尝试手动更新固件

::: warning
本文可能会有点超纲，请仔细观看理解
:::

首先你需要下载固件，[转到下载](/res/fwupdater)

下载完成后访问[Launchpad固件助手](https://lfu.arkitosekai.net)，等待网页加载好后输入科乐美秘籍

`
敲击键盘的箭头
↑，↑，↓，↓，←，→，←，→，
`

然后再下拉框里选择“自定义SysEx文件”，选择你刚下载固件文件，确定

![img =200x](/images/tutorial/lfu-sysex.png)

![img =550x](/images/tutorial/lfu-choose.png)

接着根据页面显示操作即可，之后你的Launchpad会自动重启

![img =1000x](/images/tutorial/lfu-bl.png)

至此你的固件升级完毕，如果卡在BL界面没有反应就拔了再插一遍，不要担心它刷成砖

## Launchpad MK2/MK1系列

MK2/MK1还维持着比较老的方法，每个固件都需要单独下载自己安装

你可以前往官网寻找你自己的型号后下载更新程序：[官网](https://downloads.novationmusic.com/novation)

如果你无法访问官网你可以直接在星之箱下载: [跳转](/res/fwupdater)

下载好后插入Launchpad，然后打开升级程序，点击确定后等待他完成升级

![img =400x](/images/tutorial/lppromk1-updater.png)

![img =300x](/images/tutorial/lppromk1-updater-progress.png)

至此你就完成了升级