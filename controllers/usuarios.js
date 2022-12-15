const { response, request } = require("express");
const { generarJWT } = require("../helpers/jwt");


/**
 * 
 * This functions return a list of users.
 * @params {request} req - Request from back.
 * @params {response} res - Response to front.
 * @returns {response} Response 
 * 
*/
async function getUsuarios(req = request, res = response) {
    res.json({
        ok: true,
        message: "Obteniendo usuarios [].",
    });
};

/**
 * 
 * This functions create a user
 * @params {request} req - Request from back.
 * @params {response} res - Response to front.
 * @returns {response} Response 
 * 
*/
async function crearUsuario(req = request, res = response) {
    // Generar el TOKEN - JWT
    const token = await generarJWT("123");
    try {
        res.json({
            ok: true,
            message: "Usuario registrado.",
            token,
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error inesperado.",
        });
    }
};

/**
 * 
 * This functions update a user.
 * @params {request} req - Request from back.
 * @params {response} res - Response to front.
 * @returns {response} Response 
 * 
*/

async function actualizarUsuario(req = request, res = response) {
    try {
        res.json({
            ok: true,
            message: "Usuario actualizado.",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Error inesperado.",
        });
    }
};

/**
 * 
 * This functions delete a user.
 * @params {request} req - Request from back.
 * @params {response} res - Response to front.
 * @returns {response} Response 
 * 
*/

async function borrarUsuario(req = request, res = response) {
    try {
        res.json({
            ok: true,
            msg: "Usuario eliminado.",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Consulte al administrador.",
        });
    }
};

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
};
