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
        validarJWT,
        check('lote', 'El lote es necesario').not().isEmpty(),
        check('manzana', 'La manzana es necesaria').not().isEmpty(),
        check('etapa', 'La etapa es necesaria').not().isEmpty(),
        check('cuotas', 'Las cuotas son necesarias').not().isEmpty(),
        check('letra', 'La letra es necesaria').not().isEmpty(),
        check('usuario', 'El id del usuario del lote debe ser valido').isMongoId(),
        check('asociacion', 'El id de la asociacion del lote debe ser valido').isMongoId(),
        validarCampos
    ], crearLote );

router.put( '/:id', 
    [
        validarJWT,
        check('lote', 'El lote es necesario').not().isEmpty(),
        check('manzana', 'La manzana es necesaria').not().isEmpty(),
        check('etapa', 'La etapa es necesaria').not().isEmpty(),
        check('cuotas', 'Las cuotas son necesarias').not().isEmpty(),
        check('letra', 'La letra es necesaria').not().isEmpty(),
        check('usuario', 'El id del usuario del lote debe ser valido').isMongoId(),
        check('asociacion', 'El id de la asociacion del lote debe ser valido').isMongoId(),
        validarCampos
    ], actualizarLote );

router.delete( '/:id', validarJWT, eliminarLote );


module.exports = router;