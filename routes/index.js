const express = require('express')
const { MenuController } = require('../controllers/index.js')
const { ColorController } = require('../controllers/index.js')
const routes =  express.Router()

routes.get('/menu', MenuController.getAll)
routes.get('/menu/:menuId', MenuController.get)
routes.post('/menu', MenuController.create)
routes.put('/menu/:menuId', MenuController.update)
routes.delete('/menu', MenuController.delete)

routes.get('/color', ColorController.getAll)
routes.get('/color/:colorId', ColorController.get)
routes.post('/color', ColorController.create)
routes.put('/color/:colorId', ColorController.update)
routes.delete('/color', ColorController.delete)

module.exports = routes