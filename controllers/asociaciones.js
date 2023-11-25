const { response } = require('express');
const Asociacion = require('../models/asociacion')

const getAsociaciones = async ( req, res = response ) => {

    const asociaciones = await Asociacion.find()
                                        .populate('usuarioCreador', 'nombres');

    res.json({
        ok: true,
        asociaciones
    })
}

const crearAsociacion =  async ( req, res = response ) => {

    const uid = req.uid;
    // fix:me - falta agregarle a la asosiacion que usuario la tiene
    const asociacion = new Asociacion({
        usuarioCreador: uid,
        ...req.body
    });

    try {

        const asociacionDB = await asociacion.save();
        res.json({
            ok: true,
            asociacion: asociacionDB
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const actualizarAsociacion = async ( req, res = response ) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const asociacion = await Asociacion.findById( id );

        if ( !asociacion ) {
            return res.status(404).json({
                ok: true,
                msg: 'Asociacion no encontrado por id'
            });
        }

        const cambiosAsociaciones = {
            ...req.body,
            usuario: uid
        };

        const asociacionActualizado = await Asociacion.findByIdAndUpdate( id, cambiosAsociaciones, { new: true });
        
        res.json({
            ok: true,
            asociacion: asociacionActualizado
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const eliminarAsociacion = async ( req, res = response ) => {

    const id = req.params.id;

    try {

        const asociacion = await Asociacion.findById( id );

        if ( !asociacion ) {
            return res.status(404).json({
                ok: true,
                msg: 'Asociacion no encontrado por id'
            });
        }

        await Asociacion.findByIdAndDelete( id );
        
        res.json({
            ok: true,
            msg: 'Asociacion eliminada'
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getAsociaciones,
    crearAsociacion,
    actualizarAsociacion,
    eliminarAsociacion
}