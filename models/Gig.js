const mongoose = require('mongoose')

const Set = new mongoose.Schema({
  setTitle: {
    type: String,
    required: [true, 'Set title is required']
  },
  songs: [{
    type:mongoose.Schema.Types.ObjectId,
        ref:'Song'
  }]
})

const GigSchema = new mongoose.Schema({
  gigTitle: {
    type: String,
    required: [true, 'Gig Title is required'],
    trim: true
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },
  location: {
    type: String
  },
  players: [{
    type:mongoose.Schema.Types.ObjectId,
        ref:'Player'
  }],
  sets: [Set]
})

module.exports = mongoose.model('Gig', GigSchema)