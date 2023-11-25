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

const actualizarLote = async ( req, res = response ) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const lote = await Lote.findById( id );

        if ( !lote ) {
            return res.status(404).json({
                ok: true,
                msg: 'Lote no encontrado por id'
            });
        }

        const cambiosLotes = {
            ...req.body,
            usuario: uid
        };

        const loteActualizado = await Lote.findByIdAndUpdate( id, cambiosLotes, { new: true });
        
        res.json({
            ok: true,
            lote: loteActualizado
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const eliminarLote = async ( req, res = response ) => {

    const id = req.params.id;

    try {

        const lote = await Lote.findById( id );

        if ( !lote ) {
            return res.status(404).json({
                ok: true,
                msg: 'Lote no encontrado por id'
            });
        }

        await Lote.findByIdAndDelete( id );
        
        res.json({
            ok: true,
            msg: 'Lote eliminado'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getLotes,
    crearLote,
    actualizarLote,
    eliminarLote
}