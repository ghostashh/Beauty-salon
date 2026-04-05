# DEPLOYMENT GUIDE - Jash Beauty Website

## Pre-Deployment Checklist

Before deploying your website, ensure all items are completed:

- [ ] Update business information (phone, email, address)
- [ ] Replace all placeholder images with real salon photos
- [ ] Update Calendly URL with your booking link
- [ ] Add real Google Map coordinates
- [ ] Update social media links to your profiles
- [ ] Replace testimonials with real customer reviews
- [ ] Update team member information and photos
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Speed test using Google PageSpeed Insights
- [ ] Set up SSL/HTTPS certificate
- [ ] Configure custom domain name
- [ ] Set up email forwarding
- [ ] Create a contact email system (optional)
- [ ] Add analytics tracking code
- [ ] Test all links and buttons
- [ ] Verify all images load correctly
- [ ] Test booking system
- [ ] Check WhatsApp integration

---

## 1. DEPLOYMENT ON NETLIFY (Recommended - Free & Easy)

### Quick Start (Connected to GitHub)

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com/signup
   - Complete signup

2. **Create Repository**
   - New repository → `jash-beauty`
   - Initialize with README (optional)
   - Clone to your computer

3. **Add Files to Repository**
   - Copy all website files into the cloned folder
   - Run these in terminal:
   ```bash
   cd jash-beauty
   git add .
   git commit -m "Initial commit: Jash Beauty website"
   git push origin main
   ```

4. **Deploy on Netlify**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "New site from Git"
   - Select repository
   - Leave build settings as default
   - Click "Deploy site"
   - Get your free `.netlify.app` domain
   - Set up custom domain (Pro feature or free alternative)

### Deploy via Drag & Drop

1. Go to https://netlify.com
2. Drag and drop your full project folder
3. Site is deployed instantly!
4. Get a temporary `.netlify.app` URL
5. Upgrade to custom domain later

---

## 2. DEPLOYMENT ON VERCEL

1. **Sign up** at https://vercel.com
2. **Import Project**
   - Select GitHub repository or upload folder
3. **Configure**
   - Framework: Static
   - Leave other settings as default
4. **Deploy**
5. **Custom Domain**
   - Add your domain in project settings
   - Update DNS records at your domain registrar

---

## 3. DEPLOYMENT ON GITHUB PAGES (Free)

1. **Create Repository**
   - Repo name: `yourusername.github.io`
   - Make it public

2. **Push Code**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io
   cd yourusername.github.io
   # Copy all website files here
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

3. **Access**
   - Your site: `https://yourusername.github.io`
   - Or with custom domain (update DNS settings)

---

## 4. TRADITIONAL WEB HOSTING DEPLOYMENT

### Using cPanel (Most Common)

1. **Access cPanel**
   - URL: `yoursite.com:2083` or `yourhostingprovider.com/cpanel`
   - Enter your username and password

2. **Upload Files**
   - Go to "File Manager"
   - Navigate to `public_html` folder
   - Upload all website files
   - Create `css/` and `js/` folders
   - Upload CSS and JavaScript files

3. **Directory Structure**
   ```
   public_html/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   └── script.js
   └── images/ (optional)
   ```

4. **Test**
   - Visit your domain
   - Check if everything loads

### Using FTP (FileZilla)

1. **Get FTP Credentials** from hosting provider
2. **Download FileZilla** (https://filezilla-project.org/)
3. **Connect**
   - Host: Your FTP address
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)
4. **Navigate to `public_html`**
5. **Drag and drop** your files
6. **Wait for upload** to complete

### Using SSH (Advanced)

```bash
# Connect to server
ssh username@yoursite.com

# Navigate to public folder
cd public_html

# Upload files using SCP
scp -r ~/Desktop/jash-beauty/* username@yoursite.com:~/public_html/

# Verify
ls -la
```

---

## 5. CUSTOM DOMAIN SETUP

### Buy Domain
- **Registrars**: GoDaddy, Namecheap, Bluehost, Domain.com
- Search for domain, add to cart, complete purchase
- Cost: $10-15/year typically

### Point Domain to Hosting

**For Netlify/Vercel:**
1. Go to project settings
2. Add custom domain
3. Get the DNS records they provide
4. Go to domain registrar
5. Update nameservers or add DNS records
6. Wait 24-48 hours for propagation

**For Traditional Hosting:**
1. Log into domain registrar
2. Find DNS Management
3. Update nameservers to: (provided by hosting)
   - `ns1.yourhost.com`
   - `ns2.yourhost.com`
4. Or add A record pointing to hosting IP
5. Wait for propagation

### Email Setup (Optional)
- Set up email forwarding at registrar
- Or use your hosting provider's email
- Access via webmail client

---

## 6. SSL CERTIFICATE (HTTPS) - IMPORTANT!

### Free Option (Recommended)
- **Let's Encrypt**: Free SSL
  - Automatic with Netlify, Vercel, GitHub Pages
  - cPanel: One-click SSL via AutoSSL
  - Command line: Use Certbot

