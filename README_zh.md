# AcademiaLight

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/zdong1995/AcademiaLight?style=flat-square)](https://github.com/zdong1995/AcademiaLight/releases)
[![Hugo](https://img.shields.io/badge/Hugo-%5E0.62.0-ff4088?style=flat-square&logo=hugo)](https://gohugo.io/)
[![License](https://img.shields.io/github/license/zdong1995/AcademiaLight?style=flat-square)](https://github.com/zdong1995/AcademiaLight/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9e4fdc45-04a7-4a7c-90fd-07fe6195b1e3/deploy-status)](https://app.netlify.com/sites/academialight/deploys) ![GitHub last commit](https://img.shields.io/github/last-commit/zdong1995/AcademiaLight)

AcademiaLight 是一个简洁、现代的 Hugo 学术主题，专为学者和研究人员设计。UI 设计灵感来自 [minimal-light](https://github.com/yaoyao-liu/minimal-light) 主题。

[在线演示](https://academialight.netlify.app) | [English](README.md)

![Screenshot](images/screenshot.png)

## 特点

- 🎨 简洁现代的设计
- 🌓 自动深色模式支持
- 📱 完全响应式布局
- 🔍 SEO 优化
- 📊 Clustrmaps 访问统计
- 📚 结构化的出版物展示
- 🗣️ 演讲和服务经历展示
- 🌐 多语言支持

## 环境要求

安装 Hugo:
```bash
# macOS (Homebrew)
brew install hugo

# Windows (Chocolatey)
choco install hugo-extended

# Linux (Snap)
snap install hugo
```

验证安装：
```bash
hugo version
```

确保安装的是 Hugo Extended 0.80.0 或更高版本。

## 快速开始

### 方法 1: 使用示例网站

1. 克隆仓库：
```bash
git clone https://github.com/zdong1995/AcademiaLight.git
```

2. 启动 Hugo 服务器：
```bash
hugo server --source=exampleSite
```

现在可以通过 `http://localhost:1313` 访问你的网站了

### 方法 2: 在你的网站中使用

1. 创建新的 Hugo 网站（如果已有网站则跳过）：
```bash
hugo new site my-academic-site
cd my-academic-site
git init
```

2. 添加主题作为子模块：
```bash
git submodule add https://github.com/zdong1995/AcademiaLight.git themes/AcademiaLight
```

3. 配置 `config.yaml`：
```yaml
baseURL: "https://example.com"
theme: "AcademiaLight"
```

4. 启动 Hugo 服务器：
```bash
hugo server
```

现在可以通过 `http://localhost:1313` 访问你的网站了

## 配置

### 基本配置

```yaml
params:
  # 基本信息
  author: "Your Name"
  position: "Assistant Professor"
  affiliation: "Your University"
  email: "your.email@university.edu"
  avatar: "/images/avatar.png"
  
  # Clustrmaps 配置
  clustrmaps:
    enable: true
    widget_id: "YOUR_WIDGET_ID"
    
  # 社交链接
  social:
    googleScholar: "https://scholar.google.com/citations?user=xxx"
    github: "https://github.com/username"
    linkedin: "https://linkedin.com/in/username"
```

### 内容组织

```
data/
├── about.yaml         # 个人信息
├── publications.yaml  # 发表论文列表
├── talks.yaml        # 演讲和报告
├── services.yaml     # 学术服务
├── news.yaml         # 新闻动态
└── contacts.yaml     # 联系方式
```

### 社交链接

主题支持多种社交媒体和学术档案链接。在 `config.yaml` 中配置：

```yaml
params:
  social:
    googleScholar: "https://scholar.google.com/citations?user=xxx"
    github: "https://github.com/username"
    linkedin: "https://linkedin.com/in/username"
    twitter: "https://twitter.com/username"
    x: "https://x.com/username"      # X（原 Twitter）
    orcid: "https://orcid.org/xxxx-xxxx-xxxx-xxxx"
    researchgate: "https://www.researchgate.net/profile/username"
    blog: "https://example.com/blog"
    cv: "/files/cv.pdf"             # 本地 PDF 文件
```

可以通过添加或删除配置项来启用或禁用各个社交链接。

### 修改颜色主题

编辑 `assets/scss/_variables.scss` 文件：

```scss
// Colors
$primary-color: #13294B;
$secondary-color: #39c;
$text-color: #595959;
```

### 自定义布局

主题使用模块化的 SCSS 结构：
- `_variables.scss`: 全局变量
- `_base.scss`: 基础样式
- `_layout.scss`: 布局结构
- `_components.scss`: 组件样式
- `_sections.scss`: 部分样式
- `_dark.scss`: 深色模式

## 贡献

欢迎提交 Pull Request 和 Issue！

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件 