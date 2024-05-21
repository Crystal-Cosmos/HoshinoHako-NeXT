---
title: 工程制作教程：菜鸟篇
description: 工程制作教程：菜鸟篇
---
## 前言
欢迎翻阅工程制作教程的菜鸟篇，作为开始的篇章，我不会涉及一些复杂的内容，我会告诉你一个基本的制作工程的流程，暂且不会涉及到音频分离等等复杂的东西，故菜鸟篇并不会涉及左手鼓点的部分，就教你怎么将音频切成片，然后放入Drum Rack中弹奏出声音，方便新手上手，那么我们开始吧

## 准备工作
### 准备歌曲
挑选一首你想做工程的歌，下载，推荐文件格式为`.wav`，`.mp3`，`.flac`等

## 设置Live Set
全部准备完成后我们就正式开始做工程。我们启动Live，然后点击左上角的文件-新建Live Set，创建一个新工程.

首先建议你保存工程，保存到你找的到的位置即可，他保存的时候会自动创建一个文件夹，里面包含一堆文件夹加.als文件。注意，这个文件夹才是最重要的，分发工程的时候应该将整个文件夹打包发送，而不是只发一个`.als`文件

![img](/images/tutorial/makeproject/als.png)

我们回到Live，按Tab键切换到Arrangement视图，你可以看到他自动生成了4个轨道，两个MIDI，两个音频。

![img](/images/tutorial/makeproject/live-gui1.png)

### 设置音频轨道
将其中一个MIDI轨道重命名为音频

![img](/images/tutorial/makeproject/rename.gif)

然后在左侧的浏览器面板里的“乐器”类别里，找到Instrument Rack，将其拖入音频轨道

![img](/images/tutorial/makeproject/instrument-rack.gif)

将Macro列表跟Chain列表显示出来，点击左侧的开关

![img](/images/tutorial/makeproject/instrument-rack2.gif)

然后再将Drum Rack拖入到Instrument Rack内部，注意是内部

![img](/images/tutorial/makeproject/drum-rack.gif)

然后复制Drum Rack7遍，总共8个Drum Rack。那么这8个则代表你工程的页数，如果你需要更多的页数，则添加更多Drum Rack即可

![img](/images/tutorial/makeproject/drum-rack2.gif)

然后点开Chain选择器

![img](/images/tutorial/makeproject/chain.png)

你可以看到每个Rack的后面都有一个指示标，当顶部的蓝色条指向指示条时则表示需要触发此Rack。如大家所见目前是所有指示标在一条线上，所有的Rack都会被同时触发，这显然不是我们想要的

![img](/images/tutorial/makeproject/chain2.png)

所以我们需要将指示标以阶梯状向下排布，如图，我们翻页时控制的就是上方的蓝条，他移动到第几个格子则代表他要触发第几页的内容。

![img](/images/tutorial/makeproject/chain3.gif)

然后我们在蓝条上右键，点击“映射到Macro 1”，蓝条的控制权就被链接到了Macro 1上，你可以扭动Macro 1来操控蓝条，达到控制页数的目的

![img](/images/tutorial/makeproject/map-to-macro.gif)

接着将轨道的输入设备改成Launchpad即可

![img](/images/tutorial/makeproject/set-proj.jpg)

那么到此音频轨道就设置好了

### 设置灯光轨道
将另外一个MIDI轨道重命名为灯光，在左侧的浏览器面板里的MIDI 效果器类别里，找到MIDI Effect Rack拖入轨道

![img](/images/tutorial/makeproject/midi-effect-rack.gif)

然后重复音频轨道的所有操作，不过替换成MIDI Effect Rack。也是一样将Macro列表跟Chain列表显示出来，然后再拖入一个MIDI Effect Rack到内部，复制7遍共8个,同样排列Chain选择器里的指示标

![img](/images/tutorial/makeproject/midi-effect-rack2.gif)

