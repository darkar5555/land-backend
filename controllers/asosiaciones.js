const { response } = require('express');

const getAsosiaciones = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'getAsosiaciones'
    })
}

const crearAsosiacion = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'crearAsosiacion'
    })
}

const actualizarAsosiacion = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'actualizarAsosiacion'
    })
}

const eliminarAsosiacion = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'eliminarAsosiacion'
    })
}

module.exports = {
    getAsosiaciones,
    crearAsosiacion,
    actualizarAsosiacion,
    eliminarAsosiacion
}