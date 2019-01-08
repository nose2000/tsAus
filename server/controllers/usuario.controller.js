const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario= async (req,res) =>{
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({status: 'usuario guardado'});
};

usuarioCtrl.createUsuario= async (req,res) =>{
    const usuario = new Usuario({
        Contrasena_usuario: req.body.Contrasena_usuario,
        Usuario_usuario: req.body.Usuario_usuario
    });
    await usuario.save();
    res.json({status: 'usuario guardado'});
};

usuarioCtrl.getUsario= async (req, res, next) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req,res) =>{
    const { id } = req.params;
    const usuario = {
        Contrasena_usuario: req.body.Contrasena_usuario,
        Usuario_usuario: req.body.Usuario_usuario
    };
   await Usuario.findByIdAndUpdate(id, {$set: usuario}, {new: true});
    res.json({status: 'usuario actilizado'});
};

usuarioCtrl.deleteusiario = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: 'usuario eliminado'});
};

module.exports = usuarioCtrl;