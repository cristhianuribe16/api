const jwt = require('jsonwebtoken');

/**
 * 
 * This functions generate a Json Web token
 * @params {String} uid - User Uid.
 * @returns {Promise} Returns a promise with JWT 
 * 
*/
function generarJWT(uid = String) {
    return new Promise((resolve, reject) => {

        const payload = {
            uid,
        };

        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token);
            }

        });

    });

}


module.exports = {
    generarJWT,
}