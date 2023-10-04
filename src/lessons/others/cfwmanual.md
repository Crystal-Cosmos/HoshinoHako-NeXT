---
title: Launchpad Pro性能优化固件介绍与其说明书
description: Launchpad Custom Firmware说明书
icon: 
---
Launchpad 性能优化自定义固件，简称自制固件（Custom Firmware/CFW），是由mat1jaczyyy开发的专门针对Launchpad Pro MK1型号的自定义固件，在官方固件的基础上针对灯光演奏进行了一系列的优化
::: info 注意
此固件仅支持Launchpad Pro MK1型号，其他型号不支持！
:::

## 与官方固件有什么不同
他支持所有官方固件的功能，同时改进优化了官方固件的缺点，例如：
1. 优化了LED算法，使灯光更加流畅，减少卡灯拖影等等
2. 顶灯（Top Lights）可直接显示，控制
3. 内建三个调色板可直接切换，也可以导入4个自定义调色板
4. 自动填充边灯，使例如X，MK2只有双侧边的设备制作的灯光能兼容
5. 自带Apollo Studio Fast LED模块，其他设备需自行修改固件安装
6. 有一个闲置动画
7. 一键切换User按键布局与Programmer按键布局
8. 移植了Launchpad MK3第三世代独占的自定义模式

