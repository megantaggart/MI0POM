# MI0POM - Amateur Radio Projects & Blog

This is the source for my amateur radio website, built with Hugo and the Blowfish theme.

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/megantaggart/MI0POM.git
cd MI0POM

# Start the development server
hugo server -D

# Visit http://localhost:1313
```

### Creating New Content

```bash
# New blog post
hugo new content/posts/my-post.md

# New project
hugo new content/projects/my-project.md

# New equipment review
hugo new content/equipment/my-review.md
```

## 📁 Site Structure

```
MI0POM/
├── content/
│   ├── posts/          # Blog posts
│   ├── projects/       # Project writeups
│   ├── equipment/      # Equipment reviews/info
│   ├── about.md        # About page
│   └── privacy.md      # Privacy policy
├── themes/blowfish/    # Hugo theme (git submodule)
├── config/_default/
│   ├── params.toml     # Site parameters & features
│   ├── languages.toml  # Language settings
│   └── menus.toml      # Navigation menus
└── hugo.toml           # Main config file
```

## 🎨 Customization

### Changing Colors

Edit `config/_default/params.toml` and change the `colorScheme`:

```toml
colorScheme = "ocean"  # Options: blowfish, avocado, fire, ocean, forest, 
                       # princess, neon, bloody, terminal, marvel, noir, 
                       # autumn, congo, slate
```

You can also create custom color schemes in `assets/css/schemes/`

### Customizing Navigation

Edit `config/_default/menus.toml` to add/remove menu items.

### Author Info

Update your details in `config/_default/params.toml` and `config/_default/languages.toml`

## 💬 Comments (Giscus Setup)

Comments use GitHub Discussions via Giscus. To activate:

1. Enable Discussions in your GitHub repo settings
2. Visit [https://giscus.app](https://giscus.app)
3. Follow the setup wizard to get your `repoID` and `categoryID`
4. Add them to `config/_default/params.toml` under `[comments.giscus]`

## 📝 Content Tips

### Front Matter

All content files use YAML front matter:

```yaml
---
title: "Your Post Title"
date: 2026-02-10
draft: false  # Set to false when ready to publish
description: "A short description"
tags: ["antenna", "HF", "20m"]
categories: ["Projects"]
---
```

### Categories & Tags

Use categories to organize content type:
- `Blog` - General posts
- `Projects` - Build projects
- `Reviews` - Equipment reviews
- `Tutorials` - How-to guides

Use tags for technical details:
- Bands: `HF`, `VHF`, `UHF`, `2m`, `20m`, etc.
- Topics: `antenna`, `CW`, `digital`, `contest`, `DX`
- Types: `homebrew`, `DIY`, `portable`, `mobile`

## 🚀 Deployment

The site auto-deploys to GitHub Pages when you push to the `main` branch.

Manual deployment:
```bash
hugo  # Builds to public/
# Then push the public/ folder or use GitHub Actions
```

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Blowfish Theme Docs](https://blowfish.page/)
- [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/)

## 📄 License

Copyright © 2026 Megan Taggart. All rights reserved.

Content on this site is protected by copyright. The Blowfish theme is MIT licensed.

## 📞 Contact

- **Email**: mi0pom@example.com
- **QRZ**: [MI0POM](https://qrz.com/db/MI0POM)
- **GitHub**: [@megantaggart](https://github.com/megantaggart)

73 de MI0POM 📻
