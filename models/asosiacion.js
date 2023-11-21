const { Schema, model } = require('mongoose');

const AsosiacionSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    usuarioCreador: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },    
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, { collection: 'asosiaciones' });

module.exports = model( 'Asosiacion', AsosiacionSchema );