### Installation on Traditional Hosting
1. **cPanel**: Go to "AutoSSL" → Enable
2. **Manual**: Upload cert files to server
3. **Let's Encrypt**: Use hosting provider's integration

### Verify HTTPS
- Your site URL should show 🔒 lock icon
- URL should start with `https://` not `http://`

---

## 7. EMAIL CONFIGURATION

### Option 1: Email Forwarding (Free)
- Set up at your domain registrar
- Forwards emails to your personal email

### Option 2: Business Email
- **Hosting Package**: Usually includes 5-10 emails
- **Google Workspace**: $6/user/month (professional)
- **Zoho Mail**: $1-6/month (affordable)

### Setup Contact Form (Optional)
- Use Netlify Forms (free with Netlify)
- Add to HTML:
```html
<form name="contact" method="POST" netlify>
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Send</button>
</form>
```

---

## 8. ANALYTICS & MONITORING

### Add Google Analytics
1. Go to https://analytics.google.com
2. Create account
3. Get your tracking ID
4. Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Performance
- Netlify Analytics: Built-in
- Google Search Console: Submit sitemap
- Google PageSpeed Insights: Check speed
- Uptime Monitoring: UptimeRobot (free)

---

## 9. PERFORMANCE OPTIMIZATION

### Image Optimization
```bash
# Using ImageOptim (macOS) or FileZilla compression
# Keep images under 500KB each
# Use WebP format for modern browsers
```

### Minification (Optional)
- Use: https://www.minifycode.com/
- Minify CSS and JavaScript before production

### Caching
- Browser caching: Server headers
- CDN caching: CloudFlare (free)
- Cache control: Added by deployment platform

---

## 10. MAINTENANCE & UPDATES

### Regular Tasks
- Monthly: Update images, offers, testimonials
- Quarterly: Review analytics
- Annually: Renew SSL, domain, hosting
- As needed: Fix bugs, add features

### Backup Strategy
- **Hosting backup**: Usually automatic
- **Manual backup**: Download files monthly
- **GitHub**: Version control is your backup

### Security
- Keep contact info updated
- Don't share FTP credentials
- Use strong passwords
- Enable two-factor authentication
- Keep software updated

---

## 11. TROUBLESHOOTING COMMON ISSUES

### Issue: Images Not Showing
- **Solution**: Check image paths in HTML
- Ensure images are uploaded
- Use relative paths: `./images/photo.jpg`

### Issue: Styles Not Loading
- **Solution**: Check CSS path
- Verify `css/styles.css` exists
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Booking Link Not Working
- **Solution**: Update Calendly URL in HTML
- Test link before deployment

### Issue: Site Slow Loading
- **Solution**: Optimize images
- Enable gzip compression on server
- Use CDN (CloudFlare free version)

### Issue: Mobile Not Responsive
- **Solution**: Check viewport meta tag in HTML
- Test in DevTools (F12 → Device Toggle)
- Verify CSS media queries

---

## 12. MONITORING AFTER LAUNCH

### First Week
- ✅ Test all links work
- ✅ Verify booking system
- ✅ Check mobile compatibility
- ✅ Monitor loading speed
- ✅ Check analytics

### First Month
- ✅ Monitor visitor traffic
- ✅ Track booking conversions
- ✅ Check for broken links
- ✅ Gather feedback

### Ongoing
- Update offers monthly
- Add new testimonials
- Post to social media
- Monitor analytics
- Update content regularly

---

## QUICK DEPLOYMENT SUMMARY

| Platform | Difficulty | Cost | Time |
|----------|-----------|------|------|
| **Netlify** | Easy | Free | 5 min |
| **Vercel** | Easy | Free | 5 min |
| **GitHub Pages** | Easy | Free | 10 min |
| **Traditional Hosting** | Medium | $5-10/mo | 20 min |
| **Custom Domain** | Easy | $10-15/yr | Setup time |
| **SSL/HTTPS** | Easy | Free | Auto |

---

## RECOMMENDED SETUP FOR SMALL BUDGET

1. **Netlify or Vercel** (free hosting)
2. **Namecheap** ($9/year domain)
3. **Free email forwarding** (at registrar)
4. **Google Analytics** (free)
5. **CloudFlare**: Optional CDN (free)

**Total: ~$9/year** ✨

---

## RECOMMENDED SETUP FOR PROFESSIONAL

1. **Bluehost** or **SiteGround** ($5-10/month)
   - Includes hosting + email
2. **Custom domain** via registrar ($10-15/year)
3. **SSL certificate** (automatic)
4. **Google Workspace** for email ($6/month)
5. **Google Analytics** (free)
6. **Monthly maintenance** (30 min)

**Total: ~$85-150/year** 💼

---

## SUPPORT & RESOURCES

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **MDN Web Docs**: https://developer.mozilla.org
- **CSS Tricks**: https://css-tricks.com
- **Stack Overflow**: https://stackoverflow.com

---

**Need Help?** Contact your hosting provider or hire a web developer!

Happy deployment! 🚀💄✨
