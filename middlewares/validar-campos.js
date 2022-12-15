const { response } = require('express');
const { validationResult } = require('express-validator')

/**
 * 
 * This functions generate a Json Web token
 * @params {request} req - Request.
 * @params {response} res - Response.
 * @params {next} next - next.
 * @returns {Promise} Returns a promise with JWT 
 * 
*/
function validarCampos(req = request, res = response, next) {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        });
    }
    next();
}

module.exports = { validarCampos }
