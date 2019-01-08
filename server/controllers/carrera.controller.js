const Carrera = require('../models/carrera');

const carreraCtrl = {};

carreraCtrl.getCarreras = async (req, res, next) => {
    const carreras = await Carrera.find();
    res.json(carreras);
};

carreraCtrl.createCarrera = async (req,res) =>{
    const carrera = new Carrera({
        Nombre_Carrera: req.body.Nombre_Carrera,
        Activo_Carrera : req.body.Activo_Carrera = true
    });
    await carrera.save();
    res.json({status: 'carrera guardada'});
};

carreraCtrl.getCarrera = async (req, res, next) => {
    const { id } = req.params;
    const carrera = await Carrera.findById(id);
    res.json(carrera);
};

//mostar los Carrera que estan activos 
carreraCtrl.getCarreraAct = async (req, res, next) => {
    const carreras = await Carrera.find({Activo_Carrera: true});
    res.json(carreras);
};

carreraCtrl.editCarrra = async (req,res) =>{
    const { id } = req.params;
    const carrera = {
        Nombre_Carrera: req.body.Nombre_Carrera,
        Activo_Carrera : req.body.Activo_Carrera
    };
   await Carrera.findByIdAndUpdate(id, {$set: carrera}, {new: true});
    res.json({status: 'carrera actualizada'});
};

carreraCtrl.deleteCarrera = async (req, res, next) => {
    await Carrera.findByIdAndRemove(req.params.id);
    res.json({status: 'carrera eliminada '});
};

module.exports = carreraCtrl;