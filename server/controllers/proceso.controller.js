const Proceso = require('../models/proceso');

const procesoCtrl = {};

procesoCtrl.getProcesos = async (req, res, next) => {
    const procesos = await Proceso.find();
    res.json(procesos);
};

procesoCtrl.createProceso = async (req,res) =>{
    const proceso = new Proceso({
        Nombre_Proceso : req.body.Nombre_Proceso,
        Activo_Proceso : req.body.Activo_Proceso = true
    });
    await proceso.save();
    res.json({status: 'proceso guardado'});
};

procesoCtrl.getProceso = async (req, res, next) => {
    const { id } = req.params;
    const proceso = await Proceso.findById(id);
    res.json(proceso);
};

//mostar los procesos que estan activos 
procesoCtrl.getProcesosAct = async (req, res, next) => {
    const procesos = await Proceso.find({Activo_Proceso: true});
    res.json(procesos);
};

procesoCtrl.editProceso = async (req,res) =>{
    const { id } = req.params;
    const proceso = {
        Nombre_Proceso : req.body.Nombre_Proceso,
        Activo_Proceso : req.body.Activo_Proceso
    };
   await Proceso.findByIdAndUpdate(id, {$set: proceso}, {new: true});
    res.json({status: 'proceso actualizado'});
};

procesoCtrl.deleteProceso = async (req, res, next) => {
    await Proceso.findByIdAndRemove(req.params.id);
    res.json({status: 'proceso eliminado'});
};

module.exports = procesoCtrl;