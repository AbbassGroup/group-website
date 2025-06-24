const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { validateContact } = require('../middleware/validation');
const { sendContactNotification } = require('../config/email');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', validateContact, async (req, res, next) => {
  try {
    const { name, email, contact, division, comments } = req.body;

    // Create contact submission
    const contactSubmission = new Contact({
      name,
      email,
      contact,
      division,
      comments,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    });

    await contactSubmission.save();

    // Send email notification (non-blocking)
    try {
      await sendContactNotification({
        name,
        email,
        contact,
        division,
        comments
      });
    } catch (emailError) {
      console.error('❌ Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      status: 'success',
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        id: contactSubmission._id,
        name: contactSubmission.name,
        email: contactSubmission.email,
        submittedAt: contactSubmission.createdAt
      }
    });

  } catch (error) {
    next(error);
  }
});

// @route   GET /api/contact
// @desc    Get all contact submissions (for admin use)
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

    const contacts = await Contact.paginate(query, options);

    res.status(200).json({
      status: 'success',
      data: contacts
    });

  } catch (error) {
    next(error);
  }
});

// @route   GET /api/contact/:id
// @desc    Get single contact submission
// @access  Private (would need auth middleware in production)
router.get('/:id', async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: contact
    });

  } catch (error) {
    next(error);
  }
});

// @route   PATCH /api/contact/:id
// @desc    Update contact submission status
// @access  Private (would need auth middleware in production)
router.patch('/:id', async (req, res, next) => {
  try {
    const { status, notes } = req.body;
    
    const updateData = {};
    if (status) updateData.status = status;
    if (notes) updateData.notes = notes;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Contact submission updated successfully',
      data: contact
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router; 