## 如何安装
你需要使用Launchpad Firmware Utility（LFU）来安装，[点此访问我翻译的中文版](https://lfu.arkitosekai.net)

选择`Launchpad Pro （CFW）`进行安装即可，同时最好关闭如Ableton Live，Max，Apollo Studio等需要捕获Launchpad的软件，防止冲突

::: tip 
网络不好的同学最好通过我翻译的中文网站进行刷写，因为我的网站对CFW固件文件做了国内镜像，走的是国内的通道，不会出现无法获取固件刷入失败的问题
:::

## Custom Firmware 说明书
*基于CFW Repo进行翻译，更新与改动：[Github](https://github.com/mat1jaczyyy/lpp-performance-cfw)

安装后Launchpad将不会被Ableton Live识别为Launchpad Pro而是Launchpad Open，同时三个端口将缩减为两个，分别是Launchpad Open （Standalone Port）与Launchpad Open（MIDI Port）。MIDI输出通道也将由CH.6，CH.2（闪光灯），CH.3（呼吸灯）,变为CH.16，CH.12（闪光灯），CH.13（呼吸灯）

你需要进入偏好设定检查Launchpad相关端口的轨道与外部控制是否启用，没有则将其启用然后关闭窗口

* 如果使用自制固件则要在Live内将轨道的输入与输出设置为"Launchpad Open","x - Launchpad Open"或者"Launchpad Open (Standalone Port)"，通道为CH.16
* 如果使用原版固件则要在Live内将轨道的输入与输出设置为"Launchpad Open（Port 2）","MIDIIN2/MIDIOUT2（Launchpad Open）"或者"Launchpad Open (MIDI Port)"，通道为CH.6。然后在偏好设定-MIDI选项卡内的Control Surface里多加一栏Launchpad Pro，将输入与输出设置为"Launchpad Open（Port 2）","MIDIIN2/MIDIOUT2（Launchpad Open）"或者"Launchpad Open (MIDI Port)"

除了自制固件新的性能模式Performance Mode外，其他所有模式与原版固件一致。另外CFW包括一个新的启动动画，可以在显示时按Setup按钮跳过。

（请注意，由于Windows太垃圾了，Standalone Port会显示为 "Launchpad Open"或 "x - Launchpad Open"，而MIDI Port会显示为 "Launchpad Open（Port 2）"或 "MIDIIN2（Launchpad Open）""MIDIIN2（x - Launchpad Open）"，"MIDIOUT2（Launchpad Open）""MIDIOUT2（x - Launchpad Open）"）

各端口的含义可在[此处](/lessons/others/midiportset)查看（针对高级人员）

### Setup设置菜单（省流版）
![img](/img/tutorial/cfw/instruction.jpg)

### Setup设置菜单
你不再需要按住Setup按钮来改变设置。只需按一下，就可以轻松的进入和退出Setup设置菜单。如果你习惯于在更改设置时按住按钮的旧方式，CFW同样支持，当你长按按钮时修改了部分设置，松开按钮时，Launchpad会识别并退出Setup。
- 左上角：模式选择
  - 红色 = Performance Mode性能模式（Standalone Port - CH.16，CH.12为闪光灯，CH.13为呼吸灯）
  - 绿色 = Live模式 - 原版固件（MIDI Port）
  - 青色 = Note模式（Standalone Port）
  - 黄色 = Drum模式（Standalone Port）
  - 粉红色 = Fader模式（Standalone Port）
  - 橙色 = Programmer模式（Standalone Port - CH.1支持FL Studio）
  - 紫色 = Piano模式（Standalone Port）
  - 白色 = Custom模式（Standalone Port）
- 左侧：闲置动画开关 （Setup内按住Quantise可进入闲置模式）
- 左下角：输入/输出管理
  - 青色 = 压力感应开关
  - 橙色 = 独立MIDI输入输出开关（背部3.5mm接口）。
  - 绿色 = 触后设置
    - 从左到右的顺序：禁用，启用通道触后，启用复调触后。
- 最右侧：LED亮度调节（共8档）

选择Performance模式，额外出现的其他选项
- 右上角：顶灯布局配置，从左到右的顺序。
  - Pro = 正常模式
  - MK2 = 模拟MK2
  - MK2旋转式 = 基于原顶灯180度旋转
  - MK2 镜像 = 基于原顶灯镜像
  - 粉色LED = 按键布局切换
    - 明亮 = XY布局（Programmer Mode）
    - 暗淡 = Drum Rack布局（User Mode）
- 右下角：调色板选择
  - 顶部一行为自定义存储在Launchpad闪存中的4个自定义调色板，如果选择了其中一个调色板，左侧将显示彩虹按钮，点击后即可进入色板编辑器。除了直接在Launchpad上编辑外，还可以在外部制作，更改后上传至Launchpad或保存成Palette文件（通过LFU）
  - 底部一行为3个内置的预设调色板，从左到右依次：Novation原版调色板，mat1jaczyyy自定义调色板，Launchpad S传统调色板

选择Custom模式，额外在右下角出现其他选项，从左到右：
- 内部LED反馈开关：按下按键时是否同步展示LED反馈
- 外部LED反馈开关：当从外部接收到MIDI时，垫子LED是否同步亮起。
- Fader Velocity开关：忽略全局的压力感应开关，统一输出127最大压力值，即使全局的已经开启

其余的原厂模式中，右下角的区域选择是输出通道CH

### 性能模式
新的性能模式Performance Mode是为了解决Top Lights和Retina的问题而诞生的。通过正常触发Note On消息使你可以直接触发Top Lights，并可在设备上一键应用调色板，也支持在顶行上放置音频切片。

额外的，如果你使用Outbreak的Multi插件，进入Setup并选中Performance Mode时可重置你的Live Set中的所有一键多音。这个功能不需要Multi Reset设备放置在Live Set中，而是依靠Pad传递的CC信号来控制的

### 调色板编辑器
调色板编辑器以从左到右、从上到下的顺序显示所选调色板的预览。最顶部一行以7位二进制形式显示当前选择的Velocity数值。您可以通过切换位数来选择你要处理的Velocity来更改所需的颜色，或者可以直接在预览中点击选择你要更改的Velocity（注意，通过这种方式只能访问一半的Velocity，为了访问另一半，请按下Launchpad上的下箭头来更改进制位数）。

左边一列显示红色的位数量，最下面一行显示绿色的位数量，右边一列显示蓝色的位数量，均采用6位二进制表示。要修改颜色，只需切换颜色的数值位数，以达到所需的颜色位数值。对于垂直数值（红色和蓝色），最上面的位是最重要的，最下面的位是最不重要的。横向数值（绿色）则是最左边为最重要的，最右边是最不重要的

要保存和退出，请按Setup按钮。

您还可以使用Launchpad实用工具里的Palette Utility（调色板编辑器）将调色板上传到Launchpad中。只需打开网页，导入调色板，选择所需的调色板插槽。然后单击 "上传"。

如需将Launchpad中的自定义调色板下载到电脑中，请在Setup界面按Launchpad的上箭头，将调色板传送至Launchpad Utility中，然后进行导出。

### 钢琴模式
钢琴模式与音符模式类似，但采用了类似古典钢琴的每八度行布局。需要注意的是，由于布局上的巨大差异，它不支持音阶模式Scale Mode。导航按钮可以改变八度和换键。

### 自定义模式
自定义模式可以将Launchpad的8x8网格变成一个高度可定制的界面，基于Launchpad X、Mini MK3和Pro MK3上独占的自定义模式进行移植。该模式可以让你在Launchpad Pro上运行在Novation Components应用中创建的自定义模式，甚至可以跨会话存储。

要从Components应用中加载自定义模式，首先将创建好的自定义模式以`*.syx`文件的形式下载到电脑上。然后进入Launchpad Utility自定义模式编辑器，将其导入，选择要上传的槽位并点击上传即可。您也可以将Launchpad Pro中的任何自定义模式导出为`*.syx`文件，然后可以重新加载到Components中进行进一步编辑。这可以通过在选中自定义模式的同时按Launchpad上的上箭头来完成，将该模式发送到Launchpad Utility，与导出自定义调色板的操作相同。

进入模式后，Launchpad的右侧有8个自定义模式的插槽，你可以在此之间进行切换。如果一个插槽亮起红灯，则代表它是空的，不可用。如果亮起绿灯，则表示当前插槽内存在已导入的模式，并正确加载。如需删除现有的模式，请按住要删除的槽位，然后按Launchpad左侧的Delete键3次。