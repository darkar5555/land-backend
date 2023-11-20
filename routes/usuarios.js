// Ruta: /api/usuarios

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')

const { getUsuarios, crearUsuarios, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get( '/', validarJWT, getUsuarios );

router.post( '/', 
    [
        check('nombres', 'Los nombres son requeridos').not().isEmpty(),
        check('apellidos', 'Los apellidos son requeridos').not().isEmpty(),
        check('codigo', 'El codigo es requerido').not().isEmpty(),
        check('email', 'El email es requerido').not().isEmpty(),
        check('email').isEmail(),
        check('dni', 'El dni es requerido').not().isEmpty(),
        check('edad', 'La edad es requerida').not().isEmpty(),
        check('celular', 'El celular es requerido').not().isEmpty(),
        check('direccion', 'La direccion es requerida').not().isEmpty(),
        check('password', 'El password es requerido').not().isEmpty(),
        validarCampos
    ], crearUsuarios );

router.put( '/:id', 
    [
        validarJWT,
        check('nombres', 'Los nombres son requeridos').not().isEmpty(),
        check('apellidos', 'Los apellidos son requeridos').not().isEmpty(),
        check('codigo', 'El codigo es requerido').not().isEmpty(),
        check('email', 'El email es requerido').not().isEmpty(),
        check('email').isEmail(),
        check('dni', 'El dni es requerido').not().isEmpty(),
        check('edad', 'La edad es requerida').not().isEmpty(),
        check('celular', 'El celular es requerido').not().isEmpty(),
        check('direccion', 'La direccion es requerida').not().isEmpty(),
        check('role', 'El role es requerido').not().isEmpty(),
        validarCampos
    ], actualizarUsuario );

router.delete( '/:id', validarJWT, eliminarUsuario );


module.exports = router;