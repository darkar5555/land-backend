const { response } = require('express');

const getLotes = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'getLotes'
    })
}

const crearLote = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'crearLote'
    })
}

const actualizarLote = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'actualizarLote'
    })
}

const eliminarLote = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'eliminarLote'
    })
}

module.exports = {
    getLotes,
    crearLote,
    actualizarLote,
    eliminarLote
}