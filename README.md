# AcademiaLight

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Hugo Build](https://github.com/zdong1995/AcademiaLight/actions/workflows/hugo.yml/badge.svg)](https://github.com/zdong1995/AcademiaLight/actions/workflows/hugo.yml) ![GitHub last commit](https://img.shields.io/github/last-commit/zdong1995/AcademiaLight)

A clean, lightweight, and elegant Hugo theme for academic profiles. The UI design is inspired by [minimal-light](https://github.com/yaoyao-liu/minimal-light) theme.

[Demo](https://academialight.netlify.app) | [中文文档](README_zh.md)

## Prerequisites

Install Hugo:
```bash
# macOS (Homebrew)
brew install hugo

# Windows (Chocolatey)
choco install hugo-extended

# Linux (Snap)
snap install hugo
```

Verify installation:
```bash
hugo version
```

Make sure you have Hugo Extended version 0.80.0 or later.

## Quick Start

### Method 1: Using the Example Site

1. Clone the repository:
```bash
git clone https://github.com/zdong1995/AcademiaLight.git
```

2. Start Hugo server:
```bash
hugo server --source=exampleSite
```

Your site should now be available at `http://localhost:1313`

### Method 2: Using with Your Site

1. Create a new Hugo site (skip if you already have one):
```bash
hugo new site my-academic-site
cd my-academic-site
git init
```

2. Add the theme as a submodule:
```bash
git submodule add https://github.com/zdong1995/AcademiaLight.git themes/AcademiaLight
```

3. Configure in `config.yaml`:
```yaml
baseURL: "https://example.com"
theme: "AcademiaLight"
```

4. Start Hugo server:
```bash
hugo server
```

Your site should now be available at `http://localhost:1313`

## Configuration

### Basic Settings

```yaml
params:
  # Basic Information
  author: "Your Name"
  position: "Assistant Professor"
  affiliation: "Your University"
  email: "your.email@university.edu"
  avatar: "/images/avatar.png"
  
  # Clustrmaps Configuration
  clustrmaps:
    enable: true
    widget_id: "YOUR_WIDGET_ID"
    
  # Social Links
  social:
    googleScholar: "https://scholar.google.com/citations?user=xxx"
    github: "https://github.com/username"
    linkedin: "https://linkedin.com/in/username"
```

### Content Structure

```
data/
├── about.yaml         # About information
├── publications.yaml  # Publications list
├── talks.yaml        # Talks and presentations
├── services.yaml     # Academic services
├── news.yaml         # News and updates
└── contacts.yaml     # Contact information
```

### Social Links

The theme supports various social media and academic profile links. Configure them in `config.yaml`:

```yaml
params:
  social:
    googleScholar: "https://scholar.google.com/citations?user=xxx"
    github: "https://github.com/username"
    linkedin: "https://linkedin.com/in/username"
    twitter: "https://twitter.com/username"
    x: "https://x.com/username"      # X (formerly Twitter)
    orcid: "https://orcid.org/xxxx-xxxx-xxxx-xxxx"
    researchgate: "https://www.researchgate.net/profile/username"
    blog: "https://example.com/blog"
    cv: "/files/cv.pdf"             # Local PDF file
```

Each social link can be enabled/disabled by adding or removing it from the configuration.

### Color Theme

Edit `assets/scss/_variables.scss`:

```scss
// Colors
$primary-color: #13294B;
$secondary-color: #39c;
$text-color: #595959;
```

### Layout Structure

The theme uses a modular SCSS structure:
- `_variables.scss`: Global variables
- `_base.scss`: Base styles
- `_layout.scss`: Layout structure
- `_components.scss`: Component styles
- `_sections.scss`: Section styles
- `_dark.scss`: Dark mode styles

## Contributing

Pull requests and issues are welcome!


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details