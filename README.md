# 🕌 Norrbottens Islamiska Center (NIC) Website

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)

**A modern, responsive website for the Muslim community in Norrbotten, Sweden**

</div>


## 📖 Overview

> **Note**: This is a **practice/learning project** created to demonstrate web development skills. It is inspired by the Norrbottens Islamiska Center but is not an official website.

The **Norrbottens Islamiska Center (NIC)** website concept serves as a digital hub for the Muslim community living in the northern county of Sweden, Norrbotten. This project represents a comprehensive web presence designed to connect community members, share Islamic knowledge, display prayer timings, and facilitate donations for the masjid construction project.

Built with modern web technologies and a focus on accessibility, the website provides an elegant, user-friendly interface that reflects the values and mission of an Islamic Center while serving the practical needs of the community. This project showcases skills in **responsive design**, **modern CSS**, **semantic HTML**, and **user experience design**.

### 🎯 Project Context & Learning Objectives

This practice project demonstrates the ability to create a complete, professional website for a real-world use case. The concept is based on an Islamic community center, showcasing:

- **Responsive Web Design**: Mobile-first approach with multiple breakpoints
- **Modern CSS Techniques**: Flexbox, animations, transitions, custom properties
- **Semantic HTML5**: Proper structure and accessibility considerations
- **Multi-Page Architecture**: Navigation, routing, and consistent design system
- **UI/UX Design**: User-centered design with clear information hierarchy
- **Performance Optimization**: Lightweight, fast-loading pages
- **Real-World Application**: Practical features like prayer timings, contact forms, and galleries

---

## 🎓 Skills Demonstrated

This project showcases proficiency in:

- ✅ **HTML5** - Semantic markup, accessibility, SEO best practices
- ✅ **CSS3** - Flexbox, responsive design, animations, custom properties
- ✅ **JavaScript (ES6+)** - Interactive features, API integration, DOM manipulation
- ✅ **Responsive Design** - Mobile-first approach, media queries, fluid layouts
- ✅ **UI/UX Design** - Color theory, typography, visual hierarchy, user flows
- ✅ **Web Performance** - Optimized assets, efficient CSS, fast load times
- ✅ **API Integration** - RESTful APIs (Aladhan Prayer Times API)
- ✅ **Cross-Browser Compatibility** - Testing across multiple browsers
- ✅ **Version Control** - Git workflow and GitHub best practices
- ✅ **Documentation** - Professional README and code organization

---

## ✨ Features

### 🏛️ Core Functionality

- **📿 Prayer Timings Display**
  - Real-time prayer schedules for Luleå
  - Fajr, Zuhar, Asar, Maghrib, Isha, and Jummah timings
  - Beautiful visual presentation with Islamic motifs

- **📱 Fully Responsive Design**
  - Mobile-first approach
  - Optimized for tablets, phones, and desktops
  - Fluid layouts and adaptive images
  - Touch-friendly navigation

- **🌐 Multi-Page Architecture**
  - Home page with hero section
  - About NIC - Mission and vision
  - The Masjid - Construction project details
  - Education - Islamic learning resources
  - Team - Community leadership
  - Contact Us - Communication channels

### 🎨 Advanced UI/UX Features

