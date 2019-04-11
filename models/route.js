'use strict'

//importando mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//definiendo schema
const RouteSchema = new Schema({
    initial_direction: {type: String},
    final_direction: {type: String},
    time: {type: Number},
    conductor: {type: String},
})

module.exports = mongoose.model('Route',RouteSchema)