const Song = require('../models/Song')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')

// @desc    Get all songs
// @route   GET /api/v1/songs
// @access  Public
exports.getSongs = asyncHandler(async (req, res, next) => {
  
    const songs = await Song.find()
    res.status(200).json({success: true, count: songs.length, data: songs})
  
  })
  

// @desc    Add new song
// @route   POST /api/v1/songs
// @access  Private
exports.addSong = asyncHandler(async (req, res, next) => {
  
    const song = await Song.create(req.body)
  
  res.status(201).json({
    success: true,
    data: song
  })
})

// @desc    Get single song
// @route   GET /api/v1/songs/:id
// @access  Public
exports.getSong = asyncHandler(async (req, res, next) => {

    const song = await Song.findById(req.params.id)
    if (!song) {
      return next(
        new ErrorResponse(`Song not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: song})
})

// @desc    Update song
// @route   PUT /api/v1/songs/:id
// @access  Private
exports.updateSong = asyncHandler(async (req, res, next) => {
  
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    })
    
    if (!song) {
      return next(
        new ErrorResponse(`Song not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: song})
})

// @desc    Delete song
// @route   DELETE /api/v1/songs/:id
// @access  Private
exports.deleteSong = asyncHandler(async (req, res, next) => {
    const song = await Song.findByIdAndDelete(req.params.id)
    
    if (!song) {
      return next(
        new ErrorResponse(`Song not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: {}})
})