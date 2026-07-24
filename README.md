# Leon Academic Homepage

这是侯亮（Leon）的个人学术主页第一版。

## 为什么采用这个结构

当前版本只有三个核心文件：

- `index.html`：网站内容
- `styles.css`：视觉样式
- `script.js`：年份与移动端菜单

它不需要 Node.js、Ruby、Jekyll 或数据库。直接双击 `index.html` 就可以预览，也可以由 GitHub Pages 直接发布。对刚开始学习 Git/GitHub 的人来说，它比复杂模板更容易维护。

## 本地预览

最简单的方法：双击 `index.html`。

也可以在 VS Code 中安装 Live Server 扩展，然后右键 `index.html`，选择 **Open with Live Server**。

## 发布到 GitHub Pages

你的 GitHub 用户名是 `LEoNYun107`。建议把仓库重命名为：

`LEoNYun107.github.io`

然后：

1. 打开仓库的 **Settings**
2. 左侧选择 **Pages**
3. 在 **Build and deployment** 中选择 **Deploy from a branch**
4. Branch 选择 `main`，目录选择 `/ (root)`
5. 保存

发布地址应为：

`https://leonyun107.github.io/`

GitHub Pages 首次构建可能需要几分钟。

## 最常用的 Git 命令

```bash
git status
git add index.html styles.css script.js README.md
git commit -m "build initial personal homepage"
git push
```

在操作前先运行 `git status`，确认将要提交的文件。

## 长期维护建议

不要把主页当成“做完一次就结束”的作品。建议分阶段增加：

1. 个人简介和研究兴趣
2. 项目页
3. CV 下载
4. 论文、会议与获奖
5. 研究笔记或博客
6. 中英文切换
7. 独立域名

每次只做一个小改动并提交，Git 历史就会成为主页的成长记录。

## 隐私提醒

公开仓库中的所有内容都可能被任何人看到。不要提交：

- 身份证号、手机号、家庭住址
- 私人邮箱密码或 API Key
- 未经许可公开的实验数据
- 导师或同学的私人信息
- 含敏感信息的完整成绩单