接着将轨道的输入设备改成Launchpad，输出设备改成Launchpad，通道改成设备对应的即可，然后按住Ctrl，多选启用预备录制（图中红色按钮）

![img](/images/tutorial/makeproject/light-rack.jpg)

不按Ctrl只能启用一个轨道的预备录制，不启用预备录制的轨道不会捕捉Launchpad的信号

至此就完成了灯光轨道的设置

---

## 处理音频
### 设置工程BPM，关闭伸缩变速
我们将准备好的歌曲拖入到Live中的空白音频轨，注意不是我们修改的那个，是下方那两个Audio轨道。Live会自行进行分析，分析进度在软件右下角

![img](/images/tutorial/makeproject/import-audio.gif)

分析完成后我们有几点需要注意的东西，首先你需要双击音频的标题栏部分，注意是标题栏，不是下方的波形区域，然后你会进入到这么一个界面，这里可以叫做Clip编辑器。

![img](/images/tutorial/makeproject/clip-editor.gif)

那接下来我们需要查看歌曲的BPM，BPM表示Beats Per Minite（每分钟节拍数），通俗点讲就是歌曲的速度。Live首先会自动帮我们算一遍BPM，有时准确有时并不准确，我们可以参考一下，但大体都是正确的。我们可以在Live计算完成后再去数据库里做对比，我经常用的歌曲数据库是TuneBat：[访问](https://tunebat.com/)

假设我这里计算出来的BPM是这个

![img](/images/tutorial/makeproject/bpm.png)

正常情况下我们将他计算出来的数值四舍五入到整数然后填入Live最上方的工程主BPM处即可

![img](/images/tutorial/makeproject/set-bpm.png)

但不幸的是这里Live算错了，偏差还蛮大，这首歌是BPM 140

![img](/images/tutorial/makeproject/correct-bpm.png)

数据库是不会错的，所以我们要按照数据库里的去填写

当然这里的数据库是针对Spotify，Apple Music的，而非国内的网易云，QQ音乐。Spotify里没有的歌曲，这个数据库也是没有，这种情况下你可以使用其他的软件去测量BPM，比方说Mixmeister BPM Analyzer或者TuneBat也有在线的BPM测量器，我个人还用FL Studio测BPM比较多。目前没有完全准确的测量的软件，都是平均值，所以如果歌曲内有变速他就是不准的，真正的值只有作者自己跟数据库知道，或者靠多听歌自己来猜大概BPM穷举，比方说我

接着我们需要关闭音频的伸缩处理，叫做Warping，开关在这里。当你开着Warping时，你拖入进来的任何音频，都会基于工程主BPM进行一个伸缩变速的处理，这并不是我们想要的。完成后可以在右下角点击来切换装置机架视图与Clip编辑器视图，也可以按Shift+Tab

![img](/images/tutorial/makeproject/warp.png)

### 对拍
对拍在制作中也是非常重要的一环，如果不将歌曲与节拍线对齐，那么你切片的时候会很痛苦

我们首先需要启用节拍器，在Live的这个位置，当你启用节拍器，每当你播放时Live都会根据当前的BPM与节拍来播放音效帮助你找拍子

![img](/images/tutorial/makeproject/tempo.png)

我们现在需要跳转到歌曲的副歌部分，也就是俗称的高潮部分，然后去听歌曲的节奏，找到歌曲高潮部分的第一拍，在电子音乐里通常伴随着一阵休息，然后重重的来一下鼓点加上其他的合成器，我们找到这一声鼓，可以按住Ctrl+鼠标滚轮放大视图然后加耳朵听来寻找，找到后左键定位一下，然后右键裁剪

![img](/images/tutorial/makeproject/audio-slip.png)

把视图缩放到最小，然后将裁剪后的部分挪动对齐在偏深色区域的第一个节拍线上，如图

![img](/images/tutorial/makeproject/audio2.png)

删除裁剪处前方多余的音频，然后将鼠标移动到后段音频的Clip左上角，当鼠标变成此形状时，按住鼠标将完整音频拖出来，就完成了音频的对拍

![img](/images/tutorial/makeproject/clip-corner.png)

![img](/images/tutorial/makeproject/clip-corner.gif)

对拍的时候注意，可以将音频往后放几个格子，否则放太前面歌曲没法拖拽出来

## 制作音频轨道
### 音频切片
我们开始听歌，这里我们可以直接先跳转到歌曲的副歌部分先做一小段感受一下

我们将视图放大，找到副歌部分，然后按照一定的节奏去将音频切掉，在你想要切的位置，点击一下，当指示标高亮时，右键此处点击裁剪。这边推荐使用快捷键Ctrl+E/Command+E。然后依此类推去切音频

![img](/images/tutorial/makeproject/slip-audio.gif)

### 设定切片播放按键
切好片后我们切换到创建好的MIDI音频轨道，在装置机架视图找到Drum Rack，这时你只要将切好的音频拖入到Drum Rack里就好了，但我们要怎么排键呢？实际上Drum Rack里的框框跟Launchpad上的按键都是唯一对应的，你只需要按住Pad上对应的按键，Drum Rack里也会相应的高亮与他相关联的框，一次只能显示16个键，你可以在左侧拖动来切换。你只需要找到你按住的对应的按键，将切好的音频切片拖到框内即可，这时右侧也会弹出你当前拖入音频切片的编辑器，此时你再按下时就可以发出声音了。

![img](/images/tutorial/makeproject/drum-rack.gif)

### 调整切片参数
拖入切片后我们需要对切片进行一定的设置，首先你需要确保拖入进来的采样处于1-Shot模式，这是专为播放单段音频而设计的，比较简洁。而Classic则有其他的针对创作，复音演奏之类的功能，功能冗杂且不适合打击垫

然后你需要关闭Snap模式，此功能会在切片结尾处留一小段的空白，导致音频提早几毫秒播放完毕，会导致衔接下一段切片时明明按照节拍弹了但有不自然的卡顿，如图

![img](/images/tutorial/makeproject/snap.png)

然后需要将Fade Out调为0，顾名思义他会在切片尾部留一小段淡出，持续时间由你定，我们用不到故调整为0。还有一项是Vol<Vel，这个要确保他是45%或者35%，保证所有的切片都是这个数值即可，否则声音会一大一小，其他就没什么了

全部调整好后应该如图

![img](/images/tutorial/makeproject/simpler.png)

### 综合
将上述提到的所有内容综合起来，完整切完歌曲的一小段

## 制作灯光轨道
### 创建灯光
我们创建一个新的MIDI轨道，这个就是用来绘制灯光的轨道，同样按照灯光轨道的设置方法设置输入输出，如图

![img](/images/tutorial/makeproject/light-create.png)

然后我们找到你需要制作灯光的那一小段音频，在跟他相匹配的灯光绘制轨道的格子上框出一个区域，右键-创建MIDI Clip

![img](/images/tutorial/makeproject/create-midi-clip.gif)

这时他会打开Live的钢琴卷帘窗，那么这个就是灯光绘制窗口

![img](/images/tutorial/makeproject/piano-roll.png)

Launchpad的灯光绘制方法是跟动画比较像的，你需要一帧一帧的画出灯光的走向，然后整体去播放来达到灯光出来动效的目的。那该如何绘制呢？举个例子，我现在要画一个从左下角移动到右上角的全屏覆盖的灯光，我要这么画。首先我们在钢琴卷帘窗上将指示光标移动到最开头，点一下即可

![img](/images/tutorial/makeproject/set-1-sec.gif)

然后再钢琴键的最上方，有一个耳机一样的图标，这是钢琴窗编辑器的预览功能，我们需要将这个启用，点亮变成蓝色

![img](/images/tutorial/makeproject/pianoroll-preview.png)

然后检查灯光轨道的预备监听是否打开

![img](/images/tutorial/makeproject/light-monitor.png)

当全部都准备好时，你在Pad上乱按则可以看到钢琴窗上也会亮起对应的键，那么这些琴键与Launchpad上的按键也是一一对应的

![img](/images/tutorial/makeproject/piano-button-preview.gif)

之后我们按住Pad上左下角的键别松开，然后按键盘上的右箭头，你可以看到编辑器上出来一个MIDI音符，那么这个就是我们刚才画的灯光了，你可以按一下空格播放来查看。之后就跟画动画一样，我们再音符的后面一个接着一个去绘制灯光图案，按住Pad上的按键然后按右箭头来画出，手不够长可以画一半然后左箭头退回然后再跟着画，全部的过程如图

![img](/images/tutorial/makeproject/draw-light.gif)

如果你画出来特别大，不够画，你可以在钢琴窗内右键，将自适应网格调成“窄”

当我们全部画完以后我们空格播放，出来的就是这样的效果。

![img](/images/tutorial/makeproject/light-final-preview.gif)

### 调整灯光颜色
画完灯光后你可以看到他现在的默认颜色非常丑，我们要如何更改呢？

在这里你要知道一个概念，Launchpad的灯光都是由你敲击的力度而决定的。我们总共有127种颜色可供我们选择，你现在看到的橙色是最大敲击力度，也就是127。以下是全部127色的预览，从左下角第一个白色开始是1

![img](/images/tutorial/makeproject/default-palette.png)

假设我们现在要调整成白色，我们回到卷帘窗，然后框选当前灯光
* 如果你是Live 11，则可以：
  * 在键盘上直接打数字，就可以更改灯光，比方说我要更改成白色，我输入数字3即可

  ![img](/images/tutorial/makeproject/change-colour-l11.gif)

* 如果你是Live 10，则可以：
  * 按住键盘上的`Alt`键，鼠标移到Note上，按住向下拖动，将数值调整成3即可（不推荐Live 11用户使用这个方法，有Bug）

![img](/images/tutorial/makeproject/change-colour.gif)

灯光预览

![img](/images/tutorial/makeproject/change-colour-prev.gif)

### 导出灯光
现在我们已经画好了一个灯光，那我们要如何让他在板子上播放呢？我们要在刚才画的灯光Clip上，右键，导出MIDI Clip。你需要在工程文件夹内创建一个文件夹，取名为Lights，不能中文。然后将灯光文件导出在这个文件夹里，导出的位置一定 一定要在你当前工程的文件夹内，文件夹内出现后缀为.mid的MIDI文件即可。

![img](/images/tutorial/makeproject/export-midi.gif)

### 加载灯光
我们需要用到Max插件：MIDI Extension。你可以从这里[下载](/download/amxd)，然后放在指定位置。之后回到轨道，这里我们需要用到之前设置好的灯光轨道，我们将MIDI Extension插件导入到轨道的MIDI Effect Rack里，你可以看到他是这样的

![img](/images/tutorial/makeproject/midiext.gif)

之后我们打开我们刚才导出灯光的文件夹，将灯光文件拖到当前MIDI Extension上

![img](/images/tutorial/makeproject/import-light.gif)

点开Key选择器，然后按住你设置好切片的按键，双击这个MIDIext后面长条的绿色部分，他就会自动将按键限制在你刚长按的按键上，否则所有的按键都将触发你刚才制作的灯光

![img](/images/tutorial/makeproject/set-button.gif)

### 综合
之后就依此类推，排好键位，跟切片保持一致，然后给每个切片构思灯光，绘制灯光，设定灯光，绘制的方法已经告诉你了剩下的就靠自己的发挥了

## 恭喜
你已经会做工程了！

绘制渐变灯光，制作双手工程请查看[入门篇](intro)