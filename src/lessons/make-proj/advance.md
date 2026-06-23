---
title: 工程制作教程：衍生进阶篇
description: 工程制作教程：衍生进阶篇
watermark: true
---
## 前言
欢迎翻阅进阶篇。

在进阶篇当中我将不再复述一些基本操作，我会讲一些提升工程效果，加快制作速度等方面的内容，类似于入门篇的衍生

在这篇章里就真正开始上难度了，注意自己的接受能力

## 快速制作灯光
### Iris
这个插件是用来做单键渐变灯光的，单键渐变如果每个都要画的话是非常麻烦的，索性就直接用插件来做了，当你按下按键触发时，单键灯光就可以转化为渐变灯

使用方法跟MIDIext一样，放到MIDI Effect Rack内，然后调整渐变色值即可

![iris.gif](/images/tutorial/makeproject/advance/iris.gif)

效果如图，你可以自由变更渐变速度

![irisprev.gif](/images/tutorial/makeproject/advance/irisprev.gif)

如果你需要限定Iris触发的区域只需点开Key编辑器，然后拖动下方的绿条即可，只有绿条有的地方才能触发Iris

![iriskey.gif](/images/tutorial/makeproject/advance/iriskey.gif)

### Resonator
与Iris类似，除了可以制作单键渐变外还可以一键做一些常用灯光，如下图

![resonator.gif](/images/tutorial/makeproject/advance/resonator.gif)

使用方法也与Iris类似，放入MIDI Effect Rack，如果你需要限定区域就调整一下。然后再Color Steps里调整你要渐变多少颜色，然后在下方多出来的位置调整渐变色即可。灯光走向则可以再Direction栏目调整，其他的功能可以自行摸索

![setresonator.gif](/images/tutorial/makeproject/advance/setresonator.gif)

### Eyedrop
Eyedrop是一个灯光制作辅助插件，可以将平常需要一个一个调的内容一键化

![eyedrop.gif](/images/tutorial/makeproject/advance/eyedrop.gif)

调用方法也很简单，首先我们需要新建一个MIDI轨道，然后将其改名成Eyedrop，然后将Eyedrop放到这个轨道里，并把监听模式调成In即可

![seteyedrop.gif](/images/tutorial/makeproject/advance/seteyedrop.gif)

之后打开Eyedrop的菜单，这个轨道就可以放一边了，你可以把它折叠掉。然后将你绘制灯光的MIDI轨道，输入调成Eyedrop这个轨道输入，输出调成Launchpad，然后开启绘制轨道的预备监听，Eyedrop就可以使用了

![seteyedrop2.gif](/images/tutorial/makeproject/advance/seteyedrop2.gif)

之后你只需要新建Clip，开始绘制灯光就好了，渐变，旋转，镜像，变速，预设什么的都交给Eyedrop来处理就好了，功能不难，而且每个按钮啥功能写的很明白了，自己把玩一下就懂了，我这里就提一个
* 按住ALT键，再去操作可以在不改变原灯光的情况下叠加处理，否则处理的内容是会覆盖掉原灯光的

## 提升灯光效果
### 调色板
::: tip
Pro MK3不支持此功能
:::

调色板是一个很进阶的玩法，我们都知道Launchpad的灯光在Live环境下是固定127种颜色的，但实际上LED能显示好几十万种颜色，这只是固件做了限制而已。所以我们只需要修改Pad的固件里面那127种颜色的值，就可以达到更改这127种颜色，最终就可以使灯光在Live里也能更加灵动鲜艳

这里我们需要用到“Launchpad固件助手”：[点此访问](https://lfu.arkitosekai.net)

打开以后我们进入到调色页面，然后你可以看到这里你就可以更改颜色了。你可以上传别人做好的预设，我这里收集了一些，你可以[点此跳转](/res/palette)，也可以自己制作

调整好以后返回固件页面，选择你的设备，然后勾上“自定义调色板”，按升级根据提示操作即可，注意检查右上角网页是否检测到了你的Launchpad，如果需要还原则反勾选“自定义调色板”，然后再次刷入固件即可

![changepalette.png](/images/tutorial/makeproject/advance/changepalette.png)

此时你的Launchpad全部的颜色都会被改变，所以仅适用于使用了同样色板的工程使用，其他工程颜色会错乱，同时你原来背的颜色值也全部不适用，要按照新的色板来制作灯光，Eyedrop也支持自定义色板，只需在设置菜单内加载即可

![eyedropcuspale.png](/images/tutorial/makeproject/advance/eyedropcuspale.png)

::: info
如果你使用Launchpad Pro MK1并安装了性能优化自定义固件，则更加方便，因为自制固件可以内建4个自定义色板，在Setup里即可一键切换，在Launchpad固件助手中也可以一键上传无需刷固件，只需连接设备，确保不在Setup界面内，在固件助手固件页面调整好色板后选择空的区块点上传即可
:::

## 恭喜
我已经没什么能教给你的了，如果想到了别的以后会慢慢更新的
