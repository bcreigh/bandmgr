const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')

//Load ENV vars
dotenv.config({ path: './config/config.env' })

const url = process.env.BASE_URL

// Route Files
const songs = require('./routes/songRoutes')
const auth = require('./routes/auth')
const gigs = require('./routes/gigRoutes')
const players = require('./routes/playerRoutes')

// Connect to Database
connectDB()

const app = express();

// Body Parser
app.use(express.json())

// Cookie parser
app.use(cookieParser())


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


// Mount Routers
app.use(`${url}/songs`, songs)
app.use(`${url}/auth`, auth)
app.use(`${url}/gigs`, gigs)
app.use(`${url}/players`, players)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})