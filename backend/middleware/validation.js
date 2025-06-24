const { body, validationResult } = require('express-validator');

// Validation result handler
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg
      }))
    });
  }
  next();
};

// Contact form validation rules
const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('contact')
    .trim()
    .notEmpty()
    .withMessage('Contact number is required')
    .isLength({ max: 20 })
    .withMessage('Contact number cannot exceed 20 characters'),
  
  body('division')
    .trim()
    .notEmpty()
    .withMessage('Business division is required')
    .isIn(['Business Brokers', 'Advocacy', 'Finance', 'Global Properties'])
    .withMessage('Please select a valid business division'),
  
  body('comments')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Comments cannot exceed 1000 characters'),
  
  handleValidationErrors
];

// Join Us form validation rules
const validateJoinUs = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('contact')
    .trim()
    .notEmpty()
    .withMessage('Contact number is required')
    .isLength({ max: 20 })
    .withMessage('Contact number cannot exceed 20 characters'),
  
  body('division')
    .trim()
    .notEmpty()
    .withMessage('Business division is required')
    .isIn(['Business Brokers', 'Advocacy', 'Finance', 'Global Properties'])
    .withMessage('Please select a valid business division'),
  
  body('comments')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Comments cannot exceed 1000 characters'),
  
  handleValidationErrors
];

// Ebook download validation rules
const validateEbook = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 100 })
    .withMessage('Name cannot exceed 100 characters'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ max: 20 })
    .withMessage('Phone number cannot exceed 20 characters'),
  
  body('ebookTitle')
    .trim()
    .notEmpty()
    .withMessage('Ebook title is required')
    .isLength({ max: 200 })
    .withMessage('Ebook title cannot exceed 200 characters'),
  
  handleValidationErrors
];

module.exports = {
  validateContact,
  validateJoinUs,
  validateEbook,
  handleValidationErrors
}; 