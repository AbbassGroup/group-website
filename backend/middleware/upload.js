const multer = require('multer');

// Use memory storage instead of disk storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  // You can keep your file type checks here if you want
  cb(null, true);
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024,
    files: 1
  },
  fileFilter: fileFilter
});

const uploadCV = upload.single('cv');

const handleUpload = (req, res, next) => {
  uploadCV(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message
      });
    }
    // No need to check for req.file
    next();
  });
};

module.exports = {
  upload,
  uploadCV,
  handleUpload
}; 