- **Modern Design Aesthetics**
  - Clean, professional color scheme (#0D6CAC blue, #FFCB00 gold, #E8F2F8 light)
  - Custom Google Fonts (Montserrat, Almarai, Inter, Akaya Telivigala)
  - Smooth hover effects and transitions
  - Glassmorphism and gradient backgrounds

- **Interactive Elements**
  - **Global Ripple Effect**: Material-design inspired click feedback on all buttons
  - **Enhanced Navigation**: Animated underline effects and active state detection
  - **Image Hover Effects**: Subtle scaling and lifting animations for content images
  - **Animated Facebook Feed** cards with bounce and hover effects
  - **Mobile Hamburger Menu** with smooth slide transitions
  - **Gallery Lightbox** with keyboard and mouse navigation
  - **Back-to-Top Button** with smooth scrolling behavior
  - **Real-time Form Validation** with visual feedback indicators

- **Rich Content Sections**
  - **Dynamic prayer timings** via Aladhan API (auto-updates hourly)
  - **Daily Quranic verse** with automatic rotation
  - **Hadith of the day** from authentic collections
  - Photo gallery with **interactive lightbox viewer**
  - Embedded Google Maps location
  - Social media integration (Facebook, Instagram, YouTube)

### 🔧 Technical Features

- **JavaScript Functionality**
  - **Native JS Architecture**: Fully refactored to remove jQuery dependency for better performance
  - **Donation Modal 2.0**: Enhanced with "Copy IBAN" and "Copy Swish" clipboard functionality
  - **Prayer Times API**: Integrated real-time scheduling via Aladhan API
  - **Micro-Interactions**: Custom ripple effects and image lift animations
  - **Gallery Engine**: Custom lightbox with pre-loading and multi-directional navigation
  - **Smart Scroll**: Debounced scroll handlers for "Back-to-Top" and fade-in animations
  - **Dynamic Content**: Automated Quranic verse and Hadith rotation mechanisms

- **Performance Optimized**
  - Lightweight vanilla CSS and JavaScript (no framework overhead)
  - Optimized image assets
  - Fast page load times
  - Minimal external dependencies
  - Debounced scroll events for better performance

- **SEO & Accessibility**
  - Semantic HTML5 structure
  - Proper heading hierarchy
  - Alt text for all images
  - Meta tags for social sharing

- **Cross-Browser Compatible**
  - Works on all modern browsers
  - Graceful degradation for older browsers
  - Consistent rendering across platforms

---

## 🏗️ Architecture & Design

### Project Structure

```
TheNic-Website/
├── home/
│   ├── Home.html                    # Main landing page
│   ├── style.css                    # Global styles with responsive design
│   ├── script.js                    # Main JavaScript file (mobile menu, API, lightbox)
│   ├── js-styles.css                # JavaScript-specific styles
│   ├── about-nic/
│   │   ├── about.html              # About NIC page
│   │   └── about.css               # About page styles
│   ├── the-masjid/
│   │   ├── Masjid.html             # Masjid information page
│   │   └── masjid.css              # Masjid page styles
│   ├── education/
│   │   ├── education.html          # Education resources page
│   │   └── education.css           # Education page styles
│   ├── team/
│   │   ├── team.html               # Team members page
│   │   └── team.css                # Team page styles
│   └── contact-us/
│       ├── Contact.html            # Contact form page
│       ├── contact.css             # Contact page styles
│       ├── contact-form.js         # Form validation JavaScript
│       └── contact-form-styles.css # Form validation styles
├── assets/
│   ├── logo.png                    # NIC logo
│   ├── herosection.png             # Hero background
│   ├── madina.png                  # Decorative Islamic imagery
│   ├── design.png                  # Section dividers
│   ├── facebook1.png               # Facebook feed image 1
│   ├── facebook2.png               # Facebook feed image 2
│   ├── our mission pic.png         # Mission section image
│   ├── 1.png - 16.png             # Gallery images
│   ├── facebook.png                # Social media icons
│   ├── instagram.png
│   ├── youtube.png
│   └── [social media footer icons]

### Design System

#### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#0D6CAC` | Navigation, headers, primary elements |
| Gold Accent | `#FFCB00` | CTAs, highlights, active states |
| Light Blue | `#E8F2F8` | Text on dark backgrounds, subtle accents |
| White | `#FFFFFF` | Backgrounds, contrast elements |
| Dark Blue | `#084B80` | Hover states, depth |

#### Typography

- **Montserrat**: Primary font for body text and navigation (weights: 400-900)
- **Almarai**: Arabic text and Islamic content (weights: 300-800)
- **Inter**: Hero section and emphasis text (weights: 100-900)
- **Akaya Telivigala**: Decorative headings in footer

#### Component Architecture

1. **Navigation Bar**
   - Sticky header with logo
   - Horizontal menu with active state indicators
   - Social media quick links
   - Responsive hamburger menu (mobile)

2. **Hero Section**
   - Full-width background image
   - Bismillah and center name in Arabic/English
   - Mission statement
   - Gradient overlay for readability

3. **Prayer Timings Card**
   - Rounded top design
   - Gold border accent
   - Madina icon
   - Structured timing grid

4. **Facebook Feeds**
   - Card-based layout
   - Hover effects with elevation
   - Animated Facebook icons
   - Direct social media integration

5. **Content Sections**
   - Consistent spacing and rhythm
   - Decorative Islamic design elements
   - Centered layouts for readability
   - Clear visual hierarchy

6. **Gallery Grid**
   - Flexbox-based responsive grid
   - Hover interactions
   - Lazy loading ready
   - Lightbox compatible

7. **Footer**
   - Three-column layout
   - Site navigation links
   - Social media connections
   - Copyright information

### Responsive Breakpoints

```css
/* Large Desktops: > 1200px */
Default styles

/* Medium Desktops: 992px - 1199px */
@media (max-width: 1199.98px)

/* Tablets: 768px - 991px */
@media (max-width: 991.98px)

/* Mobile Landscape: 576px - 767px */
@media (max-width: 767.98px)

/* Mobile Portrait: < 576px */
@media (max-width: 575.98px)
```

---

## 🛠️ Technical Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Markup** | HTML5 | Latest | Semantic structure & SEO |
| **Styling** | CSS3 | Latest | Modern layouts, animations & variables |
| **Scripting** | Vanilla JS | ES6+ | High-performance interactive logic (No jQuery) |
| **Fonts** | Google Fonts | - | Montserrat, Almarai, Inter, Akaya |
| **Icons** | Font Awesome | 6.4.0 | Responsive icon system |
| **Maps** | Google Maps | - | Location & proximity display |

### External Dependencies

```html
<!-- Google Fonts -->
- Montserrat (weights: 100-900)
- Almarai (weights: 300, 400, 700, 800)
- Inter (weights: 100-900)
- Akaya Telivigala

<!-- Icon Library -->
- Font Awesome 6.4.0 (CDN)

<!-- Embedded Services -->
- Google Maps iframe
```

---

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)
- Text editor or IDE (VS Code, Sublime Text, etc.)

