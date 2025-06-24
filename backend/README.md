# ABBASS Group Backend API

A comprehensive Node.js/Express backend API for handling form submissions, file uploads, and database operations for the ABBASS Group website.

## Features

- Form Submissions: Handle contact forms, job applications, and ebook downloads
- File Uploads: Secure CV file upload with validation
- Email Notifications: Automatic email notifications for form submissions
- Database Integration: MongoDB with Mongoose ODM
- Security: Rate limiting, CORS, helmet, input validation
- Error Handling: Comprehensive error handling and logging
- API Documentation: RESTful API with consistent responses

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

## Installation

1. Navigate to backend directory
2. Install dependencies: `npm install`
3. Copy env.example to .env and configure
4. Start development server: `npm run dev`

## API Endpoints

### Contact Form
- POST /api/contact - Submit contact form
- GET /api/contact - Get all submissions (admin)
- GET /api/contact/:id - Get single submission
- PATCH /api/contact/:id - Update status

### Job Applications
- POST /api/join-us - Submit application with CV
- GET /api/join-us - Get all applications (admin)
- GET /api/join-us/:id - Get single application
- PATCH /api/join-us/:id - Update status
- GET /api/join-us/:id/cv - Download CV

### Ebook Downloads
- POST /api/ebook - Submit download request
- GET /api/ebook - Get all downloads (admin)
- GET /api/ebook/stats - Get statistics
- POST /api/ebook/unsubscribe - Unsubscribe

## Security Features

- Rate limiting
- CORS configuration
- Input validation
- File upload security
- Error handling

## Deployment

Set production environment variables and run `npm start` 