/** Express router providing user related routes
 * @module routers/usuarios
 * @requires express
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');
const { validarJWT } = require('../middlewares/validar-jwt');

/**
 * Express router to mount user related functions on.
 * @type {object}
 * @const
 * @namespace usuariosRouter
 */
const router = Router();

/**
 * 
 * Route serving get all users register per a user.
 * @route "/"
 * @method GET
 * 
 */
router.get('/', validarJWT, getUsuarios);

/**
 * 
 * Route serving to register a user.
 * @route "/"
 * @method POST
 * 
 */
router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('user', 'El usuario es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos,
    ],
    crearUsuario
);

/**
 * 
 * Route serving to edit a user.
 * @route "/:id"
 * @method PUT
 * @param id
 * 
 */
router.put('/:id',
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        check('user', 'El usuario es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario
);

/**
 * 
 * Route serving to delete a user.
 * @route "/:id"
 * @method DELETE
 * @param id
 * 
 */
router.delete('/:id',
    validarJWT,
    borrarUsuario
);

module.exports = router;