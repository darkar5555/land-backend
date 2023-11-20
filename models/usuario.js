const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true,
        unique: true       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    edad: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now
    },
    celular: {
        type: Number,
    },
    direccion: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true       
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
    permisos: {
        type: Boolean,
        default: false
    }
});

module.exports = model( 'Usuario', UsuarioSchema );