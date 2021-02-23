const Gig = require('../models/Gig')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')

// @desc    Get all gigs
// @route   GET /api/v1/gigs
// @access  Public
exports.getGigs = asyncHandler(async (req, res, next) => {
  
    const gigs = await Gig.find()
    res.status(200).json({success: true, count: gigs.length, data: gigs})
  
  })
  

// @desc    Add new gig
// @route   POST /api/v1/gigs
// @access  Private
exports.addGig = asyncHandler(async (req, res, next) => {
  
    const gig = await Gig.create(req.body)
  
  res.status(201).json({
    success: true,
    data: gig
  })
})

// @desc    Get single gig
// @route   GET /api/v1/gigs/:id
// @access  Public
exports.getGig = asyncHandler(async (req, res, next) => {

    const gig = await Gig.findById(req.params.id)
    if (!gig) {
      return next(
        new ErrorResponse(`Gig not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: gig})
})

// @desc    Update gig
// @route   PUT /api/v1/gigs/:id
// @access  Private
exports.updateGig = asyncHandler(async (req, res, next) => {
  
    const gig = await Gig.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    })
    
    if (!gig) {
      return next(
        new ErrorResponse(`Gig not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: gig})
})

// @desc    Delete gig
// @route   DELETE /api/v1/gigs/:id
// @access  Private
exports.deleteGig = asyncHandler(async (req, res, next) => {
    const gig = await Gig.findByIdAndDelete(req.params.id)
    
    if (!gig) {
      return next(
        new ErrorResponse(`Gig not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: {}})
})