// getTodo
const { response } = require('express');

const Usuario = require('../models/usuario');
const Asociacion = require('../models/asociacion');
const Lote = require('../models/lote');

const getTodo = async ( req, res = response ) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    const [ usuarios, asociaciones, lotes ] = await Promise.all([
        Usuario.find({nombres: regex,}),
        Asociacion.find({nombres: regex,}),
        Lote.find({nombres: regex,})
    ]);

    res.json({
        ok: true,
        usuarios,
        asociaciones,
        lotes
    });

};

const getDocumentosColeccion = async ( req, res = response ) => {

    const tabla = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    let data = [];

    switch ( tabla ) {
        case 'usuarios':
            data = await Usuario.find({ nombres: regex}); 
            break;
        case 'asociaciones':
            data = await Asociacion.find({ nombre: regex})
                                .populate('usuarioCreador', 'nombres');
            break;
        case 'lotes':
            data = await Lote.find({ lote: regex})
                                .populate('usuarioCreador', 'nombres')
                                .populate('usuario', 'nombres')
                                .populate('asociacion', 'nombre')
            break;
        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser usuarios/asociaciones/lotes'
            });

    }

    res.json({
        ok: true,
        resultados: data
    });

};

module.exports = {
    getTodo,
    getDocumentosColeccion
}