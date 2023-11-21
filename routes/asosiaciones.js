/*
    Asosiaciones
    ruta '/api/asosiaciones'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getAsosiaciones, crearAsosiacion, actualizarAsosiacion, eliminarAsosiacion } = require('../controllers/asosiaciones');

const router = Router();

router.get( '/', getAsosiaciones );

router.post( '/', 
    [
    ], crearAsosiacion );

router.put( '/:id', 
    [
    ], actualizarAsosiacion );

router.delete( '/:id', eliminarAsosiacion );


module.exports = router;