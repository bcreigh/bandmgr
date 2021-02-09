const express = require('express')
const dotenv = require('dotenv')

//Load ENV vars
dotenv.config({ path: './config/config.env' })

const app = express();

// User Routes
app.get('/api/v1/users', (req, res) => {
  res.status(200).json({success: true, msg: 'return all users'})
})

app.post('/api/v1/users', (req, res) => {
  res.status(200).json({success: true, msg: 'add new users'})
})

app.get('/api/v1/users/:id', (req, res) => {
  res.status(200).json({success: true, msg: `return user ${req.params.id}`})
})

app.put('/api/v1/users/:id', (req, res) => {
  res.status(200).json({success: true, msg: `update user ${req.params.id}`})
})

app.delete('/api/v1/users/:id', (req, res) => {
  res.status(200).json({success: true, msg: `delete user ${req.params.id}`})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))