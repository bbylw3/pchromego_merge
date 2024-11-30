const CSS_CONTENT = `
:root {
    --primary: #ff9000;
    --bg: #0f0f0f;
    --card-bg: #1a1a1a;
    --text: #ffffff;
    --text-secondary: #999999;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, system-ui, sans-serif;
    line-height: 1.5;
}

/* Header */
.header {
    background: #000;
    padding: 1.5rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
}

.logo span {
    color: var(--primary);
}

/* Main Content */
.main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 8rem 2rem 4rem;
}

/* Hero Section */
.hero {
    text-align: center;
    margin-bottom: 6rem;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.hero-title span {
    color: var(--primary);
}

.hero-description {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto 2rem;
}

/* Features Grid */
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 6rem;
}

.feature-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: var(--radius);
    transition: transform 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.feature-card ul {
    list-style: none;
}

.feature-card li {
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
}

.feature-card li:before {
    content: "→";
    color: var(--primary);
    position: absolute;
    left: 0;
}

/* Button */
.cta-button {
    display: inline-block;
    background: var(--primary);
    color: var(--text);
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    filter: brightness(110%);
}

/* Footer */
.footer {
    text-align: center;
    padding: 4rem 0;
    color: var(--text-secondary);
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .main {
        padding: 6rem 1.5rem 3rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1.1rem;
    }
    
    .feature-card {
        padding: 1.5rem;
    }
}

/* 订阅卡片特殊样式 */
.subscription-card {
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.subscription-card h3 {
    margin-bottom: 0.5rem;
}

.subscription-card:hover {
    background: var(--primary);
}

.subscription-card:hover h3 {
    color: var(--text);
}

/* 添加提示文本样式 */
.subscription-tip {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
}

.feature-card a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.feature-card a:hover {
    color: var(--text);
    text-decoration: underline;
}
`;

const SCRIPT_CONTENT = `
async function copySubscription(url) {
    try {
        await navigator.clipboard.writeText(url);
        alert('订阅链接已复制到剪贴板！');
    } catch (err) {
        // 如果剪贴板API不可用，则显示链接
        prompt('请复制以下订阅链接:', url);
    }
}
`;

const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NodeHub - 免费节点导航</title>
    <style>${CSS_CONTENT}</style>
</head>
<body>
    <header class="header">
        <div class="logo">Node<span>Hub</span></div>
    </header>

    <main class="main">
        <section class="hero">
            <h1 class="hero-title">免费节点 <span>订阅合集</span></h1>
            <p class="hero-description">
                多协议支持，定期更新维护，完全免费的节点订阅服务
            </p>
            <a href="https://github.com/Misaka-blog/chromego_merge" 
               target="_blank" class="cta-button">
                访问项目主页
            </a>
        </section>

        <section class="features">
            <div class="feature-card">
                <h3>项目说明</h3>
                <ul>
                    <li>本项目基于 ChromeGo 项目的节点</li>
                    <li>由 Misaka-blog 进行维护更新</li>
                    <li>提供多种格式的订阅链接</li>
                    <li>支持主流代理软件订阅</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>使用方法</h3>
                <ul>
                    <li>复制对应客户端的订阅链接</li>
                    <li>在客户端中添加订阅地址</li>
                    <li>定期更新订阅以获取最新节点</li>
                    <li>推荐每天更新一次订阅</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3>相关项目</h3>
                <ul>
                    <li><a href="https://github.com/bannedbook/fanqiang" target="_blank">ChromeGo</a></li>
                    <li><a href="https://github.com/Misaka-blog" target="_blank">Misaka-blog</a></li>
                    <li><a href="https://github.com/MetaCubeX/Clash.Meta" target="_blank">Clash.Meta</a></li>
                    <li><a href="https://github.com/SagerNet/sing-box" target="_blank">sing-box</a></li>
                </ul>
            </div>
        </section>

        <section class="features">
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://chromego-sub.netlify.app/sub/merged_proxies_new.yaml')">
                <h3>Clash Meta 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>
            
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://chromego-sub.netlify.app/sub/base64.txt')">
                <h3>Base64 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>
            
            <div class="feature-card subscription-card" 
                onclick="copySubscription('https://chromego-sub.netlify.app/sub/sing-box.json')">
                <h3>sing-box 订阅</h3>
                <p class="subscription-tip">点击复制订阅链接</p>
            </div>
        </section>

        <footer class="footer">
            <p>本站仅作为项目导航，详细信息请访问 GitHub 项目主页</p>
            <p>仅供学习交流使用，请遵守当地法律法规</p>
        </footer>
    </main>
    <script>${SCRIPT_CONTENT}</script>
</body>
</html>`;

// 3. Worker 处理函数
async function handleRequest(request) {
    return new Response(HTML_CONTENT, {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}

// 4. 事件监听器
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
}); 