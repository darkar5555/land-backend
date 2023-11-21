/*
    Lotes
    ruta '/api/lotes'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');
const { getLotes, crearLote, actualizarLote, eliminarLote } = require('../controllers/lotes');

const router = Router();

router.get( '/', getLotes );

router.post( '/', 
    [
    ], crearLote );

router.put( '/:id', 
    [
    ], actualizarLote );

router.delete( '/:id', eliminarLote );


module.exports = router;