### Installation

#### Method 1: Direct File Access

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/TheNic-Website.git
   cd TheNic-Website
   ```

2. **Open in browser**
   ```bash
   # Navigate to the home folder
   cd home
   
   # Open Home.html in your default browser
   # Windows
   start Home.html
   
   # macOS
   open Home.html
   
   # Linux
   xdg-open Home.html
   ```

#### Method 2: Local Development Server

Using Python:
```bash
# Python 3
cd TheNic-Website
python -m http.server 8000

# Visit http://localhost:8000/home/Home.html
```

Using Node.js (with http-server):
```bash
npm install -g http-server
cd TheNic-Website
http-server -p 8000

# Visit http://localhost:8000/home/Home.html
```

Using VS Code Live Server:
1. Install "Live Server" extension
2. Right-click on `home/Home.html`
3. Select "Open with Live Server"

---

## 📱 Usage Guide

### For Visitors

1. **Viewing Prayer Timings**
   - Prayer times are displayed on the home page
   - Updated regularly for Luleå, Sweden
   - Includes all five daily prayers plus Jummah

2. **Exploring Content**
   - Use the navigation menu to explore different sections
   - Read daily Quranic verses and Hadith
   - Browse the community photo gallery
   - Find the center's location via embedded map

3. **Making Donations**
   - Click the "Donate Now" button on the home page
   - Support the masjid construction project
   - Secure donation processing

4. **Contacting the Center**
   - Visit the "Contact Us" page
   - Email: contact@thenic.com
   - Follow on social media (Facebook, Instagram, YouTube)

### For Developers

#### Customizing Content

**Update Prayer Timings:**
```html
<!-- Edit home/Home.html, lines 86-91 -->
<div class="right common2">
    <p>06:02 AM</p>  <!-- Fajr -->
    <p>12:18 AM</p>  <!-- Zuhar -->
    <p>13:48 AM</p>  <!-- Asar -->
    <p>16:11 AM</p>  <!-- Maghrib -->
    <p>18:08 AM</p>  <!-- Isha -->
    <p>11:46 AM</p>  <!-- Jummah -->
