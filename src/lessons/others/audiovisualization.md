---
title: 在Launchpad上创建音频可视化
description: 在Launchpad上创建音频可视化
icon: 
---
## 前言
Launchpad上生成音频可视化是一个比较小众的玩法，如果你有多个Launchpad Pad，你可以闲着没事的时候把他放在背景板，然后播放音乐来创建可视化。那我们就开始吧

## 获取Echo
[点此跳转下载页](/res/amxd)

Echo是由Kaskobi开发的Max For Live插件，为Launchpad创建音频可视化诞生

## 使用方法
### 插件存放位置
当你下载后应该是一个压缩包，里面有两个插件，一个是捕获端，一个是接收端Reciever

你需要将Echo本体放置在`User Library\Presets\Audio Effects\Max Audio Effect`

![img](/img/tutorial/echo/echo1.png)

然后将将Echo Reciever放置在`User Library\Presets\MIDI Effects\Max MIDI Effect`

![img](/img/tutorial/echo/echo2.png)

### 配置Ableton Live
打开Live，在左侧“浏览器-Max For Live-Max Audio Effect”里，找到Echo本体，将其载入到Master轨道内

![img](/img/tutorial/echo/setecho.png)

![img](/img/tutorial/echo/setecho2.png)

之后在左侧“浏览器-Max For Live-Max MIDI Effect”里，找到Echo Reciever，将其载入任意一个MIDI轨道内即可，输出设置成Launchpad，CH选择你设备对应的

![img](/img/tutorial/echo/setecho3.png)

![img](/img/tutorial/echo/setecho4.png)

### 播放音频文件
使音频文件有可视化很简单，你只需要将音频文件拖动到Live内，然后将Warp关掉，播放音频即可，此时就有可视化的效果了

![img](/img/tutorial/echo/visual1.png)

![img](/img/tutorial/echo/echowarp.png)

![img](/img/tutorial/echo/visuals.png)


### 播放电脑声音
::: danger
此项涉及到深层电脑知识，如果看不懂请不要乱操作
:::

播放电脑声音比较麻烦，你需要路由电脑的声音进Live才行。如果你有声卡且支持Loopback那么你应该就知道我在说什么了，当然还有很多一部分人没有，所以我们这里就要祭出虚拟声卡“Voicemeeter”

首先我们去它的官网下载，然后安装，重启电脑。下载最基础版本就好了，如果你有其他的需求并且你了解的话可以看需求自行下载更高等级的版本

[点此下载](https://vb-audio.com/Voicemeeter/index.htm)

完成安装重启电脑后检查你的电脑输出设备，是不是VoiceMeeter

![img](/img/tutorial/echo/audiooutput.png)

然后启用Voicemeeter软件，他不会创建快捷方式，所以会在“开始菜单”里

![img](/img/tutorial/echo/voicemeeter.png)

打开后，将Hardware Out处的A1，调整成你原来电脑的默认输出设备

![img](/img/tutorial/echo/setvoicemeeter1.png)

然后检查总输出的A跟B是否打开，如果正常，你就可以先把软件最小化，注意不要点×，会直接关闭软件，如果你需要后台常驻，将Menu菜单里的System Tray打开就可以点×了

![img](/img/tutorial/echo/setvoicemeeter2.png)

然后我们回到Live，打开偏好设定，设置输出输入全部为VoiceMeeter，然后关闭窗口

![img](/img/tutorial/echo/setliveout.png)

保留一个音频轨道，保留一个MIDI轨道。同上方[配置Ableton Live](#配置ableton-live)，设置轨道。不过音频轨道不同，你需要将音频轨道的监听改成“In”，然后关闭这个轨道。此时你在电脑内播放的任何声音都会被Live捕获，并输出给Master轨道里的Echo，从而达到音频可视化，如图

![img](/img/tutorial/echo/visual2.png)
