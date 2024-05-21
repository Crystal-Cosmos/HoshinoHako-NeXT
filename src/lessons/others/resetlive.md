---
title: 完全卸载Ableton Live及其残留文件
description: 完全卸载Ableton Live及其残留文件
icon: 
---
## 前言
本教学适用于当你的Ableton Live无法安装，激活，还有Live莫名其妙一直崩溃，想要完全还原的朋友使用，如果你遇到了以上问题，可以尝试使用以下方法

::: danger
许多步骤涉及到系统关键路径，请仔细查看，避免删错，防止软件系统崩溃

执行操作会清除你所有添加过的Max For Live插件，效果器预设，以及MIDI Extension 1.0的灯光文件，请注意备份

我已经提醒了，误删没备份文件丢了系统崩了都不关我的事
:::

## 1.卸载Ableton Live
从控制面板卸载软件即可

![img](/images/tutorial/resetlive/uninstall.png)

::: info 注意
此步骤会删除MIDI Extension 1.0手动加载灯光工程的灯光包文件
:::

## 2.清除配置与授权文件
按键盘上Win+R，打开运行，输入`%APPDATA%`，回车

![img](/images/tutorial/resetlive/run.png)

然后删除“Ableton”文件夹

::: info 注意
此步骤会清除所有的装过的Live偏好设定与激活授权，以及所有的崩溃日志
:::

## 3.清除其他残留文件
### Push 3驱动
删除`C:\Program Files`下的“Ableton”文件夹

### Live安装目录
Win+R打开“运行”，删除`%ProgramData%`下的“Ableton”文件夹

::: info 注意
如果你更改了安装位置，请自己找到你安装的位置并删除
:::

### Live数据库与音频缓存
Win+R打开“运行”，删除`%LocalAppdata%`下的“Ableton”文件夹

### Live User Library（用户数据库）
Win+R打开“运行”，删除`%USERPROFILE%/Documents`下的“Ableton”文件夹

::: info 注意
此步骤会清除所有你自行添加过的Max For Live插件以及你自己创建的效果器预设，请注意备份
:::