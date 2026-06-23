---
title: Ableton | Launchpad端口设置详解
description: 设置Launchpad端口
icon: 
---
偏好设定页的MIDI选项卡就是设置MIDI设备端口的，所有MIDI设备包括Launchpad都需要在这里启用才能用来控制Ableton Live

界面详解：

控制界面 | 输入 | 输出
--- | --- | --- 
选定后用于Live辨别你的设备，如果你选择了其他的设备则会套用其他设备的界面到当前设备上 | 设置MIDI设备的输入端口 | 设置MIDI设备的输出端口

::: warning
Novation没有单独给每个设备做Windows的适配，他的所有设备在Windows上都是以通用名字代替的，所以Launchpad在Ableton Live中并不能显示正确的名称，除了主端口外，其他的则会使用MIDIIN/MIDIOUT来替代，macOS则会按照官方设定的名称进行显示，每个端口的作用其实都有在后面做标注

如果你的设备名前方有如1-、2-等等这样的前缀，请无视。这个是Windows系统自身的标识，不影响使用

本文依照安装驱动后显示名称为主，如果你没安装驱动则会显示Launchpad Port #数字编号#
:::

## 如何设置？

1. 在控制界面选择你的设备，注意不要选成Launchkey
1. 在输入里选择端口，如何选择参考下文
1. 在输出里选择端口，如何选择参考下文
1. 启用Launchpad端口的轨道与外部控制

  ![img =400x](/images/tutorial/sa-midi/preference-midiports.jpg)

  ::: info 
  轨道与外部控制开启后意味着当前设备可以发送控制信号到轨道从而影响轨道，如果不开启那么你在MIDI设备上做的任何操作Live都不会进行响应
  :::
  ::: warning
  Microsoft GS Wavetable Synth不属于任何MIDI设备，他是Windows系统独有的一个内置合成器，属于旧时代屎山代码的遗留产物，请不要去动它
  :::

## Launchpad MK3第三代

::: tabs
@tab Launchpad X (MK3)

端口名称 | 正确名称 | 作用
:---: | :---: | :---:
LPX MIDI | Launchpad X (LPX DAW Out) | 仅控制界面使用的端口，无法用于其他用途
MIDIIN/MIDIOUT2 (LPX MIDI) | Launchpad X (LPX MIDI Out) | 自定义模式，可获取全部MIDI数据，用于演奏

@tab Launchpad Mini MK3

端口名称 | 正确名称 | 作用
:---: | :---: | :---:
LPMiniMK3 MIDI | Launchpad Mini MK3 (LPProMK3 DAW Out) | 仅控制界面使用的端口，无法用于其他用途
MIDIIN/MIDIOUT2 (LPMiniMK3 MIDI) | Launchpad Mini MK3 (LPProMK3 MIDI Out) | 自定义模式，可获取全部MIDI数据，用于演奏

@tab Launchpad Pro MK3

端口名称 | 正确名称 | 作用
:---: | :---: | :---:
LPProMK3 MIDI | Launchpad Pro MK3 (LPProMK3 MIDI) | 自定义模式，可获取全部MIDI数据，用于演奏
MIDIIN/MIDIOUT2 (LPProMK3 MIDI) | Launchpad Pro MK3 (LPProMK3 DIN) | 我不造啊
MIDIIN/MIDIOUT3 (LPProMK3 MIDI) | Launchpad Pro MK3 (LPProMK3 DAW) | 仅控制界面使用的端口，无法用于其他用途

:::

## Launchpad MK2第二代

::: tabs
@tab Launchpad Pro MK1

端口名称 | 正确名称 | 作用
:---: | :---: | :---:
Launchpad Pro  | Launchpad Pro (Live Port) | 用于演奏与设置控制界面界面
MIDIIN/MIDIOUT2 (Launchpad Pro) | Launchpad Pro (Standalone Port) | 不设置控制界面时使用，但键位布局不同，不清楚意图
MIDIIN/MIDIOUT3 (Launchpad Pro) | Launchpad Pro (MIDI Port) | Programmer Mode使用的端口

@tab Launchpad Pro MK1 CFW

端口名称 | 正确名称 | 作用
:---: | :---: | :---:
Launchpad Open | Launchpad Open (Standalone Port) | Performance Mode，用于演奏，User Mode的优化升级版
MIDIIN/MIDIOUT2 (Launchpad Open) | Launchpad Open (MIDI Port) | 与原版固件的Live Port相同，调用官方固件的User Mode

@tab Launchpad MK2 (RGB)

端口名称 | 作用
:---: | :---:
Launchpad MK2 | 用于演奏与设置控制界面界面

@tab Launchpad MINI MK2

端口名称 | 作用
:---: | :---:
Launchpad MINI | 用于演奏与设置控制界面界面

*无设备，存疑

:::

## Ableton Push 2

*内容存疑经供参考

端口名称 | 正确名称
:---: | :---:
Ableton Push 2 | Ableton Push 2 (Live Port) 
Ableton Push 2 (Port 2) | Ableton Push 2 (User Port) 

::: warning
Ableton Push 2并没有USB驱动，他只能使用Windows通用MIDI驱动，所以他没办法多个软件同时使用它，会显示端口被占用
:::