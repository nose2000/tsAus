const Rol = require('../models/rol');

const rolCtrl = {};

rolCtrl.getRoles = async(req, res, next) => {
    const roles = await Rol.find();
    res.json(roles);
};

//solo para que se cree con postman los roles 
rolCtrl.createRol = async(req, res) => {
    const rol = new Rol(req.body);
    await rol.save();
    res.json({ status: 'rol guardado' });
};

rolCtrl.getRol = async(req, res, next) => {
    const { id } = req.params;
    const rol = await Rol.findById(id);
    res.json(rol);
};

rolCtrl.deleteRol = async(req, res) => {
    await Rol.findByIdAndRemove(req.params.id);
    res.json({ status: 'rol eliminado' });
}

module.exports = rolCtrl;