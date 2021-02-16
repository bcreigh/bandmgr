const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
  songNum: {
    type: String,
    required: [true, 'Song Number is required'],
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Song Title is required'],
    trim: true
  },
  length: {
    type: Number
  },
  bpm: {
    type: Number
  }
})

module.exports = mongoose.model('Song', SongSchema)