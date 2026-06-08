# 冰屋 (Igloo) - 个人网站项目文档

## 📋 项目概述

**冰屋** (Igloo) 是艾斯特(Eysnter)的个人网站，采用静态页面设计，包含主站、工作台(博客)、棉花糖(友圈)、雨雪API等版块。

- **项目地址**: https://Eysnter.cn
- **作者**: Eysnter
- **技术栈**: HTML5 + CSS3 + JavaScript
- **生成器**: Django v5.1.7

---

## 📁 项目结构

```
shed/
├── index.html              # 主页面
├── 测试页面.html            # 测试页面
├── css/                    # 样式文件
│   ├── index-style.css     # 主页样式
│   ├── base.css            # 基础样式
│   ├── bootstrap-min.css   # Bootstrap框架
│   ├── clock.css           # 时钟样式
│   ├── font-awesome.css    # 字体图标
│   ├── style.css           # 主样式
│   └── ...                 # 其他样式文件
├── js/                     # JavaScript文件
│   ├── script.js           # 主脚本
│   ├── jquery-min.js       # jQuery库
│   ├── bootstrap-min.js    # Bootstrap框架
│   ├── vue-min.js          # Vue.js框架
│   ├── aplayer-min.js      # 音乐播放器
│   ├── meting-min.js       # Meting API
│   ├── live2dcubismcore.js # Live2D核心
│   ├── meidou-live2d.js    # Live2D实现
│   └── ...                 # 其他脚本文件
├── images/                 # 图片资源
│   ├── favicon.ico         # 网站图标
│   ├── banner.webp         # 横幅图片
│   ├── self.png            # 个人照片
│   └── ...                 # 其他图片
└── fonts/                  # 字体文件
    ├── fontawesome-webfont.* # FontAwesome字体
    ├── xiaolaisc-subset.woff2 # 小赖字体
    └── ...                 # 其他字体
```

---

## 🎨 CSS 文件说明

### 核心样式
| 文件 | 说明 |
|------|------|
| `css/index-style.css` | 主页专用样式，包含动画、打字效果、游戏区域等 |
| `css/base.css` | 基础样式重置和通用样式 |
| `css/style.css` | 主样式文件 |
| `css/pix.css` | 像素风格样式 |

### 框架样式
| 文件 | 说明 |
|------|------|
| `css/bootstrap-min.css` | Bootstrap 4 框架 |
| `css/font-awesome.css` | FontAwesome 图标字体 |
| `css/flat-ui-icons-regular.*` | Flat UI 图标 |

### 组件样式
| 文件 | 说明 |
|------|------|
| `css/clock.css` | 时钟组件样式 |
| `css/aplayer-min.css` | APlayer 音乐播放器样式 |
| `css/magnific-popup.css` | 弹窗插件样式 |
| `css/waifu.css` | 看板娘样式 |
| `css/layerslider.css` | 图层滑块样式 |

---

## 📜 JavaScript 文件说明

### 核心库
| 文件 | 说明 |
|------|------|
| `js/jquery-min.js` | jQuery 3.x 库 |
| `js/bootstrap-min.js` | Bootstrap 4 框架 |
| `js/vue-min.js` | Vue.js 2.x 框架 |
| `js/popper-min.js` | Popper.js 定位引擎 |

### 功能脚本
| 文件 | 说明 |
|------|------|
| `js/script.js` | 主脚本文件，包含页面交互逻辑 |
| `js/jq22.js` | 自定义jQuery插件 |
| `js/lazyload.js` | 图片懒加载 |
| `js/busuanzi-pure-mini.js` | 不蒜子统计 |

### 多媒体组件
| 文件 | 说明 |
|------|------|
| `js/aplayer-min.js` | APlayer 音乐播放器 |
| `js/meting-min.js` | Meting API 音乐数据接口 |
| `js/html2canvas.js` | HTML转Canvas截图 |

