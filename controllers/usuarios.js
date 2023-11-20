const { generarJWT } = require('../helpers/jwt');
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

const getUsuarios = async(req, res) => {

    const usuarios = await Usuario.find();
    // Otra forma de traer solo campos necesarios
    //const usuarios = await Usuario.find({}, 'nombres apellidos dni')

    res.json({
        ok: "200",
        usuarios
    });
};

const crearUsuarios = async(req, res) => {

    try {
        const usuario = new Usuario( req.body );

        // Encriptar password
        const salt = bcrypt.genSaltSync();
        console.log(req.body.password);
        usuario.password = bcrypt.hashSync(req.body.password, salt);

        // Guardar usuaio
        await usuario.save();

        // Generar el token - JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: "200",
            usuario: usuario,
            token
        });        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
};

const actualizarUsuario = async(req, res) => {

    const uid = req.params.id;

    try {
        
        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        // Validar token para ver si es el usuario correcto

        // Actualizacion
        const campos = req.body;

        if ( usuarioDB.email === req.body.email) {
            delete campos.email
        } else {
            const existeEmail = await Usuario.findOne({ email: req.body.email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                }); 
            }
        }

        delete campos.password;
        delete campos.fecha;
        delete campos.role;
        delete campos.permisos;
        delete campos.codigo;
        delete campos.dni;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

        res.json({
            ok: true,
            usuario: usuarioActualizado
        });        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}

const eliminarUsuario = async(req, res) => {

    const uid = req.params.id;

    try {
        
        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        await Usuario.findByIdAndDelete(uid);

        res.json({
            ok: true,
            msg: 'Usuario eliminado'
        });        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}

module.exports = {
    getUsuarios,
    crearUsuarios,
    actualizarUsuario,
    eliminarUsuario
}