const { Schema, model } = require('mongoose');

const LoteSchema = Schema({
    lote: {
        required: true,
        type: String,
        required: true
    },
    manzana: {
        required: true,
        type: String,
        required: true
    },
    etapa: {
        required: true,
        type: String,
        required: true
    },
    cuotas: {
        type: Number,
        required: true
    },
    letra: {
        type: Number,
        required: true
    },
    usuarioCreador: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    asociacion: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Asociacion'
    }
});

module.exports = model( 'Lote', LoteSchema );