const express = require('express')
const {getSongs, getSong, addSong, updateSong, deleteSong  } = require('../controllers/songs')

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

router.route('/')
  .get(getSongs)
  .post(protect, authorize('admin', 'publisher'), addSong)

router.route('/:id')
  .get(getSong)
  .put(protect, authorize('admin', 'publisher'), updateSong)
  .delete(protect, authorize('admin'), deleteSong)

module.exports = router