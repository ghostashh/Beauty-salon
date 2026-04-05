# Jash Beauty - Premium Salon Website

A modern, mobile-first website for a luxury beauty salon featuring smooth animations, responsive design, and integrated booking system.

## 🎨 Design Features

- **Elegant Color Palette**: Beige, blush pink, white, and gold accents
- **Premium Typography**: Cormorant Garamond serif + Poppins sans-serif
- **Smooth Animations**: Scroll effects, hover interactions, and transitions
- **Mobile-First Responsive**: Optimized for all device sizes
- **Luxurious Ambiance**: Dark mode footer, floating buttons, glass morphism effects

## 📱 Pages & Sections

### 1. **Homepage**
- Hero section with large background image
- Value proposition headline and subheadline
- Dual CTA buttons (Book & View Services)
- Highlights section showcasing key benefits

### 2. **Services**
- Filter by category: All, Hair, Skin, Nails, Bridal
- Service cards with price, duration, and description
- Quick "Book Now" buttons
- Smooth category filtering with tabs

### 3. **Special Offers**
- Limited-time packages and discounts
- Featured offer highlighting
- Clear pricing and service inclusions
- Call-to-action buttons

### 4. **Gallery**
- 9+ high-quality salon images
- Hover overlay effects
- Before/after transformation images
- Responsive grid layout

### 5. **Testimonials**
- 5 customer reviews with star ratings
- Carousel navigation
- Verified client badges
- Smooth transitions

### 6. **About Us**
- Salon story and values
- Statistics showcasing experience
- Team member cards with photos
- Professional bios

### 7. **Contact**
- Location with embedded Google Map
- Phone, WhatsApp, and business hours
- Multiple contact method options
- Responsive contact cards

### 8. **Booking Integration**
- Calendly embedded booking widget
- Modal popup for seamless booking
- Responsive design for all devices
- Floating "Book Now" button

### 9. **Navigation**
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scrolling between sections
- Active link highlighting

### 10. **Footer**
- Social media links (Instagram priority)
- Quick navigation links
- Copyright and legal links
- Dark premium design

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for external CDN resources)

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/jash-beauty.git
   cd jash-beauty
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - No build process required
   - No dependencies to install

3. **Serve Locally (Optional)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 🔧 Configuration

### Calendly Integration
Update the Calendly URL in `index.html` (line 276):
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME/30min"></div>
```

### Contact Information
Update contact details in `index.html`:
- Address: Line 268-269
- Phone Number: Line 263
- WhatsApp Number: Lines 275 and in `js/script.js`
- Business Hours: Line 271

### Google Map
Update the embedded map in `index.html` (line 283):
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_MAP_CODE"></iframe>
```

### Social Media Links
Update footer social links in `index.html` (lines 336-341):
```html
<a href="https://instagram.com/yourprofile" target="_blank">
```

## 📊 Customization

### Colors
Edit the CSS variables in `css/styles.css` (lines 8-15):
```css
:root {
    --primary-light: #FDF8F4;  /* Main light color */
    --beige: #E8DCC8;          /* Beige */
    --blush: #F5D7D1;          /* Blush pink */
    --gold: #D4AF87;           /* Gold accent */
    /* ... more colors ... */
}
```

### Services
Update service data in `js/script.js` (lines 4-47):
```javascript
const servicesData = [
    {
        category: 'hair',
        name: 'Your Service',
        price: '₹999',
        duration: '1 hour',
        description: 'Service description'
    },
    // ... more services ...
];
```

### Gallery Images
Update gallery images in `js/script.js` (lines 50-59):
```javascript
const galleryData = [
    { 
        url: 'image-url', 
        title: 'Title', 
        category: 'Category' 
    },
    // ... more images ...
];
```

### Testimonials
Update testimonials in `js/script.js` (lines 62-82):
```javascript
const testimonialsData = [
    {
        name: 'Client Name',
        text: 'Review text...',
        rating: 5
    },
    // ... more reviews ...
];
```

## 🎯 Features Implemented

✅ Mobile-first responsive design
✅ Smooth scrolling and animations
✅ Sticky navigation bar
✅ Floating "Book Now" button
✅ Calendly booking integration
✅ Service filtering by category
✅ High-quality gallery grid
✅ Testimonials carousel
✅ Team member profiles
✅ Contact information section
✅ Google Map integration
✅ WhatsApp integration
✅ Social media links
✅ Hover effects and interactions
✅ SEO-friendly structure
✅ Fast loading optimization
✅ Accessibility features

