---
tag:
 - 施工中
---
# 砖了？
::: info
搬运自[mat1jaczyyy](https://github.com/mat1jaczyyy/lpp-performance-cfw/blob/master/unbrick.md)
Gemini+人工校对
:::

Launchpad 通常情况下不会因为刷写固件而变砖，通常会在开发过程中进行底层的修改操作从而导致变砖。 无法启动到引导模式 (Bootloader) 是变砖的特征。 如果你只是单纯的无法启动固件，你只需重新刷入一个固件即可；当你无法进入引导程序时，才需要进行救砖，只要能成功进入Bootloader就代表你的Launchpad还是好的

:::danger
除非您确切知道自己在做什么，否则请不要执行之后的操作！
:::

## 所需工具

* 一个砖了的Launchpad Pro
* 随便一个 ST-LINK V2
* [STM32 ST-LINK Utility](/resources/unbrick/STM32%20ST-LINK%20Utility%20v4.4.0%20setup.exe)
* 4 根母转公跳线
* 一个 [Launchpad Pro内存底层的备份文件（暂不可用，请别处获取）](https://cdn.discordapp.com/attachments/636554539096473600/826560546890579998/pro_backup.bin)

## 拆机

拆卸 Launchpad Pro，只分离电源管理模块，注意别丢了电源按钮
CPU 裸露后，将以下点连接到 ST-LINK
您可能需要自己将 SWDIO 连接保持，而不是让它一直保持插入状态：

![ST-LINK 连接示意图](/images/unbrick/1.png)

## 重新刷写内存

运行 ST-LINK 实用工具。确保您的 ST-LINK 固件已更新：

![ST-LINK Firmware Update](/images/unbrick/2.png)

连接到砖了的 Launchpad Pro：

![A trashed bootloader](/images/unbrick/3.png)

烧录并验证内存备份文件：

![Fixing it...](/images/unbrick/4.png)

刷写完成后，断开 ST-LINK 连接，Launchpad 应该可以直接启动到 Vegas 模式。

![Fixed!](/images/unbrick/5.png)

Have fun reassembling it :)
