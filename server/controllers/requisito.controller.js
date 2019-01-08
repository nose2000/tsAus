const Requisito = require('../models/requisito');

const requisitoCtrl = {};

//mostrar todos los requisitos
requisitoCtrl.getRequisitos = async (req, res, next) => {
    const requisitos = await Requisito.find();
    res.json(requisitos);
};


//crear un nuevo requisito
requisitoCtrl.createRequisito = async (req,res) =>{
    const requisito = new Requisito({
        Nombre_Requisito: req.body.Nombre_Requisito,
        Activo_Requisito  : req.body.Activo_Requisito = true
    });
    await requisito.save();
    res.json({status: 'requisito guardado'});
};

//busqueda de un requisito en especifico
requisitoCtrl.getRequisito = async (req, res, next) => {
    const { id } = req.params;
    const requisito = await Requisito.findById(id);
    res.json(requisito);
};

//mostar los requisitos que estan activos 
requisitoCtrl.getRequisitosAct = async (req, res, next) => {
    const requisitos = await Requisito.find({Activo_Requisito: true});
    res.json(requisitos);
};

//editar un requisito
requisitoCtrl.editRequisito = async (req,res) =>{
    const { id } = req.params;
    const requisito = {
        Nombre_Requisito: req.body.Nombre_Requisito,
        Activo_Requisito  : req.body.Activo_Requisito
    };
   await Requisito.findByIdAndUpdate(id, {$set: requisito}, {new: true});
    res.json({status: 'requisito actualizado'});
};




/**esto para pasar a alverto devo de eliminarlo */
requisitoCtrl.deleteRequisito = async (req, res, next) => {
    await Requisito.findByIdAndRemove(req.params.id);
    res.json({status: 'requisito eliminado'});
};
/**   */

module.exports = requisitoCtrl;