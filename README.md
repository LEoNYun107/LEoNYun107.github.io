# Leon Personal Homepage

这是侯亮（Leon Hou）的长期个人主页，记录研究、技术构建、学习与思考。

当前的研究训练是网站的重要部分，但不是唯一身份。这个网站也会逐步容纳真实的工具、个人项目、阅读与学习记录，以及经过整理后面向读者的思考。

## 为什么采用这个结构

当前版本只有三个核心文件：

- `index.html`：网站内容
- `styles.css`：视觉样式与响应式布局
- `script.js`：年份与移动端菜单

它不需要 Node.js、Ruby、Jekyll 或数据库。直接双击 `index.html` 就可以预览，也可以由 GitHub Pages 直接发布。简单的静态结构便于长期维护，也让内容始终优先于工具链。

当内容增长到手工维护明显困难时，再根据实际需要评估静态网站生成器；React、Next.js 或其他复杂框架不是默认升级方向。

## 本地预览

最简单的方法：双击 `index.html`。

也可以在 VS Code 中安装 Live Server 扩展，然后右键 `index.html`，选择 **Open with Live Server**。

## 发布到 GitHub Pages

GitHub 用户名是 `LEoNYun107`，仓库名称为：

`LEoNYun107.github.io`

发布步骤：

1. 打开仓库的 **Settings**
2. 左侧选择 **Pages**
3. 在 **Build and deployment** 中选择 **Deploy from a branch**
4. Branch 选择 `main`，目录选择 `/ (root)`
5. 保存

发布地址：

`https://leonyun107.github.io/`

GitHub Pages 首次构建可能需要几分钟。

## 最常用的 Git 命令

```bash
git status
git add index.html styles.css script.js README.md AGENTS.md
git commit -m "describe your change"
git push
```

在操作前先运行 `git status`，确认将要提交的文件。

## 长期维护建议

不要把主页当成一次性作品。每次围绕一个真实的小目标更新，逐步积累：

1. **Work**：研究训练、数值实验、代码工具和个人项目
2. **Notes**：阅读、学习、技术与个人思考的公开记录
3. **CV**：准备好真实文件后再添加下载入口
4. **Research & Science**：气候、环境、数值模拟与科研训练
5. **Technology & Building**：数据工具、AI agents、自动化与软件项目
6. **Life & Thinking**：经过整理、面向读者的生活系统与长期思考

每次只做一个小改动并提交，Git 历史就会成为这个网站的成长记录。

## 隐私提醒

公开仓库中的所有内容都可能被任何人看到。不要提交：

- 身份证号、手机号、家庭住址
- 私人邮箱密码或 API Key
- 未经许可公开的实验数据
- 导师、同学或项目伙伴的私人信息
- 私人日记或含敏感信息的完整成绩单