### 动画与特效
| 文件 | 说明 |
|------|------|
| `js/live2dcubismcore.js` | Live2D Cubism 核心引擎 |
| `js/meidou-live2d.js` | Live2D 看板娘实现 |
| `js/parallax-min.js` | 视差滚动效果 |
| `js/modernizr-3-6-0-min.js` | 浏览器特性检测 |

### 工具库
| 文件 | 说明 |
|------|------|
| `js/jquery-appear-min.js` | 元素进入视口检测 |
| `js/jquery-counterup-min.js` | 数字动画计数器 |
| `js/jquery-easing-min.js` | jQuery 缓动函数 |
| `js/jquery-magnific-popup-min.js` | 弹窗插件 |
| `js/waypoints-min.js` | 滚动触发动画 |

---

## 🖼️ 图片资源

### 网站标识
- `images/favicon.ico` - 网站图标
- `images/favicon-light-32.png` - 浅色模式图标(32x32)
- `images/pix-favicon.webp` - 像素风图标

### 界面元素
- `images/banner.webp` - 主页横幅
- `images/self.png` - 个人照片
- `images/loading-new.gif` - 加载动画
- `images/mouse.png` - 自定义鼠标指针

### 背景图片
- `images/bg1.jpg` - 背景图片
- `images/deadpool-bg.png` - 死侍背景
- `images/paint-1.jpg` - 绘画背景

### 装饰元素
- `images/shape-2.png` ~ `images/shape-6.png` - 形状装饰
- `images/clock.png` / `images/clock-1.png` - 时钟图标
- `images/line04.png` - 线条装饰

### Logo
- `images/igloo-logo-zh.png` - 中文Logo
- `images/footer-logo-zh.png` - 页脚Logo
- `images/gonganlogo.png` - 公安备案图标

---

## 🔤 字体文件

| 文件 | 说明 |
|------|------|
| `fonts/fontawesome-webfont.*` | FontAwesome 图标字体 |
| `fonts/flat-ui-icons-regular.*` | Flat UI 图标字体 |
| `fonts/xiaolaisc-subset.woff2` | 小赖字体(中文) |
| `fonts/cjkfonts-allseto-v1-11-subset.woff2` | CJK中文字体 |

---

## ✨ 主要功能

### 1. 响应式设计
- 支持桌面端和移动端
- 自适应布局

### 2. 自定义鼠标
- 使用 `images/mouse.png` 作为自定义鼠标指针

### 3. 打字效果
- 主页标题带有打字机动画效果
- 位于 `css/index-style.css` 的 `.typing-container` 和 `.typing-effect`

### 4. 滚动动画
- 元素进入视口时触发淡入动画
- 使用 `anim` 和 `animate` 类控制

### 5. 音乐播放器
- 集成 APlayer 音乐播放器
- 通过 Meting API 获取音乐数据

### 6. Live2D 看板娘
- 集成 Live2D 技术
- 使用 `live2dcubismcore.js` 和 `meidou-live2d.js`

### 7. 统计功能
- 集成不蒜子网站统计
- 使用 `busuanzi-pure-mini.js`

### 8. 图片懒加载
- 优化页面加载性能
- 使用 `lazyload.js`

---

## 🛠️ 技术特性

### CSS特性
- CSS3 动画 (`@keyframes`)
- Flexbox 布局
- CSS 变量
- 媒体查询响应式
- `oklch()` 颜色函数

### JavaScript特性
- ES6+ 语法
- Vue.js 响应式框架
- jQuery DOM操作
- 模块化组件

### 浏览器支持
- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 支持 CSS3 和 HTML5 特性

---

## 📝 使用说明

### 本地运行
1. 克隆项目到本地
2. 使用本地服务器打开 `index.html`
3. 推荐使用 VS Code 的 Live Server 插件

### 部署
- 项目为纯静态页面，可直接部署到任何静态托管服务
- 推荐使用 GitHub Pages、Vercel 或 Netlify

---

## 📄 许可证

本项目为个人网站，仅供学习参考。

---

## 👤 作者

**Eysnter**
- 网站: https://Eysnter.cn

---

*文档生成时间: 2026年6月8日*
