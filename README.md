# ☕ Ethiopian Coffee & Tourism

> **From Ethiopian Highlands to Your Cup** 🇪🇹

A full-stack web platform showcasing Ethiopian coffee culture and tourism experiences with secure authentication and immersive design.

---

## 🌟 Features

- **Secure Authentication** — JWT-based login/signup with protected routes
- **Responsive Design** — Seamless experience across all devices (280px–4K)
- **Immersive UI** — Full-width backgrounds, smooth animations, zigzag layout
- **Tourism Content** — Coffee culture, heritage info, and travel highlights
- **Performance Optimized** — Fast load times, optimized images, clean code

---

## 🛠 Tech Stack

| Frontend | Backend | Database |
|----------|---------|----------|
| React 18 + Vite | Node.js + Express | PostgreSQL |
| Bootstrap 5 | Prisma ORM | JWT Auth |
| React Router | bcryptjs | express-validator |

---

## 🚀 Quick Start

```bash
# Clone & Install
git clone https://github.com/YOUR_USERNAME/ethiopian-coffee-tourism.git
cd ethiopian-coffee-tourism
cd server && npm install && cd ../client && npm install

# Setup & Run
cd server && npx prisma migrate dev --name init
cd server && node server.js          # Terminal 1
cd client && npm run dev             # Terminal 2

```
Access: http://localhost:5173
📁 Project Structure
ethiopian-coffee-tourism/
├── client/              # React Frontend
│   ├── src/
│   │   ├── assets/      # Images
│   │   ├── components/  # Navbar
│   │   ├── context/     # Auth Context
│   │   └── pages/       # Landing, Login, Signup
│   └── package.json
│
├── server/              # Node.js Backend
│   ├── controllers/     # Auth Logic
│   ├── middleware/      # JWT & Validation
│   ├── routes/          # API Endpoints
│   ├── prisma/          # Database Schema
│   └── package.json
│
└── README.md

API Endpoints 
Method  Endpoint              Description  
POST    /api/auth/signup      Register user 
POST    /api/auth/signin      Login user   
GET     /api/auth/verify      Verify token  
POST    /api/auth/logout      Logout user

Responsive Breakpoints
Device   Width   Layout
Desktop  1024px+  Full zigzag
Tablet   768–1023px Adjusted
Mobile   376–767px  Stacked
Small    280–375px  Compact
Compact

 Security
Password hashing (bcrypt)
JWT token authentication
Input validation & sanitization
CORS protection
Rate limiting

 Visual Highlights
Hero Section — Full viewport background with overlay
Experience Section — Coffee ceremony imagery + cultural storytelling
Origin Section — Ethiopian highlands + journey narrative
Continuous Background — Seamless roasted coffee theme throughout
📄 License
MIT License © 2025
👨‍💻 Built With
React · Node.js · PostgreSQL · Prisma · Bootstrap
