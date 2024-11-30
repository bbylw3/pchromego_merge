# NodeHub - 简洁的节点导航

NodeHub 是一个优雅的单页面应用，采用现代化设计风格，为 [ChromeGo Merge](https://github.com/Misaka-blog/chromego_merge) 项目提供导航服务。项目使用 Cloudflare Workers 部署，无需服务器，一键部署即可使用。

## 特性

- 🎨 简约现代的设计风格
- 📱 完美适配各种设备
- 🚀 轻量级单页面应用
- ⚡️ Cloudflare Workers 部署
- 🔄 多种订阅格式支持

## 支持的订阅格式

- Clash Meta 订阅
- 通用 Base64 订阅
- sing-box 订阅

## 支持的客户端

- Clash Verge/Nyanpasu
- NekoRay/NekoBox
- Shadowrocket
- sing-box

## 技术栈

- HTML5 + CSS3
- Vanilla JavaScript
- Cloudflare Workers

## 快速部署

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 `Workers & Pages`
3. 点击 `Create Worker` 创建新的 Worker
4. 将 `worker.js` 中的代码复制到编辑器中
5. 点击 `Save and Deploy` 保存并部署
6. 访问分配的 `.workers.dev` 域名即可使用

## 项目结构

```
worker.js
├── CSS_CONTENT  # 样式定义
│   ├── 基础样式变量
│   ├── 布局样式
│   ├── 组件样式
│   └── 响应式设计
├── SCRIPT_CONTENT # JavaScript 功能
│   └── 订阅链接复制功能
├── HTML_CONTENT # 页面结构
│   ├── 头部导航
│   ├── 项目介绍
│   ├── 使用说明
│   ├── 订阅选项
│   └── 页脚信息
└── Worker处理逻辑
    ├── 请求处理
    └── 响应返回
```

## 自定义修改

你可以通过修改 `worker.js` 中的以下部分来自定义界面：

### 样式修改
```css
:root {
    --primary: #ff9000;    /* 主题色 */
    --bg: #0f0f0f;        /* 背景色 */
    --card-bg: #1a1a1a;   /* 卡片背景色 */
    --text: #ffffff;      /* 主要文字颜色 */
    --text-secondary: #999999;  /* 次要文字颜色 */
}
```

### 内容修改
- 修改 `HTML_CONTENT` 中的文本内容
- 调整页面结构和布局
- 更新项目信息和链接
- 自定义订阅链接

## 设计特点

- 简约优雅的视觉风格
- 清晰的信息层级
- 合理的间距布局
- 流畅的动画过渡
- 响应式设计适配

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 主流移动端浏览器

## 项目依赖

本项目是完全独立的单文件应用，不依赖任何外部库和框架，仅需要：

- Cloudflare Workers 环境
- 支持现代 CSS 特性的浏览器

## 致谢

- 节点来源：[ChromeGo](https://github.com/bannedbook/fanqiang)
- 节点合并：[chromego_merge](https://github.com/Misaka-blog/chromego_merge)

## 免责声明

本项目仅供学习交流使用，请勿用于非法用途。使用本项目导航到的任何资源时，请遵守当地法律法规。

## 许可证

MIT License