const express = require('express')
const {getGigs, getGig, addGig, updateGig, deleteGig  } = require('../controllers/gigs')

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

router.route('/')
  .get(getGigs)
  .post(protect, authorize('admin', 'publisher'), addGig)

router.route('/:id')
  .get(getGig)
  .put(protect, authorize('admin', 'publisher'), updateGig)
  .delete(protect, authorize('admin', 'publisher'), deleteGig)

module.exports = router