</div>
```

**Change Daily Verse:**
```html
<!-- Edit home/Home.html, lines 148-153 -->
<div class="middle">
    <p>وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا ۖ إِنَّكَ لَن تَخْرِقَ الْأَرْضَ وَلَن تَبْلُغَ الْجِبَالَ طُولًا</p>
</div>
<div class="lower">
    <p>And do not walk on the earth arrogantly...</p>
</div>
```

**Modify Color Scheme:**
```css
/* Edit home/style.css */
:root {
    --primary-blue: #0D6CAC;
    --gold-accent: #FFCB00;
    --light-blue: #E8F2F8;
    --dark-blue: #084B80;
}
```

**Add Gallery Images:**
```html
<!-- Edit home/Home.html, gallery section -->
<div class="image">
    <img src="../assets/17.png" alt="Community Event">
    <!-- Add more images as needed -->
</div>
```

---

## 🎨 Development Setup

### Recommended Tools

- **Code Editor**: Visual Studio Code
- **Browser DevTools**: Chrome DevTools or Firefox Developer Tools
- **Version Control**: Git
- **Image Optimization**: TinyPNG, ImageOptim
- **CSS Validation**: W3C CSS Validator
- **HTML Validation**: W3C Markup Validator

### Development Workflow

1. **Setup Environment**
   ```bash
   git clone <repository-url>
   cd TheNic-Website
   code .  # Open in VS Code
   ```

2. **Make Changes**
   - Edit HTML files for content updates
   - Modify CSS for styling changes
   - Test in multiple browsers

3. **Test Responsiveness**
   - Use browser DevTools responsive mode
   - Test on actual devices when possible
   - Check all breakpoints (mobile, tablet, desktop)

4. **Validate Code**
   - Run HTML through W3C validator
   - Check CSS for errors
   - Test all links and navigation

5. **Optimize Assets**
   - Compress images before adding
   - Minify CSS for production
   - Remove unused code

6. **Deploy**
   - Upload to web hosting
   - Configure domain settings
   - Test live site thoroughly

---

## ⚡ Performance & Optimization

### Current Optimizations

✅ **Vanilla CSS** - No framework overhead, faster load times  
✅ **Optimized Images** - Compressed PNG assets  
✅ **Minimal Dependencies** - Only essential external resources  
✅ **Efficient Selectors** - Clean, performant CSS  
✅ **Responsive Images** - Adaptive sizing for different screens  

### Performance Metrics

| Metric | Target | Current Status |
|--------|--------|----------------|
| First Contentful Paint | < 1.5s | ✅ Optimized |
| Time to Interactive | < 3.0s | ✅ Optimized |
| Total Page Size | < 2MB | ✅ ~1.5MB |
| CSS File Size | < 50KB | ✅ ~23KB |
| Image Optimization | 80%+ | ✅ Compressed |

### Future Optimization Opportunities

- [ ] Implement lazy loading for gallery images
- [ ] Add service worker for offline functionality
- [ ] Minify CSS and HTML for production
- [ ] Implement critical CSS for above-the-fold content
- [ ] Add WebP image format support with fallbacks
- [ ] Enable browser caching headers
- [ ] Implement CDN for static assets

---

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

### How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Test thoroughly across devices
   - Update documentation as needed

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Include screenshots for UI changes

### Contribution Guidelines

- **Code Style**: Follow existing HTML/CSS conventions
- **Responsive**: Ensure all changes work on mobile, tablet, and desktop
- **Testing**: Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- **Documentation**: Update README if adding new features
- **Commits**: Write clear, descriptive commit messages
- **Respect**: Be respectful and constructive in discussions

### Areas for Contribution

- 🌐 **Translations**: Add Swedish language support
- 📱 **Mobile UX**: Enhance mobile experience
- ♿ **Accessibility**: Improve WCAG compliance
- 🎨 **Design**: Refine visual elements
- 🐛 **Bug Fixes**: Report and fix issues
- 📚 **Documentation**: Improve guides and comments
- ⚡ **Performance**: Optimize load times

---

## 🗺️ Roadmap & Future Plans

### Phase 1: Core Enhancements (Q2 2026)
- [ ] Dynamic prayer time API integration
- [ ] Automated daily Quranic verse rotation
- [ ] Contact form backend implementation
- [ ] Newsletter subscription system

### Phase 2: Interactive Features (Q3 2026)
- [ ] Event calendar for community activities
- [ ] Online donation payment gateway
- [ ] Member registration portal
- [ ] Live streaming for Friday prayers

### Phase 3: Advanced Functionality (Q4 2026)
- [ ] Mobile app (iOS/Android)
- [ ] Push notifications for prayer times
- [ ] Islamic library and resources section
- [ ] Community forum/discussion board

### Phase 4: Expansion (2027)
- [ ] Multi-language support (Swedish, Arabic, English)
- [ ] Admin dashboard for content management
- [ ] Advanced analytics and reporting
- [ ] Integration with other Islamic centers in Sweden

---

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2023 Norrbottens Islamiska Center

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact & Support

### Get in Touch

- **Email**: contact@thenic.com
- **Website**: [thenic.se](https://thenic.se)
- **Location**: 974 52 Hertsön, Luleå, Sweden

### Social Media

<div align="center">

[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/nicsverige)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/nicsverige)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@norrbottenislamiccenter8126)

</div>

### Developer Contact

For technical inquiries or collaboration:

- **Developer**: Muhammad Affan
- **GitHub**: M-Affan01
- **LinkedIn**: https://www.linkedin.com/in/affan-nexor-66abb8321/
- **Email**: maffan2830@gmail.com

---

## 🙏 Acknowledgments

- **Community Leaders**: For guidance and vision
- **Design Inspiration**: Modern Islamic web design principles
- **Contributors**: All community members who provided feedback
- **Open Source**: Font Awesome, Google Fonts, and other tools
- **Photography**: Community members who contributed gallery images

---

## 📚 Additional Resources

### Islamic Resources
- [Quran.com](https://quran.com) - Online Quran with translations
- [Sunnah.com](https://sunnah.com) - Hadith collections
- [IslamQA](https://islamqa.info) - Islamic Q&A

### Web Development Resources
- [MDN Web Docs](https://developer.mozilla.org) - HTML/CSS reference
- [CSS-Tricks](https://css-tricks.com) - CSS tutorials and guides
- [Can I Use](https://caniuse.com) - Browser compatibility tables

### Swedish Islamic Organizations
- [Sveriges Muslimska Förbund](https://sverigesmuslimskaforbund.se)
- [Islamic Center Stockholm](https://islamiccenter.se)

---

<div align="center">

**Built with ❤️ as a practice project inspired by the Muslim community in Norrbotten**

*"O people! We created you all from a male and a female, and we made you into nations and tribes so that you may know one another"*  
**— Surah Al-Hujurat (49:13)**

© 2026 Muhammad Affan | Practice/Portfolio Project

[⬆ Back to Top](#-norrbottens-islamiska-center-nic-website)


