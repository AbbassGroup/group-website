# ABBASS Group Backend Setup Guide

## 🚀 Quick Start

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   cp env.example .env
   # Edit .env with your settings
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Test the setup:**
   ```bash
   node test.js
   ```

## 📋 Prerequisites

- **Node.js** (v16.20.1 or higher)
- **MongoDB** (local installation or cloud service)
- **Email service** (Gmail, SendGrid, etc.)

## ⚙️ Configuration

### Database Setup

**Option 1: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. Set `MONGODB_URI=mongodb://localhost:27017/abbass_group`

**Option 2: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a cluster
3. Get connection string
4. Set `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/abbass_group`

### Email Configuration

**Gmail Example:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=info@abbass.group
```

**Note:** For Gmail, you need to:
1. Enable 2-factor authentication
2. Generate an "App Password"
3. Use the app password in EMAIL_PASS

### File Upload Settings

```env
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880  # 5MB
ALLOWED_FILE_TYPES=pdf,doc,docx
```

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)
- `GET /api/contact/:id` - Get single submission
- `PATCH /api/contact/:id` - Update status

### Job Applications
- `POST /api/join-us` - Submit application with CV
- `GET /api/join-us` - Get all applications (admin)
- `GET /api/join-us/:id` - Get single application
- `PATCH /api/join-us/:id` - Update status
- `GET /api/join-us/:id/cv` - Download CV

### Ebook Downloads
- `POST /api/ebook` - Submit download request
- `GET /api/ebook` - Get all downloads (admin)
- `GET /api/ebook/stats` - Get statistics
- `POST /api/ebook/unsubscribe` - Unsubscribe

## 🔗 Frontend Integration

### Contact Form
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    contact: '+1234567890',
    division: 'Business Brokers',
    comments: 'Interested in your services'
  })
});
```

### Job Application with CV
```javascript
const formData = new FormData();
formData.append('name', 'Jane Smith');
formData.append('email', 'jane@example.com');
formData.append('contact', '+1234567890');
formData.append('division', 'Finance');
formData.append('cv', cvFile);

const response = await fetch('/api/join-us', {
  method: 'POST',
  body: formData
});
```

### Ebook Download
```javascript
const response = await fetch('/api/ebook', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Bob Wilson',
    email: 'bob@example.com',
    phone: '+1234567890',
    ebookTitle: 'The Sales Blueprint'
  })
});
```

## 🛡️ Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configured for frontend domain
- **Input Validation**: All inputs validated and sanitized
- **File Upload Security**: Type and size restrictions
- **Error Handling**: Secure error responses

## 📊 Database Models

### Contact
- name, email, contact, division, comments
- status tracking (new, in-progress, contacted, closed)
- IP address and user agent logging

### JoinUs
- name, email, contact, division, comments
- CV file upload with metadata
- status tracking (new, reviewing, shortlisted, etc.)
- IP address and user agent logging

### Ebook
- name, email, phone, ebookTitle
- download tracking and statistics
- marketing consent management
- IP address and user agent logging

## 🚀 Deployment

### Production Environment Variables
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
EMAIL_HOST=your-smtp-host
EMAIL_USER=your-email
EMAIL_PASS=your-password
JWT_SECRET=your-secure-jwt-secret
CORS_ORIGIN=https://yourdomain.com
```

### PM2 Deployment
```bash
npm install -g pm2
pm2 start server.js --name abbass-backend
pm2 save
pm2 startup
```

### Docker Deployment
```bash
docker build -t abbass-backend .
docker run -p 5000:5000 --env-file .env abbass-backend
```

## 🧪 Testing

### Run Tests
```bash
node test.js
```

### Manual API Testing
```bash
# Health check
curl http://localhost:5000/api/health

# Contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","contact":"123","division":"Business Brokers"}'
```

## 📝 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check if MongoDB is running
   - Verify connection string in .env
   - Check network connectivity

2. **Email Not Sending**
   - Verify email credentials in .env
   - Check SMTP settings
   - Ensure app password is used for Gmail

3. **File Upload Fails**
   - Check uploads directory permissions
   - Verify file size limits
   - Check allowed file types

4. **CORS Errors**
   - Update CORS_ORIGIN in .env
   - Ensure frontend URL is correct

### Logs
- Check console output for errors
- Monitor MongoDB logs
- Check email service logs

## 📞 Support

For technical support:
- Email: info@abbass.group
- Check the README.md for detailed documentation
- Review error logs for specific issues

## 🔄 Updates

To update the backend:
1. Pull latest changes
2. Run `npm install` to update dependencies
3. Restart the server
4. Test functionality

---

**Backend is ready! 🎉**

Your ABBASS Group backend is now configured and ready to handle:
- Contact form submissions
- Job applications with CV uploads
- Ebook download requests
- Email notifications
- Database storage and management 