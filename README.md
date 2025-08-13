# 光遇账号价值评估系统

一个专门为手游《Sky: Children of the Light》（光遇）设计的账号价值评估工具。

## 功能特性

- 🎮 **多区服支持** - iOS、安卓官服、华为渠道服、OPPO渠道服
- 🎓 **季节毕业评估** - 支持所有已发布的季节内容评估
- 🎁 **礼包统计** - 完整的游戏内礼包和装饰品价值计算
- 💰 **自动计算** - 根据选择自动计算账号总价值
- 📱 **响应式设计** - 完美支持桌面端和移动端
- 📄 **分页显示** - 优化大量数据的显示体验

## 在线体验

🌐 **GitHub Pages**: [https://yourusername.github.io/sky-account-valuator/](https://yourusername.github.io/sky-account-valuator/)

## 本地运行

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/sky-account-valuator.git
cd sky-account-valuator
```

2. 使用任意HTTP服务器运行：
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx serve .

# 或直接用浏览器打开 index.html
```

## 文件结构

```
.
├── index.html          # 主页面
├── script.js          # JavaScript逻辑（包含分页功能）
├── style.css          # 样式文件
├── json/
│   ├── seasons_price.json   # 季节价格数据
│   └── gifts_price.json     # 礼包价格数据
└── README.md          # 项目说明
```

## GitHub Pages 部署

1. 将代码推送到GitHub仓库
2. 进入仓库的 **Settings** → **Pages**
3. 选择 **Source** 为 **Deploy from a branch**
4. 选择 **Branch** 为 **main** (或 **master**)
5. **Folder** 选择 **/ (root)**
6. 点击 **Save**

几分钟后，你的网站就会在 `https://yourusername.github.io/repositoryname/` 上线。

## 技术栈

- 💻 **纯前端** - HTML5 + CSS3 + Vanilla JavaScript
- 🎨 **UI设计** - 渐变背景 + 现代化卡片设计
- 📊 **数据存储** - JSON文件格式
- 🔧 **功能特性** - 分页、筛选、响应式布局

## 价格体系说明

### 基础价值（区服）
- iOS: 150元
- 安卓官服: 120元  
- 华为渠道服: 80元
- OPPO渠道服: 80元

### 季节价值
不同季节根据稀有度和内容丰富度定价，从200元到3500元不等。

### 礼包价值
各类游戏内购礼包按实际价值定价，从3元到98元不等。

## 更新日志

### v1.0.0 (2025-01-13)
- ✨ 初始版本发布
- 🎮 支持四大主要区服
- 📄 添加分页功能优化体验  
- 🎨 现代化UI设计
- 📱 移动端适配完成

## 贡献

欢迎提交Issue和Pull Request来完善这个项目！

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 免责声明

本工具仅供参考，实际交易价格可能因市场波动而有所差异。请谨慎进行账号交易。

---

⭐ 如果这个项目对你有帮助，请给个Star支持一下！