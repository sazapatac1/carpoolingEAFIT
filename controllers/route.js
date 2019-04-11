'use strict'

const Route = require('../models/route')

function createRoute(req,res){
    const route = new Route({
        initial_direction: req.body.initial_direction,
        final_direction: req.body.final_direction,
        time: req.body.time,
        conductor: req.body.conductor
    })

    route.save((err)=>{
        if (err) return res.status(500).send({ message: `Error al almacenar ruta: ${err}` })
        return res.status(201).send({
            message: 'Registro exitoso',
            conductor: route.conductor,
            routeID: route._id
        })
    })
}

function showRoutes(req,res){
    Route.find({},(err,routes)=>{
        if(err) return res.status(500).send({message : `Error al realizar la petición: ${err}` })
        if(!routes) return res.status(404).send({message: `No existen rutas`})
        res.send(200, routes)
    })
}



module.exports = {
    createRoute,
    showRoutes
}