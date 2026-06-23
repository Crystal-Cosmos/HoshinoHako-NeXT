# 星の箱 | HoshinoHako

星之箱是一个专门为中国Launchpad玩家打造的教程与资源工具箱

## 贡献内容

网站已进入维护期，之后内容将完全交由各位玩家编写，我会进行审核然后合并，你可以通过下列方式进行贡献  
编写需要你熟悉Markdown语法，以及Vuepress-hope-theme主题的用法

### 通过Github

你可以浏览网页，在你需要变更内容的网页最底下，选择 “在Github上编辑此页” ，然后使用Markdown语法进行编写，编写完成后发起PR

### 通过本地

首先fork仓库到自己的账户，然后在本地git clone进行搭建与编写

> [!NOTE]
>
> 请确保你已经提前安装好了Node.js与pnpm包管理器

启动环境：

```
pnpm install
pnpm dev
```

编译：

```
pnpm build
```

通过文本编辑器编辑完成后推送到你的仓库，并向主仓库发起PR

## 项目架构

- TypeScript
- Vue
- [vuepress-hope-theme](https://theme-hope.vuejs.press/)