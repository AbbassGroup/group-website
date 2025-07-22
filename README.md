# ABBASS Group Website

A full-stack web application for ABBASS Group, featuring a React frontend and a Node.js/Express backend with MongoDB. The site supports contact forms, job applications (with CV upload), and free ebook downloads.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Ebooks Management](#ebooks-management)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

---

## Project Overview
- **Frontend:** React (Create React App)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Features:**
  - Contact form
  - Join Us (job application with CV upload)
  - Ebook download (with email notification and download tracking)

---

## Tech Stack
- **Frontend:**
  - React 19, React Router DOM
  - CSS Modules
- **Backend:**
  - Node.js 16+
  - Express.js
  - Mongoose (MongoDB ODM)
  - Nodemailer (email)
  - Multer (file uploads)
  - Express Validator, Helmet, CORS, Rate Limiting
- **Testing:**
  - Jest, Supertest (backend)
  - React Testing Library (frontend)

---

## Directory Structure
```
group-website/
  backend/           # Express API, MongoDB models, routes
    config/          # Database and email config
    middleware/      # Error handling, upload, validation
    models/          # Mongoose schemas
    public/ebooks/   # Ebook PDF files (served to frontend)
    routes/          # API route handlers
    server.js        # Main Express server
  frontend/          # React app
    public/          # Static assets
    src/
      assets/        # Images, ebook PDFs
      components/    # React components
      pages/         # Page-level components
      App.js         # Main app entry
  README.md
  SETUP_GUIDE.md
```

---

## Setup & Installation

### Prerequisites
- Node.js v16 or higher
- npm v6 or higher
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <repo-url>
cd group-website
```

### 2. Backend Setup
```bash
cd backend
npm install
cp env.example .env   # Create your .env file (see below)
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
cp .env.example .env  # Create your .env file (see below)
```

---

## Environment Variables

### Backend (`backend/.env`)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/abbass_group
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=info@abbass.group
CORS_ORIGIN=http://localhost:3000
```

### Frontend (`frontend/.env`)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

---

## Running the App

### Start Backend
```bash
cd backend
npm run dev   # For development (nodemon)
# or
npm start     # For production
```

### Start Frontend
```bash
cd frontend
npm start
```
- Frontend: http://localhost:3000
- Backend:  http://localhost:5000

---

## API Endpoints (Backend)

- **Contact:**
  - `POST   /api/contact`      — Submit contact form
  - `GET    /api/contact`      — List all submissions (admin)
  - `GET    /api/contact/:id`  — Get single submission
  - `PATCH  /api/contact/:id`  — Update status

- **Join Us:**
  - `POST   /api/join-us`      — Submit job application (with CV)
  - `GET    /api/join-us`      — List all applications (admin)
  - `GET    /api/join-us/:id`  — Get single application
  - `PATCH  /api/join-us/:id`  — Update status
  - `GET    /api/join-us/:id/cv` — Download CV

- **Ebook:**
  - `POST   /api/ebook`        — Request ebook download (returns download URL)
  - `GET    /api/ebook/download/:title` — Download ebook PDF
  - `GET    /api/ebook`        — List all downloads (admin)
  - `GET    /api/ebook/stats`  — Download stats
  - `POST   /api/ebook/unsubscribe` — Unsubscribe from marketing

---

## Ebooks Management
- **To add a new ebook:**
  1. Place the PDF in `backend/public/ebooks/` and `frontend/src/assets/Ebooks-PDFs/`.
  2. Add the cover image to `frontend/src/assets/images/books-image/`.
  3. Update the `ebooks` array in `frontend/src/components/EbookSection.js` with the new ebook's details.
  4. Update the ebook mapping in `backend/routes/ebook.js` if the title/filename is new.
- **To remove an ebook:**
  1. Remove the PDF and image files from both backend and frontend.
  2. Remove the entry from `EbookSection.js` and the backend mapping.

---

## Troubleshooting
- **MongoDB connection errors:**
  - Ensure MongoDB is running and URI is correct in `.env`.
- **Email not sending:**
  - Check SMTP credentials and settings in `.env`.
- **File upload fails:**
  - Check file size/type and directory permissions.
- **CORS issues:**
  - Update `CORS_ORIGIN` in backend `.env` to match your frontend URL.
- **Frontend API errors:**
  - Ensure `REACT_APP_API_URL` in frontend `.env` matches backend URL.

---

## Support
- For technical support, contact: info@abbass.group
- See `SETUP_GUIDE.md` for advanced backend setup, deployment, and API usage.

---

**For new developers:**
- Always keep `.env` files out of version control.
- When adding/removing ebooks, update both backend and frontend references.
- Test all forms (Contact, Join Us) after changes.
- Never commit credentials or sensitive data.
