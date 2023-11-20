---
title: 在Ableton Live里导入视频
description: 在Ableton Live里导入视频
icon: 
---
## 前言
Ableton Live无法直接导入视频，其原因是因为音视频编码器并没有内置，只需要自行下载编解码器安装后即可导入

## 下载编解码器
Haali Media Splitter
<a 
  href="https://haali.su/mkv/MatroskaSplitter.exe"
  referrerpolicy="origin"
  target="_self">
    <DownloadButton/>
</a>

:::details 官方说明
1. Haali Media Splitter 是目前唯一可在 Windows 上与 Live 配合使用的第三方编解码器。为了避免 Live 中出现视频问题，请卸载之前安装的任何其他编解码器，并仅保留安装的 Haali Media Splitter
2. 以管理员身份运行Live将无法使用拖拽导入
3. 提供支持的视频格式仅`.mp4`，`.mov`。其他格式未测试但应该可用，如果格式不支持请使用诸如Handbrake等转码软件转编码
4. 如果导入的视频呈现黑屏，请检查你的电脑是否为双显卡，即核心显卡+独立显卡的组合。如果是，请以核心显卡运行Live来排除故障，或者开启独显直连。多显示器也会导致此问题
:::