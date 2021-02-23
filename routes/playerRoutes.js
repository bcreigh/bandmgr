const express = require('express')
const {getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer  } = require('../controllers/players')

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

router.route('/')
  .get(getPlayers)
  .post(protect, authorize('admin', 'publisher'), addPlayer)

router.route('/:id')
  .get(getPlayer)
  .put(protect, authorize('admin', 'publisher'), updatePlayer)
  .delete(protect, authorize('admin'), deletePlayer)

module.exports = router