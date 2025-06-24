const mongoose = require('mongoose');

const ebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    maxlength: [20, 'Phone number cannot exceed 20 characters']
  },
  ebookTitle: {
    type: String,
    required: [true, 'Ebook title is required'],
    trim: true,
    maxlength: [200, 'Ebook title cannot exceed 200 characters']
  },
  ebookType: {
    type: String,
    enum: {
      values: ['business', 'finance', 'property', 'general'],
      message: 'Please select a valid ebook type'
    },
    default: 'general'
  },
  downloadCount: {
    type: Number,
    default: 1
  },
  lastDownloaded: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'unsubscribed'],
    default: 'active'
  },
  marketingConsent: {
    type: Boolean,
    default: true
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Index for better query performance
ebookSchema.index({ email: 1, createdAt: -1 });
ebookSchema.index({ status: 1, createdAt: -1 });
ebookSchema.index({ ebookType: 1, createdAt: -1 });
ebookSchema.index({ marketingConsent: 1, createdAt: -1 });

// Virtual for formatted date
ebookSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Virtual for last download formatted date
ebookSchema.virtual('formattedLastDownload').get(function() {
  return this.lastDownloaded.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Pre-save middleware to clean data
ebookSchema.pre('save', function(next) {
  if (this.name) {
    this.name = this.name.trim();
  }
  if (this.email) {
    this.email = this.email.toLowerCase().trim();
  }
  if (this.phone) {
    this.phone = this.phone.trim();
  }
  if (this.ebookTitle) {
    this.ebookTitle = this.ebookTitle.trim();
  }
  next();
});

// Static method to find or create ebook download
ebookSchema.statics.findOrCreateDownload = async function(downloadData) {
  const { email, ebookTitle } = downloadData;
  
  let ebook = await this.findOne({ email, ebookTitle });
  
  if (ebook) {
    // Update existing record
    ebook.downloadCount += 1;
    ebook.lastDownloaded = new Date();
    await ebook.save();
  } else {
    // Create new record
    ebook = new this(downloadData);
    await ebook.save();
  }
  
  return ebook;
};

module.exports = mongoose.model('Ebook', ebookSchema); 