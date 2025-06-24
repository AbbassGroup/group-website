const express = require('express');
const router = express.Router();
const JoinUs = require('../models/JoinUs');
const { validateJoinUs } = require('../middleware/validation');
const { handleUpload } = require('../middleware/upload');
const { sendJoinUsNotification } = require('../config/email');

// @route   POST /api/join-us
// @desc    Submit job application with CV
// @access  Public
router.post('/', handleUpload, validateJoinUs, async (req, res, next) => {
  try {
    const { name, email, contact, division, comments } = req.body;
    const cvFile = req.file;

    // Create job application (without saving CV file info)
    const jobApplication = new JoinUs({
      name,
      email,
      contact,
      division,
      comments,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await jobApplication.save();

    // Send email notification with CV attachment (if present)
    try {
      await sendJoinUsNotification({
        name,
        email,
        contact,
        division,
        comments,
        cvFileName: cvFile ? cvFile.originalname : undefined,
        cvMimeType: cvFile ? cvFile.mimetype : undefined,
        cvBuffer: cvFile ? cvFile.buffer : undefined
      });
    } catch (emailError) {
      console.error('❌ Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      status: 'success',
      message: 'Thank you for your application! We will review your CV and get back to you soon.',
      data: {
        id: jobApplication._id,
        name: jobApplication.name,
        email: jobApplication.email,
        division: jobApplication.division,
        submittedAt: jobApplication.createdAt
      }
    });

  } catch (error) {
    next(error);
  }
});

// @route   GET /api/join-us
// @desc    Get all job applications (for admin use)
// @access  Private (would need auth middleware in production)
router.get('/', async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status, division } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (division) query.division = division;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 },
      select: '-__v'
    };

    const applications = await JoinUs.paginate(query, options);

    res.status(200).json({
      status: 'success',
      data: applications
    });

  } catch (error) {
    next(error);
  }
});

// @route   GET /api/join-us/:id
// @desc    Get single job application
// @access  Private (would need auth middleware in production)
router.get('/:id', async (req, res, next) => {
  try {
    const application = await JoinUs.findById(req.params.id).select('-__v');
    
    if (!application) {
      return res.status(404).json({
        status: 'error',
        message: 'Job application not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: application
    });

  } catch (error) {
    next(error);
  }
});

// @route   PATCH /api/join-us/:id
// @desc    Update job application status
// @access  Private (would need auth middleware in production)
router.patch('/:id', async (req, res, next) => {
  try {
    const { status, notes } = req.body;
    
    const updateData = {};
    if (status) updateData.status = status;
    if (notes) updateData.notes = notes;

    const application = await JoinUs.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!application) {
      return res.status(404).json({
        status: 'error',
        message: 'Job application not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Job application updated successfully',
      data: application
    });

  } catch (error) {
    next(error);
  }
});

// @route   GET /api/join-us/:id/cv
// @desc    Download CV file
// @access  Private (would need auth middleware in production)
router.get('/:id/cv', async (req, res, next) => {
  try {
    const application = await JoinUs.findById(req.params.id);
    
    if (!application) {
      return res.status(404).json({
        status: 'error',
        message: 'Job application not found'
      });
    }

    if (!application.cvFile || !application.cvFile.filePath) {
      return res.status(404).json({
        status: 'error',
        message: 'CV file not found'
      });
    }

    // Set headers for file download
    res.setHeader('Content-Type', application.cvFile.mimeType);
    res.setHeader('Content-Disposition', `attachment; filename="${application.cvFile.originalName}"`);
    
    // Send file
    res.sendFile(application.cvFile.filePath, { root: '.' });

  } catch (error) {
    next(error);
  }
});

module.exports = router; 