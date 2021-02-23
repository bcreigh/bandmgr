const Player = require('../models/Player')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')

// @desc    Get all players
// @route   GET /api/v1/players
// @access  Public
exports.getPlayers = asyncHandler(async (req, res, next) => {
  
    const players = await Player.find()
    res.status(200).json({success: true, count: players.length, data: players})
  
  })
  

// @desc    Add new player
// @route   POST /api/v1/players
// @access  Private
exports.addPlayer = asyncHandler(async (req, res, next) => {
  
    const player = await Player.create(req.body)
  
  res.status(201).json({
    success: true,
    data: player
  })
})

// @desc    Get single player
// @route   GET /api/v1/players/:id
// @access  Public
exports.getPlayer = asyncHandler(async (req, res, next) => {

    const player = await Player.findById(req.params.id)
    if (!player) {
      return next(
        new ErrorResponse(`Song not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: player})
})

// @desc    Update player
// @route   PUT /api/v1/players/:id
// @access  Private
exports.updatePlayer = asyncHandler(async (req, res, next) => {
  
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
    })
    
    if (!player) {
      return next(
        new ErrorResponse(`Player not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: player})
})

// @desc    Delete player
// @route   DELETE /api/v1/players/:id
// @access  Private
exports.deletePlayer = asyncHandler(async (req, res, next) => {
    const player = await Player.findByIdAndDelete(req.params.id)
    
    if (!player) {
      return next(
        new ErrorResponse(`Player not found with ID of ${req.params.id}`, 404))
    }
    res.status(200).json({success: true, data: {}})
})