## 📈 SEO Optimization

- Meta tags for title and description
- Open Graph tags for social sharing
- Semantic HTML5 structure
- Image lazy loading
- Mobile responsiveness
- Fast load times

## 🌐 Deployment

### Deploy on Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `.` (root)
4. Deploy!

### Deploy on Vercel
1. Import your GitHub repository
2. Framework: Static
3. Deploy

### Deploy on GitHub Pages
1. Push to GitHub
2. Enable Pages in repository settings
3. Select main branch as source

### Deploy on Traditional Hosting
1. Upload all files (index.html, css/, js/, images/) to your hosting
2. Configure domain settings
3. Set up SSL certificate

## 📁 File Structure

```
jash-beauty/
├── index.html              (Main HTML file)
├── css/
│   └── styles.css         (All styling & animations)
├── js/
│   └── script.js          (Functionality & interactivity)
├── images/                 (Your own images folder)
└── README.md              (This file)
```

## 🔐 IMPORTANT: Replace Before Going Live

1. **Calendly URL**: Update with your actual Calendly link
2. **Contact Details**: Change phone, address, hours
3. **WhatsApp Number**: Update with actual number
4. **Google Map**: Embed your salon location
5. **Images**: Replace all placeholder images with real salon photos
6. **Social Links**: Link to actual social media profiles
7. **Testimonials**: Add real customer reviews
8. **Team Photos**: Use actual team member images
9. **Business Information**: Update About section with real details

## 🚀 Performance Tips

1. Compress and optimize images (use imagemin, TinyPNG)
2. Replace placeholder images before deployment
3. Minify CSS and JavaScript for production
4. Use a CDN for faster delivery
5. Enable gzip compression on your server
6. Monitor Core Web Vitals

## 📞 Contact Customization

Update the following in `index.html`:

```html
<!-- Phone -->
<a href="tel:+919876543210" class="btn btn-small">Call Us</a>

<!-- WhatsApp -->
<a href="https://wa.me/919876543210" target="_blank" class="btn btn-small">Chat Now</a>

<!-- Email (add if needed) -->
<a href="mailto:info@jashbeauty.com" class="btn btn-small">Email Us</a>

<!-- Address/Map -->
123 Beauty Lane, Fashion District, Mumbai, Maharashtra 400001
```

## 🎨 Instagram Feed Integration (Optional)

To add an Instagram feed, consider using:
- Elfsight Instagram Feed Widget
- Pixlee
- Instawall
- Custom API integration

Add to `index.html` before the contact section for best results.

## 📝 Blog Section (Optional)

To add a blog for beauty tips:
1. Create a new `blog.html` page
2. Use same header/footer
3. Create blog post template
4. Add navigation link to navbar
5. Link to blog categories

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari 12+
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

- All images are responsive
- Touch-friendly buttons (min 44x44px)
- Mobile menu with hamburger
- Vertical stacking on small screens
- Optimized font sizes for mobile

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Image alt text
- Focus visible styles

## 🐛 Browser DevTools Testing

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on various screen sizes
4. Check performance in Lighthouse
5. Verify all links and buttons work

## 📊 Analytics Setup (Optional)

Add Google Analytics in `index.html` head:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🎯 Conversion Optimization

- Clear CTAs on every section
- Sticky floating book button
- Multiple contact methods
- Easy navigation
- Trust signals (testimonials, team)
- Fast loading times
- Mobile-optimized forms

## 📄 License

This website template is provided as-is. Feel free to customize and use for your beauty salon.

## 💡 Tips for Success

1. **Update regularly**: Keep images and testimonials fresh
2. **Maintain consistency**: Align website with salon ambiance
3. **Mobile first**: Always test on mobile devices
4. **Fast loading**: Optimize all images
5. **Active updates**: Regular blog posts and offers
6. **Social media**: Link all social accounts
7. **Email subscriptions**: Add newsletter signup (optional)
8. **Analytics**: Track visitor behavior
9. **SEO**: Optimize keywords for local search
10. **Security**: Use HTTPS/SSL certificate

## 🤝 Support

For questions or issues, check the code comments or contact your web developer.

---

**Created with ❤️ for Jash Beauty**

Happy booking! 💄✨
