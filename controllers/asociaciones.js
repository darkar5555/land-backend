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

const actualizarAsociacion = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'actualizarAsociacion'
    })
}

const eliminarAsociacion = ( req, res = response ) => {

    res.json({
        ok: true,
        msg: 'eliminarAsociacion'
    })
}

module.exports = {
    getAsociaciones,
    crearAsociacion,
    actualizarAsociacion,
    eliminarAsociacion
}