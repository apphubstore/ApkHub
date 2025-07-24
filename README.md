# WebAppStore (Firebase Version)

A professional web app/game store inspired by Playstore, built with React + Material UI, powered by [Firebase](https://firebase.google.com/) for free authentication, Firestore database, and storage.

## Features
- Playstore-like UI (MUI, gradients, card grid, search, categories)
- User Google login (via Firebase)
- Developer sign up/login and upload panel
- Admin review/delete panel
- App/game listing & downloads
- PWA installable from Chrome
- 100% free to deploy (frontend on Vercel/Netlify or GitHub Pages, backend on Firebase)

---

## 1. Quick Start

### 1.1. **Clone & Install**

```sh
git clone https://github.com/YOUR_USERNAME/WebAppStore.git
cd WebAppStore
npm install
```

### 1.2. **Create a Firebase Project**
- Go to [firebase.google.com](https://console.firebase.google.com/), create a new project.
- Add a Web App to your project.
- In Project Settings, under "Your apps", get your **Firebase config** and copy it into `src/firebase.js`.
- Enable **Authentication → Google** sign-in.
- Enable **Firestore Database** (start in test mode).
- Enable **Storage** (start in test mode).

### 1.3. **Configure Environment Variables**
- Copy `.env.example` to `.env` and fill with your Firebase config if you want to use env vars (optional).

---

## 2. **Run Locally**

```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## 3. **Deploy to Production**

- Push your repo to GitHub (see instructions below).
- Connect to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/), import your repo, and deploy.
- Or deploy on GitHub Pages (with Vite instructions if needed).

---

## 4. **Admin Login**

- To make yourself admin, add an "admin" field to your user document in Firestore, or adjust the code to check for your email/user ID.

---

## 5. **Customize**

- Update branding in `src/constants.js`.
- Add new categories in `src/constants.js`.
- Add your logo to `/public/icons`.

---

## 6. **Questions?**

Open an issue or PR!
