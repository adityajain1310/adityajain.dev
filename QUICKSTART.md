# 🚀 Quick Start Guide

## Get Your Portfolio Running in 5 Minutes!

### Step 1: Extract Files
```bash
unzip portfolio-aditya-jain.zip
cd portfolio-aditya-jain
```

### Step 2: Install & Run Frontend
```bash
cd frontend
yarn install
yarn start
```

✅ Your portfolio will open at: **http://localhost:3000**

That's it! You're done! 🎉

---

## 📝 Customize Your Content

### 1. Update Your Information
Open: `frontend/src/data/mock.js`

Change:
- Your name, title, headline
- Projects and descriptions  
- Services you offer
- Contact information (email, phone, LinkedIn)
- Client testimonials

### 2. Update Environment (if deploying)
Create: `frontend/.env`
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### 3. Test Your Changes
The website will auto-reload when you save files!

---

## 🌐 Deploy to Internet (FREE)

### Option A: Vercel (Recommended - 2 minutes)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

Follow prompts → Get live URL! 🎊

### Option B: Netlify
1. Go to https://app.netlify.com
2. Drag & drop your `frontend/build` folder
3. Done!

---

## 🎨 Common Customizations

### Change Colors
Edit `frontend/src/pages/Home.jsx`
- Find: `from-cyan-600 to-blue-600`
- Replace with your colors

### Change Avatar
Edit `frontend/src/data/mock.js`
- Update `avatar` URL
- Or use your own image

### Add More Projects
Edit `frontend/src/data/mock.js`
- Copy an existing project object
- Paste and modify details

---

## 🆘 Troubleshooting

**Problem: "yarn: command not found"**
```bash
npm install -g yarn
```

**Problem: Port 3000 already in use**
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9
# Or change port
PORT=3001 yarn start
```

**Problem: Blank white screen**
- Check browser console (F12)
- Clear browser cache
- Try incognito mode

---

## 📞 Need Help?

Email: me.jainaditya@gmail.com
WhatsApp: +91 9654727983

**Good luck with your freelancing journey! 🚀**
