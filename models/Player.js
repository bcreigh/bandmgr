const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User Name Required']
  },
  email: {
    type: String,
    required: [true, 'Email Address Requred'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Email Address invalid format'
    ]
  },
  phone: {
    type: String
  },

  position: {
    type: String,
    required: [true, 'Player position required']
  }
})

module.exports = mongoose.model('Player', PlayerSchema)