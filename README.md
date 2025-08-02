# Annie LeBlanc - Contemporary Artist Portfolio

A bold, contemporary artist portfolio website showcasing narrative-driven digital art collections with cutting-edge visual effects and immersive storytelling.

## 🎨 About

Annie LeBlanc is a contemporary visual artist who began creating during the isolation of 2020. Her work challenges conventional boundaries through bold, unapologetic visual narratives that explore modern themes of technology, mythology, and human connection.

## ✨ Features

- **Liquid Silver Paint Effects** - Custom CSS animations creating bleeding silver paint effects
- **Responsive Grid Layout** - CSS Grid and Flexbox for perfect gallery organization
- **Multi-Page Architecture** - Clean separation of content across dedicated pages
- **Interactive Artwork Cards** - Hover animations and shimmer effects
- **Mobile-First Design** - Optimized for all screen sizes
- **Contemporary Aesthetics** - SF MOMA-inspired minimalist design with neon accents

## 🖼️ Art Collections

### "Watch the Sun Rise Over Mt. Diablo" (6 pieces)
A mythology following Frank's journey from cyberpunk anti-hero to monster romance, exploring themes of love, family, and choosing humanity over technology.

**Featured Pieces:**
- Frank - Cyberpunk data thief
- Julia - Goddess with glowing baton
- Love at First Sight - Gothic film noir romance
- Beautiful Banshee - Julia communing with undead
- A Glorious Family Reunion - Divine parents on Mount Diablo
- The Fabulous Five - Intergalactic crime-fighting family

### "Television Skies" (6 pieces)  
A dystopian series exploring surveillance, corporate control, and resistance in a post-nuclear cyberpunk world.

**Featured Pieces:**
- The Last Transmission - Android's final warning
- Nuclear Dawn - Mushroom cloud over cyberpunk city
- Undead Protocol - Corporate forces vs zombie rebels
- The Pyramid Ascends - Electric pyramid in desert storm
- Western Front 2087 - Futuristic laser trench warfare
- The Overlords' Council - Elite gathering in Paris penthouse

## 🛠️ Technology Stack

- **HTML5** - Semantic markup and accessibility
- **CSS3** - Grid, Flexbox, animations, and custom paint effects
- **Vanilla JavaScript** - Form handling and interactions
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
annie-leblanc-portfolio/
├── index.html          # Entry point with redirect
├── home.html           # Main landing page
├── about.html          # Artist biography and philosophy
├── gallery.html        # Art collections showcase
├── contact.html        # Professional contact form
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
└── images/             # Artwork image assets
    ├── frank_cyberpunk.jpg
    ├── julia_baton.jpg
    ├── love_first_sight.jpg
    ├── beautiful_banshee.jpg
    ├── family_reunion.jpg
    ├── fabulous_five.jpg
    ├── last_transmission.jpg
    ├── nuclear_dawn.jpg
    ├── undead_protocol.jpg
    ├── pyramid_ascends.jpg
    ├── western_front.jpg
    ├── overlords_council.jpg
    ├── urban_solitude.jpg
    └── neon_dreams.jpg
```

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/annie-leblanc-portfolio.git
cd annie-leblanc-portfolio
```

### 2. Add Artwork Images
- Create an `images/` folder in the root directory
- Add artwork files matching the names in the structure above
- Use high-quality JPG format, minimum 1200px width recommended

### 3. Launch Locally
**Option A: Direct Browser**
```bash
# Simply open index.html in your browser
open index.html
```

**Option B: Local Server (Recommended)**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

## 🎯 Key Design Features

### Liquid Silver Paint Effect
The signature visual element - silver paint bleeding down from the hero section:
- Dual-layer paint flows with organic shapes
- Gradient opacity transitions
- Natural flowing animations
- Responsive to user interactions

### Layout System
- **CSS Grid** for main structural layouts
- **Flexbox** for component arrangements
- **Mobile-first** responsive design
- **Semantic HTML** for accessibility

### Interactive Elements
- Artwork cards with hover animations
- Navigation with gradient reveals
- Form elements with neon focus states
- Social buttons with glow effects

## 📱 Responsive Design

| Screen Size | Layout | Features |
|-------------|--------|----------|
| **Mobile** (≤480px) | Single column, vertical nav | Optimized touch targets |
| **Tablet** (481px-768px) | Two columns, stacked nav | Balanced grid layouts |
| **Desktop** (≥769px) | Full horizontal, flexible grid | Enhanced hover effects |

## 🎨 Brand Colors

```css
/* Primary Colors */
--neon-pink: #ff0080      /* Main accent color */
--electric-green: #00ff80 /* Gradient complement */
--liquid-silver: #c0c0c0  /* Paint effect */

/* Background Colors */
--dark-primary: #0a0a0a   /* Main background */
--dark-secondary: #1a1a1a /* Card backgrounds */
--border-subtle: #333333  /* Subtle borders */

/* Text Colors */
--text-primary: #ffffff   /* Main text */
--text-secondary: #cccccc /* Secondary text */
--text-muted: #999999     /* Muted text */
```

## 📧 Contact Form Setup

The contact form is ready for backend integration:

### Netlify Forms (Recommended)
```html
<!-- Add to contact form -->
<form name="contact" method="POST" data-netlify="true">
```

### Formspree Integration
```html
<!-- Replace with your Formspree endpoint -->
<form action="https://formspree.io/f/your-form-id" method="POST">
```

### Custom Backend
Update the JavaScript in `script.js` to handle real submissions.

## 🚀 Deployment Options

### GitHub Pages
1. Push repository to GitHub
2. Go to **Settings** → **Pages**
3. Select source branch (`main`)
4. Site available at: `https://yourusername.github.io/annie-leblanc-portfolio`

### Netlify
1. Connect GitHub repo to Netlify
2. Build settings:
   - **Build command:** (none)
   - **Publish directory:** `/`
3. Auto-deploy on push

### Vercel
1. Import GitHub repository
2. Deploy with default settings
3. Custom domain available

## 🔧 Customization

### Adding New Artworks
1. Add image file to `/images/` folder
2. Update corresponding HTML file
3. Follow existing naming conventions

### Modifying Colors
Update CSS variables in `style.css`:
```css
:root {
  --neon-pink: #your-color;
  --electric-green: #your-color;
}
```

### Changing Animations
Modify keyframes in `style.css` or adjust timing:
```css
.your-element {
  animation: yourAnimation 3s ease-in-out infinite;
}
```

## 📄 License

MIT License - Feel free to use and modify for your own projects.

## 🌟 Credits

**Design Concept:** Annie LeBlanc's artistic vision  
**Development:** Collaborative human-AI creation  
**Typography:** System fonts for maximum compatibility  
**Effects:** Custom CSS animations and transitions

---

*"Cut the unicorn and drink its silver blood - that's the kind of bold creative energy that makes art legendary."* - Annie LeBlanc
