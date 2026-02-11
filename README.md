# Aditya Jain - Portfolio Website

A modern, client-attracting portfolio website built with React and FastAPI.

## 🎨 Features

- ✨ Beautiful gradient design with Cyan/Teal/Blue theme
- 🌗 Light & Dark mode support
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Client-focused content
- 💼 Featured projects showcase
- 💬 Client testimonials
- 📊 Animated statistics counters
- 🎭 Glassmorphism effects
- 🚀 Optimized performance

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **React Router** - Navigation

### Backend (Ready but not yet connected)
- **FastAPI** - Python web framework
- **MongoDB** - Database
- **Motor** - Async MongoDB driver

## 📦 Installation

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.8+
- MongoDB (if using backend)

### Frontend Setup

```bash
cd frontend

# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

The app will run on `http://localhost:3000`

### Backend Setup (Optional)

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
# Create .env file with:
# MONGO_URL=mongodb://localhost:27017
# DB_NAME=portfolio

# Start server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

The API will run on `http://localhost:8001`

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn components
│   │   │   └── ThemeToggle.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx # Light/Dark mode
│   │   ├── data/
│   │   │   └── mock.js          # Portfolio data
│   │   ├── pages/
│   │   │   └── Home.jsx         # Main page
│   │   ├── App.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
│
└── backend/
    ├── server.py                # FastAPI server
    └── requirements.txt
```

## ✏️ Customization

### Update Your Information

Edit `/frontend/src/data/mock.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    headline: "Your Headline",
    // ... update all fields
  },
  // Update projects, services, testimonials, etc.
}
```

### Update Contact Information

In `mock.js`, update the `contact` array:

```javascript
contact: [
  {
    type: "Email",
    value: "your.email@gmail.com",
    link: "mailto:your.email@gmail.com",
    icon: "Mail",
  },
  // ... update other contacts
]
```

### Change Colors

Edit `/frontend/src/index.css` for theme colors, or modify Tailwind classes in components.

### Add/Remove Sections

Edit `/frontend/src/pages/Home.jsx` to add or remove sections.

## 🚀 Deployment

### Deploy Frontend (Recommended Platforms)

#### **Vercel** (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

#### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd frontend
yarn build
netlify deploy --prod --dir=build
```

#### **GitHub Pages**
1. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```
2. Install gh-pages:
   ```bash
   yarn add --dev gh-pages
   ```
3. Add scripts to `package.json`:
   ```json
   "predeploy": "yarn build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy:
   ```bash
   yarn deploy
   ```

### Deploy Backend (Optional)

#### **Heroku**
```bash
# Create Procfile
echo "web: uvicorn server:app --host 0.0.0.0 --port \$PORT" > Procfile

# Deploy
heroku create your-portfolio-api
git push heroku main
```

#### **Railway / Render**
- Connect your GitHub repo
- Set build command: `pip install -r requirements.txt`
- Set start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

## 🔧 Environment Variables

### Frontend `.env`
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend `.env`
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
```

## 📸 Screenshots

### Light Mode
![Hero Section](./screenshots/hero.png)
![Projects](./screenshots/projects.png)

### Dark Mode
![Dark Hero](./screenshots/dark-hero.png)

## 🎯 Future Enhancements

- [ ] Contact form with email notifications
- [ ] Admin dashboard for content management
- [ ] Blog section
- [ ] Analytics dashboard
- [ ] Project case studies with detailed pages
- [ ] Newsletter subscription
- [ ] Client testimonial submission form

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Support

For any questions or issues:
- Email: me.jainaditya@gmail.com
- LinkedIn: [imjainaditya](https://linkedin.com/in/imjainaditya)
- WhatsApp: +91 9654727983

## 🙏 Credits

Built with ❤️ using:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [FastAPI](https://fastapi.tiangolo.com)

---

Made with care by Aditya Jain © 2026
