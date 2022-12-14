const { response, request } = require("express");
const { generarJWT } = require("../helpers/jwt");


/**
 * This functions return a list of users.
 * @params {request} req - Request from back.
 * @params {response} res - Response to front.
 * @returns {response} Response 
 * 
*/
async function getUsuarios(req = request, res = response) {
    res.json({
        ok: true,
        message: "Obteniendo usuarios.",
    });
};

const crearUsuario = async (req, res = response) => {
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

const actualizarUsuario = async (req, res = response) => {
    // TODO: Validar token y comprobar si es el usuario correcto

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

const borrarUsuario = async (req, res = response) => {
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
