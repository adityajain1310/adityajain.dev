# 🌐 Deployment Guide

## Deploy Your Portfolio to Production

---

## 🎯 Option 1: Vercel (Recommended - Best for React)

### Why Vercel?
- ✅ FREE forever
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploys from Git
- ✅ Custom domain support

### Steps:

#### Method A: Via CLI (2 minutes)
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Navigate to frontend
cd frontend

# 3. Deploy!
vercel

# Follow the prompts:
# - Login with GitHub/Email
# - Confirm project settings
# - Get your live URL!
```

#### Method B: Via GitHub (5 minutes)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Set root directory: `frontend`
6. Click "Deploy"
7. Done! ✨

### Add Custom Domain
1. Go to Vercel Dashboard → Your Project
2. Settings → Domains
3. Add your domain (e.g., adityajain.dev)
4. Update DNS records as shown
5. Wait 5-10 minutes

**Your site:** `https://your-name.vercel.app`

---

## 🎯 Option 2: Netlify (Great Alternative)

### Why Netlify?
- ✅ FREE forever
- ✅ Easy drag-and-drop
- ✅ Form handling built-in
- ✅ Serverless functions
- ✅ Great for static sites

### Steps:

#### Method A: Drag & Drop (Easiest)
```bash
# 1. Build your project
cd frontend
yarn build

# 2. Go to https://app.netlify.com/drop
# 3. Drag & drop the 'build' folder
# 4. Done!
```

#### Method B: Via GitHub
1. Push to GitHub
2. Go to https://app.netlify.com
3. "New site from Git"
4. Connect GitHub
5. Build settings:
   - Base directory: `frontend`
   - Build command: `yarn build`
   - Publish directory: `frontend/build`
6. Deploy!

**Your site:** `https://your-name.netlify.app`

---

## 🎯 Option 3: GitHub Pages (Completely Free)

### Why GitHub Pages?
- ✅ 100% FREE
- ✅ No credit card
- ✅ Hosted by GitHub
- ✅ Good for static sites

### Steps:

```bash
# 1. Update package.json
# Add this line:
"homepage": "https://yourusername.github.io/portfolio"

# 2. Install gh-pages
cd frontend
yarn add --dev gh-pages

# 3. Add deploy scripts to package.json
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}

# 4. Deploy!
yarn deploy
```

### Enable GitHub Pages
1. Go to your repo → Settings
2. Pages (left sidebar)
3. Source: Deploy from a branch
4. Branch: `gh-pages` → `/root`
5. Save

**Your site:** `https://yourusername.github.io/portfolio`

---

## 🎯 Option 4: Cloudflare Pages (Fast & Free)

### Why Cloudflare?
- ✅ FREE
- ✅ Lightning fast CDN
- ✅ Unlimited bandwidth
- ✅ DDoS protection

### Steps:
1. Push code to GitHub
2. Go to https://pages.cloudflare.com
3. "Create a project"
4. Connect GitHub repo
5. Build settings:
   - Framework: Create React App
   - Build command: `cd frontend && yarn build`
   - Output directory: `frontend/build`
6. Deploy!

**Your site:** `https://portfolio.pages.dev`

---

## 🚀 Quick Comparison

| Platform | Setup Time | Free Tier | Best For |
|----------|-----------|-----------|----------|
| **Vercel** | 2 min | Unlimited | React apps, Best DX |
| **Netlify** | 3 min | 100GB/month | Forms, Serverless |
| **GitHub Pages** | 5 min | 1GB storage | Free, Simple |
| **Cloudflare** | 5 min | Unlimited | Speed, Security |

---

## 🎨 Custom Domain Setup

### 1. Buy Domain (Recommended)
- Namecheap: ~$10/year
- GoDaddy: ~$12/year  
- Google Domains: ~$12/year

### 2. Connect to Vercel/Netlify
```
1. Add domain in platform dashboard
2. Update DNS records:
   
   Type: CNAME
   Name: www
   Value: (provided by platform)
   
   Type: A
   Name: @
   Value: (provided by platform)
```

### 3. Wait 10-30 minutes for DNS propagation

**Result:** `https://yourname.com` ✨

---

## 📧 Environment Variables for Production

### Vercel/Netlify Dashboard
```
Key: REACT_APP_BACKEND_URL
Value: https://your-backend.herokuapp.com
```

Or create `.env.production`:
```env
REACT_APP_BACKEND_URL=https://your-backend.com
```

---

## ✅ Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Test on mobile devices
- [ ] Check all links work (contact, social media)
- [ ] Verify WhatsApp link opens correctly
- [ ] Test light/dark mode toggle
- [ ] Check animations are smooth
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Run Google Lighthouse audit (aim for 90+ score)
- [ ] Add site to Google Search Console
- [ ] Share on LinkedIn, Twitter, portfolio sites

---

## 🎯 Optional: Deploy Backend

### Heroku (Easy)
```bash
cd backend

# Login to Heroku
heroku login

# Create app
heroku create your-portfolio-api

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Deploy
git push heroku main
```

### Railway (Modern)
1. Go to https://railway.app
2. "New Project" → GitHub repo
3. Select `backend` folder
4. Add MongoDB service
5. Deploy!

### Render (Simple)
1. Go to https://render.com
2. "New +" → Web Service
3. Connect repo → Select `backend`
4. Build: `pip install -r requirements.txt`
5. Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`

---

## 🆘 Common Issues

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules
yarn cache clean
yarn install
yarn build
```

### Issue: Environment variables not working
- Make sure they start with `REACT_APP_`
- Rebuild after adding env vars
- Check platform documentation

### Issue: 404 on refresh
Add `_redirects` file in `public/`:
```
/*    /index.html   200
```

---

## 📞 Need Deployment Help?

- Vercel Support: https://vercel.com/support
- Netlify Support: https://answers.netlify.com
- Or email me: me.jainaditya@gmail.com

**Good luck! Your portfolio will be live soon! 🚀**
