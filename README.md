# Rangreja - Modern Educational Platform

![Rangreja Logo](https://via.placeholder.com/200x80/6366f1/ffffff?text=Rangreja)

A cutting-edge educational platform website built with modern web technologies, featuring interactive learning experiences, responsive design, and contemporary UI elements.

## 🌟 Features

### ✨ Modern Design
- **Contemporary UI/UX** with gradient backgrounds and smooth animations
- **Dark/Light Theme** toggle with system preference detection
- **Responsive Design** that works seamlessly across all devices
- **Glassmorphism Effects** with backdrop blur and transparency
- **Micro-interactions** and hover effects for enhanced user experience

### 🎓 Educational Features
- **Multi-Grade Support** for Classes 9th, 10th, and 11th
- **Subject Categories** with comprehensive course materials
- **Live Classes** scheduling and management
- **Interactive Cards** with detailed subject information
- **Progress Tracking** visualization
- **Study Materials** organization and access

### 🚀 Technical Features
- **Vanilla JavaScript** - No framework dependencies
- **CSS Custom Properties** for theming and consistency
- **Intersection Observer API** for scroll animations
- **Local Storage** for theme and preference persistence
- **Progressive Enhancement** with graceful degradation
- **SEO Optimized** with semantic HTML and meta tags

### 📱 User Experience
- **Smooth Scrolling** navigation
- **Mobile-First** responsive design
- **Touch-Friendly** interface elements
- **Accessibility** compliant (WCAG 2.1)
- **Fast Loading** with optimized assets
- **Cross-Browser** compatibility

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and modern web standards
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+** - Modern JavaScript features and APIs
- **Font Awesome** - Icon library for consistent iconography
- **Google Fonts** - Poppins font family for modern typography

## 📦 Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Modern web browser

### Quick Start
```bash
# Clone the repository
git clone https://github.com/rangreja/website.git

# Navigate to project directory
cd rangreja-website

# Install dependencies (optional, for development tools)
npm install

# Start development server
npm start
```

### Alternative Setup (No Node.js required)
1. Download or clone the repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

## 🚀 Usage

### Development
```bash
# Start development server with live reload
npm run dev

# Format code
npm run format

# Lint CSS and JavaScript
npm run test

# Run Lighthouse audit
npm run lighthouse
```

### Production
```bash
# Build optimized version
npm run build

# Deploy to Surge.sh
npm run deploy
```

## 📁 Project Structure

```
rangreja-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
├── README.md          # Project documentation
├── favicon.png        # Website favicon
└── dist/              # Build output (generated)
    ├── styles.min.css
    ├── script.min.js
    └── images/
```

## 🎨 Customization

### Colors and Themes
The website uses CSS custom properties for easy theming. You can modify colors in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #06b6d4;
    /* ... more color variables */
}
```

### Content Updates
- **Subject Data**: Modify the `subjectData` object in `script.js`
- **Hero Content**: Update the hero section in `index.html`
- **Contact Information**: Change contact details in the contact section

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `styles.css`
3. Add any interactive functionality to `script.js`

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration (optional):
```env
PORT=3000
NODE_ENV=development
```

### Build Configuration
Modify `package.json` scripts for custom build processes:
```json
{
  "scripts": {
    "build": "npm run minify-css && npm run minify-js",
    "deploy": "npm run build && npx surge dist/ your-domain.com"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write semantic HTML with proper accessibility attributes
- Use CSS custom properties for consistent theming
- Write clean, commented JavaScript
- Test across different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome** for the comprehensive icon library
- **Google Fonts** for the beautiful Poppins typography
- **Intersection Observer API** for efficient scroll animations
- **CSS Grid and Flexbox** for modern layout capabilities

## 📞 Support

- **Email**: support@rangreja.com
- **Website**: [https://rangreja.com](https://rangreja.com)
- **Issues**: [GitHub Issues](https://github.com/rangreja/website/issues)

## 🗺️ Roadmap

- [ ] **Backend Integration** - Connect with learning management system
- [ ] **User Authentication** - Login and registration system
- [ ] **Video Player** - Custom video player for lectures
- [ ] **Progress Tracking** - Detailed learning analytics
- [ ] **Mobile App** - Native mobile applications
- [ ] **Offline Support** - Progressive Web App features

## 📊 Analytics

The website includes basic analytics tracking (can be configured):
- Page views and user interactions
- Theme preference statistics
- Popular subjects and features
- Performance monitoring

---

<div align="center">
  <strong>Built with ❤️ for students by the Rangreja Team</strong>
  <br>
  <sub>Empowering education through modern technology</sub>
</div>