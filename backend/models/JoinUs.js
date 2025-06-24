const mongoose = require('mongoose');

const joinUsSchema = new mongoose.Schema({
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
  contact: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
    maxlength: [20, 'Contact number cannot exceed 20 characters']
  },
  division: {
    type: String,
    required: [true, 'Business division is required'],
    enum: {
      values: ['Business Brokers', 'Advocacy', 'Finance', 'Global Properties'],
      message: 'Please select a valid business division'
    }
  },
  comments: {
    type: String,
    trim: true,
    maxlength: [1000, 'Comments cannot exceed 1000 characters']
  },
  cvFile: {
    originalName: { type: String },
    fileName: { type: String },
    filePath: { type: String },
    fileSize: { type: Number },
    mimeType: { type: String }
  },
  status: {
    type: String,
    enum: ['new', 'reviewing', 'shortlisted', 'interviewed', 'hired', 'rejected'],
    default: 'new'
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [2000, 'Notes cannot exceed 2000 characters']
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
joinUsSchema.index({ email: 1, createdAt: -1 });
joinUsSchema.index({ status: 1, createdAt: -1 });
joinUsSchema.index({ division: 1, createdAt: -1 });

// Virtual for formatted date
joinUsSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
});

// Virtual for CV file URL
joinUsSchema.virtual('cvUrl').get(function() {
  if (this.cvFile && this.cvFile.fileName) {
    return `/uploads/${this.cvFile.fileName}`;
  }
  return null;
});

// Pre-save middleware to clean data
joinUsSchema.pre('save', function(next) {
  if (this.name) {
    this.name = this.name.trim();
  }
  if (this.email) {
    this.email = this.email.toLowerCase().trim();
  }
  if (this.contact) {
    this.contact = this.contact.trim();
  }
  if (this.comments) {
    this.comments = this.comments.trim();
  }
  if (this.notes) {
    this.notes = this.notes.trim();
  }
  next();
});

module.exports = mongoose.model('JoinUs', joinUsSchema); 