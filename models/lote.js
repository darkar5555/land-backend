const { Schema, model } = require('mongoose');

const LoteSchema = Schema({
    lote: {
        type: String,
        required: true
    },
    manzana: {
        type: String,
        required: true
    },
    etapa: {
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
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    asosiacion: {
        type: Schema.Types.ObjectId,
        ref: 'Asosiacion'
    }
});

module.exports = model( 'Lote', LoteSchema );