/*
    Asociaciones
    ruta '/api/asociaciones'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getAsociaciones, crearAsociacion, actualizarAsociacion, eliminarAsociacion } = require('../controllers/asociaciones');

const router = Router();

router.get( '/', getAsociaciones );

router.post( '/', 
    [
        validarJWT,
        check('nombre', 'El nombre de la asociacion es necesario').not().isEmpty(),
        validarCampos
    ], crearAsociacion );

router.put( '/:id', 
    [
        validarJWT,
        check('nombre', 'El nombre de la asociacion es necesaria').not().isEmpty(),
        validarCampos
    ], actualizarAsociacion );

router.delete( '/:id', validarJWT, eliminarAsociacion );


module.exports = router;