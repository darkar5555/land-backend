const { response } = require('express');

const Lote = require('../models/lote');

const getLotes = async ( req, res = response ) => {

    const lotes = await Lote.find()
                            .populate('usuarioCreador', 'nombres apellidos')
                            .populate('usuario', 'nombres apellidos')
                            .populate('asociacion', 'nombre')
                                        
    res.json({
        ok: true,
        lotes
    })
}

const crearLote = async ( req, res = response ) => {

    const uid = req.uid;
    // fix:me - falta agregarle a la asosiacion que usuario la tiene
    const lote = new Lote({
        usuarioCreador: uid,
        ...req.body
    });

    try {

        const loteDB = await lote.save();
        res.json({
            ok: true,
            lote: loteDB
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
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