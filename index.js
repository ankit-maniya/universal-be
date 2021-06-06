const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/index.js')
const { connectDB } = require('./stores/index.js')
const app = express()

app.use(cors())
app.use(bodyParser())
app.use(morgan('dev'))

app.use('/', routes)

app.listen(8000, () => {
  connectDB().then(() => {
    console.log('Mongodb connected')
  })

  console.log(`sever running at 3000`)
})
