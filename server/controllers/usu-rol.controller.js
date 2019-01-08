const UsuRol = require('../models/usu-rol');

const usuRolCtrl = {};

usuRolCtrl.getUsuRols = async (req, res, next) => {
    const usuRols = await UsuRol.find();
    res.json(usuRols);
};

//usuRolCtrl.createUsuRol = async (req,res) =>{
//    const usuRol = new UsuRol(req.body);
//    await usuRol.save();
//    res.json({status: 'usuario rol guardado'});
//};

usuRolCtrl.createUsuRol = async (req,res) =>{
    const usuRol = new UsuRol({
        Fecha_Inicio_UR: req.body.Fecha_Inicio_UR,
        Fecha_Fin_UR: req.body.Fecha_Fin_UR
    });
    await usuRol.save();
    res.json({status: 'usuario rol guardado'});
};

usuRolCtrl.getUsuRol = async (req, res, next) => {
    const { id } = req.params;
    const usuRol = await UsuRol.findById(id);
    res.json(usuRol);
};

usuRolCtrl.editUsuRol = async (req,res) =>{
    const { id } = req.params;
    const usuRol = {
        Fecha_Inicio_UR: req.body.Fecha_Inicio_UR,
        Fecha_Fin_UR: req.body.Fecha_Fin_UR
    };
   await UsuRol.findByIdAndUpdate(id, {$set: usuRol}, {new: true});
    res.json({status: 'usuario rol actualizado'});
};

usuRolCtrl.deleteEmployee = async (req, res, next) => {
    await UsuRol.findByIdAndRemove(req.params.id);
    res.json({status: 'usuario rol elimonado'});
};

module.exports = usuRolCtrl;