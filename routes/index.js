'use strict'

const express = require('express')
const routeController = require('../controllers/route')
const api = express.Router()

//crear ruta
api.post('/createRoute',routeController.createRoute)

//mostrar rutas
api.get('/showRoute',routeController.showRoutes)

module.exports = api