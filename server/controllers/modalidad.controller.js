const Modalidad = require('../models/modalidad');

const modalidadCtrl = {};

modalidadCtrl.getModalidades = async (req, res, next) => {
    const modalidades = await Modalidad.find();
    res.json(modalidades);
};

modalidadCtrl.createModalidad = async (req,res) =>{
    const modalidad = new Modalidad({
        Nombre_Modalidad: req.body.Nombre_Modalidad,
        Activo_Modalidad : req.body.Activo_Modalidad = true
    });
    await modalidad.save(); 
    res.json({status: 'modalidad guardada'});
};

modalidadCtrl.getModalidad = async (req, res, next) => {
    const { id } = req.params;
    const modalidad = await Modalidad.findById(id);
    res.json(modalidad);
};

//mostar los modalidades que estan activos 
modalidadCtrl.getModalidadesAct = async (req, res, next) => {
    const modalidades = await Modalidad.find({Activo_Modalidad: true});
    res.json(modalidades);
};

modalidadCtrl.editModalidad = async (req,res) =>{
    const { id } = req.params;
    const modalidad = {
        Nombre_Modalidad: req.body.Nombre_Modalidad,
        Activo_Modalidad : req.body.Activo_Modalidad
    };
   await Modalidad.findByIdAndUpdate(id, {$set: modalidad}, {new: true});
    res.json({status: 'modalidad actualizada'});
};

modalidadCtrl.deleteModalidad = async (req, res, next) => {
    await Modalidad.findByIdAndRemove(req.params.id);
    res.json({status: 'modalidad eliminada'});
};

module.exports = modalidadCtrl;