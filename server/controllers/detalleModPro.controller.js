const Proceso = require('../models/proceso');
const Modalidad = require('../models/modalidad');
const Carrera = require('../models/carrera');
const ModPro = require('../models/modPro');
const DetalleModPro = require('../models/detalleModPro');


const detalleModProCtrl = {};

// delete 
detalleModProCtrl.deleteModPro = async(req, res, next) => {
    await ModPro.findByIdAndRemove(req.params.id);
    res.json({ status: 'modalidad Proceso eliminado' });
};

detalleModProCtrl.deleteDetalleModPro = async(req, res, next) => {
    await DetalleModPro.findByIdAndRemove(req.params.id);
    res.json({ status: 'detalle modalidad Proceso eliminado' });
};

//get 
detalleModProCtrl.getModPros = async(req, res, next) => {
    const modPros = await ModPro.find();
    res.json(modPros);
};

detalleModProCtrl.getDetalleModPros = async(req, res, next) => {
    const detalleModPros = await DetalleModPro.find();
    res.json(detalleModPros);
};

detalleModProCtrl.Arreglo = async(req, res) => {
    let arregloInicial = {
        Fecha_Inicio_MPA: req.body.Fecha_Inicio_MPF,
        Fecha_Fin_MPA: req.body.Fecha_Fin_MPF,
        Nombre_ModalidadA: req.body.Nombre_ModalidadF,
        id_ModalidadA: req.body.id_ModalidadF,
        procesoA: req.body.procesoF,
        id_CarreraA: req.body.id_CarreraF,
        getArreglo() {
            return `
                Fecha_Inicio_MP    ${this.Fecha_Inicio_MPA} 
                Fecha_Fin_MP    ${this.Fecha_Fin_MPA}
                Nombre_Modalidad    ${this.Nombre_ModalidadA}
                id_Modalidad    ${this.id_ModalidadA}
                proceso    ${this.procesoA}
                id_Carrera    ${this.id_CarreraA}`
        }
    };
    console.log(arregloInicial.getArreglo());

    await asigModPro(
        arregloInicial.Fecha_Inicio_MPA,
        arregloInicial.Fecha_Fin_MPA,
        arregloInicial.Nombre_ModalidadA,
        arregloInicial.id_ModalidadA,
        arregloInicial.procesoA).then(function(id) {
        asigDetalleModPro(
            arregloInicial.id_CarreraA,
            id);
    });

    res.json({ status: 'proceso terminado' });
};

//creacion de la tabla modalidad proceso
let asigModPro = async(Fecha_Inicio_MPA, Fecha_Fin_MPA, Nombre_ModalidadA, id_ModalidadA, procesoA) => {
    let modPro = new ModPro({
        Fecha_Inicio_MP: Fecha_Inicio_MPA,
        Fecha_Fin_MP: Fecha_Fin_MPA,
        Nombre_Modalidad: Nombre_ModalidadA,
        id_Modalidad: id_ModalidadA,
        proceso: procesoA
    });
    await modPro.save();
    return modPro._id;
};

//creacion de la tabla detalle modalidad proceso 
let asigDetalleModPro = async(id_CarreraA, a) => {
    let newDetalleModPro = new DetalleModPro({
        id_Carrera: id_CarreraA
    });
    const modPro = await ModPro.findById(a);
    newDetalleModPro.modPro = modPro;
    await newDetalleModPro.save();
    modPro.detalleModPro.push(newDetalleModPro);
    await modPro.save();

    for (i = 0; i < id_CarreraA.length; i++) {
        var nombreCarrera = await Carrera.findById(id_CarreraA[i]);
        console.log(`${id_CarreraA[i]} la carrera es ${NombreCarrera}`);
    }

};


module.exports = detalleModProCtrl;