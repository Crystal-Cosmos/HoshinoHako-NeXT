---
title: Ableton Push 2 技术与设置流程
icon: 
---
::: warning
你需要一定的计算机基础与工程制作基础才能看懂此页
:::

## 触垫布局
默认为XY Layout

如果需要兼容Launchpad需要使用Project Manager或MIDI Manager转换为Drumpad Layout再制作工程

不需要兼容则默认即可

## 色板
默认与Launchpad不同 [(查看)](/res/palette#ableton-push-2默认色板) 但同为127色

如果需要兼容Launchpad可使用Project Manager或MIDI Manager转换为Novation Palette，使用Eyedrop加载色板后再制作工程

不需要兼容则默认即可

## 显示屏参数
分辨率：960x160

视频格式：MP4、MOV （已测试）

需要Push 2 Video Player、Push 2 Video Player (Master)

[下载Push 2 Video Player](https://da-1302821495.cos.ap-chengdu.myqcloud.com/amxd/Push%202%20Video%20Player.amxd)

[下载Push 2 Video Player (Master)](https://da-1302821495.cos.ap-chengdu.myqcloud.com/amxd/Push%202%20Video%20Player%20%28MASTER%29.amxd)

## 触控条灯光

::: tip
本条为Mac系统独占，暂未测试
:::

需要使用Push 2 Setting.mxf

[下载Push 2 Setting](https://da-1302821495.cos.ap-chengdu.myqcloud.com/amxd/Push2%20Settings.mxf)

## 设置流程
### macOS
无需其他设置

1.打开偏好设定，将Control Surface调为None，输入与输出都要

2.打开端口的Track轨道与Remote外部控制，输入输出都要

3.加载工程，设置输入输出时选择第一个端口，输出通道保持默认Ch1即可

### Windows
Windows由于Ableton并没有适配驱动，他没法同时与Max使用，故触摸条的灯光无法调用

如果要在显示屏里显示内容你需要往Max里装两个框架

* imp.push (显示屏控制脚本)
* VIDDLL  (视频播放引擎)

imp.push 你可以在这里 [下载](https://github.com/pixsperdavid/imp.push/releases)

下载完成后请将文件夹解压放入

`
%USERPROFILE%\Documents\Max 8\Packages
`

VIDDLL 则可以在Max菜单栏：`File - Show Package Manager`里下载

准备完成后工程设置方法同上述macOS

## 什么是Max？怎么打开
Max是一款数字音乐软件编程系统，其与Ableton Live深度结合，许多的内置效果器引擎都是Max。

Ableton Live自带Max无需额外安装，但你也可以再安装一个最新的版本，因为上述框架都有最低Max版本的限制，如果你的Live长期未更新它的Max版本也会很低导致不兼容框架

### 使用自带Max
你只需要进入以下目录

`
%ProgramData%\Ableton\Live 11 Suite\Resources\Max
`

双击Max.exe即可运行

::: tip
如果你是Live 10则上述路径要替换成Live 10 Suite

如果你安装时没装在默认位置你需要自行找到你安装的位置并打开，进入到Max目录
:::

### 使用外部独立版Max
你需要在官网下载 [跳转](https://cycling74.com/downloads)

下载完成后安装，建议保持默认安装路径不要修改

完成安装后你需要打开Live，然后打开偏好设定：`Folder-Max应用程序`在那一栏点击浏览，将路径改到你刚安装的独立版Max的安装路径

`
%ProgramFiles%\Cycling '74
`

确定然后重启Live即可，之后需要打开Max直接双击桌面快捷方式即可