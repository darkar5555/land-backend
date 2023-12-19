const { response } = require('express');
const bcrypt = require('bcryptjs')

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const login = async( req, res = response ) => {

    const { email, password } = req.body;

    try {

        // Verificar Email
        const usuarioDB = await Usuario.findOne({ email });

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                msg: 'Password no valida'
            });
        }

        // Verificar Password
        const validPassword = bcrypt.compareSync( password, usuarioDB.password );

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password no valida'
            });
        }

        // Generar JWT
        const token = await generarJWT(usuarioDB.id);

        res.status(200).json({
            ok: true,
            token
        });       
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        });
    }
};

const renewToken = async ( req, res = response ) => {

    const uid = req.uid;

    // Generar el TOKEN - JWT
    const token = await generarJWT( uid );

    //obtener usuario por UID
    const usuario= await Usuario.findById( uid );

    res.json({
        ok: true,
        token,
        usuario
    });
};

module.exports = {
    login,
    renewToken
}