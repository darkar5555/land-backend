const { Schema, model } = require('mongoose');

const AsociacionSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    usuarioCreador: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, { collection: 'asociaciones' });

module.exports = model( 'Asociacion', AsociacionSchema );