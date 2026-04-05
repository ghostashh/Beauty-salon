# QUICK START GUIDE - Jash Beauty Website

## 🚀 Get Your Site Online in 15 Minutes!

This guide will help you launch your website with minimal effort.

---

## STEP 1: VIEW YOUR WEBSITE (2 minutes)

1. Open the **index.html** file in your web browser
2. You should see the fully functional website
3. Test on mobile: Press **F12** → Click device icon to view mobile version
4. Scroll through all sections
5. Test the "Book Appointment" button
6. Try the "View Services" button

✅ **Your website is working!**

---

## STEP 2: CUSTOMIZE WITH YOUR INFO (5 minutes)

### Update Business Information

Open **index.html** with a text editor and find & replace:

| Find | Replace With |
|------|---------------|
| `+91 98765 43210` | Your phone number |
| `123 Beauty Lane...` | Your salon address |
| `info@jashbeauty.com` | Your email |
| `10:00 AM - 8:00 PM` | Your hours |
| `Jash Beauty` | Your salon name |
| `https://calendly.com/beautysalon/30min` | Your Calendly link |

### Social Media Links

Find footer section and update:
```html
<a href="https://instagram.com/YOUR_USERNAME" target="_blank">
```

---

## STEP 3: CALENDLY SETUP (3 minutes)

1. Go to https://calendly.com (create free account if needed)
2. Set up a 30-minute appointment slot
3. Copy your unique Calendly URL
4. In **index.html**, find line 276 and update:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME/30min">
   ```
5. Replace `YOUR_USERNAME` with your Calendly username
6. Save file and refresh in browser to test

---

## STEP 4: UPDATE IMAGES (5 minutes)

### Replace Hero Image (Line 179)
```html
<img src="https://images.unsplash.com/photo-1562322140-8baeae34c886?w=800..." 
     alt="Luxury salon interior" loading="lazy">
```

Change to your salon photo:
```html
<img src="your-salon-hero.jpg" alt="Your Salon" loading="lazy">
```

### Replace Team Photos (Lines 309-316)
Update image URLs in About section with real team photos

### Optional: Add Local Images
1. Create an `/images/` folder in your project
2. Add your photos there
3. Reference as: `./images/your-photo.jpg`

---

## STEP 5: DEPLOY (CHOOSE ONE)

### Option A: Netlify (Easiest - 30 seconds)
1. Go to https://drop.netlify.com
2. **Drag & drop** your entire folder
3. Done! Your site is live with a free link
4. Upgrade domain later

### Option B: GitHub Pages (Free)
1. Create GitHub account (if you don't have one)
2. Create new repo: `username.github.io`
3. Push your files
4. Your site goes live at `username.github.io`

### Option C: Traditional Hosting
1. Upload files via FTP using FileZilla
2. Set up domain forwarding
3. Done!

---

## ✅ LAUNCH CHECKLIST

Before telling people about your website:

- [ ] Update phone number
- [ ] Update address
- [ ] Update business hours
- [ ] Replace hero image
- [ ] Update Calendly link
- [ ] Add social media links
- [ ] Replace team photos
- [ ] Add Google Map
- [ ] Test on mobile
- [ ] Test booking system
- [ ] Test all links
- [ ] Deploy/go live
- [ ] Share URL with friends

---

## 🎯 FOR BEST RESULTS

### Immediate (Do Now)
✅ Customize your info
✅ Update images
✅ Deploy

### This Week
📧 Set up email forwarding
📸 Replace placeholder images with real salon photos
⭐ Add real customer testimonials
💳 Ensure Calendly is working

### This Month
📱 Promote on social media
📊 Install Google Analytics
💬 Monitor visitor traffic
📧 Set up email notifications for bookings

### Ongoing
📅 Update offers monthly
📸 Add new testimonials
📝 Post customer work photos
📊 Track what's working

---

## 🆘 QUICK TROUBLESHOOTING

### Website won't open
- Make sure `index.html` exists
- Open with modern browser (Chrome, Safari, Firefox, Edge)
- Check file path: `Desktop/Jash Beauty/index.html`

### Images not showing
- Check image file paths
- Make sure image files exist
- Use forward slashes: `/images/photo.jpg`
- Clear browser cache (Ctrl+Shift+Delete)

### Booking button not working
- Make sure you updated the Calendly URL
- Test the link directly in browser
- Verify your Calendly account is active

### Site doesn't look good on mobile
- Press F12 in browser
- Click mobile device icon
- Refresh page
- If still broken, check CSS file is loading

### Links not working
- Check all href values
- Make sure # anchor links match section ids
- Test external links

---

## 📱 MOBILE TESTING CHECKLIST

1. **Hero Section**
   - Image displays well
   - Text is readable
   - Buttons are big enough to tap

2. **Navigation**
   - Hamburger menu works
   - Menu closes after clicking link
   - Sticky nav works

3. **Services**
   - Cards stack vertically
   - Filter buttons work
   - Text is readable

4. **Booking Button**
   - Floating button visible on mobile
   - Modal opens and closes
   - Calendly widget shows

5. **Contact Section**
   - Map displays
   - Buttons are easy to tap
   - Information clear

---

## 🎨 NEXT: CUSTOMIZE COLORS (15 minutes)

To change the color scheme, edit `css/styles.css` lines 8-15:

```css
:root {
    --primary-light: #FDF8F4;  /* Main background */
    --beige: #E8DCC8;          /* Accent light */
    --blush: #F5D7D1;          /* Accent pink */
    --gold: #D4AF87;           /* Primary accent */
    --dark-text: #2C2C2C;      /* Text color */
    --light-gray: #F9F7F4;     /* Light cards */
    --white: #FFFFFF;          /* Pure white */
}
```

Save and refresh to see changes instantly!

---

## 📞 IMPORTANT: UPDATE THESE BEFORE LAUNCH

1. **Phone Number**: Multiple places in HTML
2. **Business Address**: In contact section
3. **Calendly URL**: Booking widget
4. **Salon Name**: In logo, footer, hero
5. **Google Map**: Contact section
6. **Social Media**: Footer section
7. **Team Info**: About section
8. **Services List**: In JavaScript (js/script.js)
9. **Hours**: Contact section
10. **Email Address**: Contact page

---

## 🎁 BONUS: FREE FEATURES YOU HAVE

Your website already includes:
- ✅ Mobile responsive design
- ✅ Smooth animations
- ✅ Booking integration
- ✅ Contact forms
- ✅ Social media links
- ✅ SEO optimization
- ✅ Fast loading
- ✅ Beautiful design
- ✅ No coding required to use
- ✅ Free hosting option

---

## 📚 LEARN MORE

For detailed information, check:
- **README.md** - Full feature overview
- **DEPLOYMENT_GUIDE.md** - Detailed deployment steps
- **ADVANCED_CUSTOMIZATION.md** - Advanced features
- **CONFIG.conf** - Configuration reference

---

## 🚀 YOU'RE READY!

Your premium salon website is ready to impress clients.
Just personalize it with your info and launch!

### Need help?
- Google your question + "CSS" or "HTML"
- Check Stack Overflow
- Contact your web hosting support
- Hire a developer for advanced features

---

**Congratulations on launching your new website!** 🎉💄✨

Questions? The answers are in the other guide files.
Good luck! 🌟
