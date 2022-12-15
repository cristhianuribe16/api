const jwt = require('jsonwebtoken');

/**
 * 
 * This functions validate a Json Web token
 * @params {request} req - Request.
 * @params {response} res - Response.
 * @params {next} next - next.
 * @returns {Promise} Returns a promise with JWT 
 * 
*/
const validarJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

}


module.exports = { validarJWT }