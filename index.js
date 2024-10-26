// express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.json())

// maybe later cors will be used

// health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' })
})

app.listen(port, () => {
  console.log(`LD backend listening on port ${port}`)
})

module.exports = app
