const mongoose = require('mongoose')
const MenuStore = require('./menu.store')
const ColorStore = require('./color.store')
const mongoURL = 'mongodb://localhost:27017/universal-demo'

const connectDB = () => {
  return mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true })
}

module.exports = { 
  connectDB,
  MenuStore,
  ColorStore
}