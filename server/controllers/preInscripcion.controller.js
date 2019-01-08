const Apoderado = require('../models/apoderado');
const InfoAca = require('../models/infoAca');
const Postulante = require('../models/postulante');
const PreInscripcion = require('../models/preInscripcion');

const PreInscripcionCtrl = {};

//**delete de collections temporal  */

PreInscripcionCtrl.deleteInfoAca = async(req, res) => {
    await InfoAca.findByIdAndRemove(req.params.id);
    res.json({ status: 'informacion academica eliminada' });
};

PreInscripcionCtrl.deleteApoderado = async(req, res) => {
    await Apoderado.findByIdAndRemove(req.params.id);
    res.json({ status: 'apoderado eliminado' });
};

PreInscripcionCtrl.deletePostulante = async(req, res) => {
    await Postulante.findByIdAndRemove(req.params.id);
    res.json({ status: 'postulante eliminado' });
};

PreInscripcionCtrl.deletePreInscripcion = async(req, res) => {
    await PreInscripcion.findByIdAndRemove(req.params.id);
    res.json({ status: 'pre-inscripcion eliminado' });
};

/**funciones get  */
PreInscripcionCtrl.getInfoAcademicas = async(req, res, next) => {
    const infoAca = await InfoAca.find();
    res.json(infoAca);
}

PreInscripcionCtrl.getApoderados = async(req, res, next) => {
    const apoderados = await Apoderado.find();
    res.json(apoderados);
}

PreInscripcionCtrl.getPostulantes = async(req, res, next) => {
    const postulantes = await Postulante.find();
    res.json(postulantes);
};

PreInscripcionCtrl.getPreInscripciones = async(req, res, next) => {
    const preInscripciones = await PreInscripcion.find();
    res.json(preInscripciones);
}

/**encadenamiento de promesas */
PreInscripcionCtrl.Arreglo = async(req, res) => {
    let arregloInicial = {
        //collection pre-inscripcion
        DepartamentoA: req.body.DepartamentoF,
        DistritoA: req.body.DistritoF,
        ProvinciaA: req.body.ProvinciaF,
        DirrecionA: req.body.DirrecionF,
        EstadoCivilA: req.body.EstadoCivilF,
        EmailA: req.body.EmailF,
        TelefonoA: req.body.TelefonoF,
        //collection postulante
        Pais_Origen_PostulanteA: req.body.Pais_Origen_PostulanteF,
        Tipo_Docu_Identidad_PostulanteA: req.body.Tipo_Docu_Identidad_PostulanteF,
        Num_Docu_Identidad_PostulanteA: req.body.Num_Docu_Identidad_PostulanteF,
        Nombre_PostulanteA: req.body.Nombre_PostulanteF,
        Apellido_Paterno_PostulanteA: req.body.Apellido_Paterno_PostulanteF,
        Apellido_Materno_PostulanteA: req.body.Apellido_Materno_PostulanteF,
        Fecha_Naci_PostulanteA: req.body.Fecha_Naci_PostulanteF,
        Edad_PostulanteA: req.body.Edad_PostulanteF,
        Sexo_PostulanteA: req.body.Sexo_PostulanteF,
        //collection apoderado
        Tipo_Docu_Identidad_ApoderadoA: req.body.Tipo_Docu_Identidad_ApoderadoF,
        Num_Docu_Identidad_ApoderadoA: req.body.Num_Docu_Identidad_ApoderadoF,
        Nombre_ApoderadoA: req.body.Nombre_ApoderadoF,
        Apellido_Paterno_ApoderadoA: req.body.Apellido_Paterno_ApoderadoF,
        Apellido_Materno_ApoderadoA: req.body.Apellido_Materno_ApoderadoF,
        Fecha_Naci_ApoderadoA: req.body.Fecha_Naci_ApoderadoF,
        Edad_ApoderadoA: req.body.Edad_ApoderadoF,
        Sexo_ApoderadoA: req.body.Sexo_ApoderadoF,
        Direccion_ApoderadoA: req.body.Direccion_ApoderadoF,
        Telefono_ApoderadoA: req.body.Telefono_ApoderadoF,
        //collection informacion-academica
        Tipo_IEA: req.body.Tipo_IEF,
        Nombre_IEA: req.body.Nombre_IEF,
        Año_EgresoA: req.body.Año_EgresoF,

        getArreglo() {
            return `
                Departamento ${this.DepartamentoA} 
                Distrito    ${this.DistritoA}
                Provincia ${this.ProvinciaA}
                Dirrecion ${this.DirrecionA}
                EstadoCivil ${this.EstadoCivilA}
                Email ${this.EmailA}
                Telefono ${this.TelefonoA}

                Pais_Origen_Postulante ${this.Pais_Origen_PostulanteA}
                Tipo_Docu_Identidad_Postulante ${this.Tipo_Docu_Identidad_PostulanteA}
                Num_Docu_Identidad_Postulante ${this.Num_Docu_Identidad_PostulanteA}
                Nombre_Postulante ${this.Nombre_PostulanteA} 
                Apellido_Paterno_Postulante ${this.Apellido_Paterno_PostulanteA} 
                Apellido_Materno_Postulante ${this.Apellido_Materno_PostulanteA} 
                Fecha_Naci_Postulante ${this.Fecha_Naci_PostulanteA} 
                Edad_Postulante ${this.Edad_PostulanteA} 
                Sexo_Postulante ${this.Sexo_PostulanteA}

                Tipo_Docu_Identidad_Apoderado ${this.Tipo_Docu_Identidad_ApoderadoA} 
                Num_Docu_Identidad_Apoderado ${this.Num_Docu_Identidad_ApoderadoA} 
                Nombre_Apoderado ${this.Nombre_ApoderadoA} 
                Apellido_Paterno_Apoderado ${this.Apellido_Paterno_ApoderadoA} 
                Apellido_Materno_Apoderado ${this.Apellido_Materno_ApoderadoA} 
                Fecha_Naci_Postulante ${this.Fecha_Naci_PostulanteA} 
                Edad_Apoderado ${this.Edad_ApoderadoA} 
                Sexo_Apoderado ${this.Sexo_ApoderadoA} 
                Direccion_Apoderado ${this.Direccion_ApoderadoA} 
                Telefono_Apoderado ${this.Telefono_ApoderadoA} 

                Tipo_IE ${this.Tipo_IEA} 
                Nombre_IE ${this.Nombre_IEA} 
                Año_Egreso ${this.Año_EgresoA}`
        }
    };
    console.log(arregloInicial.getArreglo());

    await AsignacionPostulante(
        arregloInicial.Pais_Origen_PostulanteA,
        arregloInicial.Tipo_Docu_Identidad_PostulanteA,
        arregloInicial.Num_Docu_Identidad_PostulanteA,
        arregloInicial.Nombre_PostulanteA,
        arregloInicial.Apellido_Paterno_PostulanteA,
        arregloInicial.Apellido_Materno_PostulanteA,
        arregloInicial.Fecha_Naci_PostulanteA,
        arregloInicial.Edad_PostulanteA,
        arregloInicial.Sexo_PostulanteA
    ).then(function(id) {
        AsignacionAposderado(
            arregloInicial.Tipo_Docu_Identidad_ApoderadoA,
            arregloInicial.Num_Docu_Identidad_ApoderadoA,
            arregloInicial.Nombre_ApoderadoA,
            arregloInicial.Apellido_Paterno_ApoderadoA,
            arregloInicial.Apellido_Materno_ApoderadoA,
            arregloInicial.Fecha_Naci_ApoderadoA,
            arregloInicial.Edad_ApoderadoA,
            arregloInicial.Sexo_ApoderadoA,
            arregloInicial.Direccion_ApoderadoA,
            arregloInicial.Telefono_ApoderadoA,
            id).then(function(id) {
            asignacionInfoAca(
                arregloInicial.Tipo_IEA,
                arregloInicial.Nombre_IEA,
                arregloInicial.Año_EgresoA,
                id).then(function(id) {
                asigPreInscripcion(
                    arregloInicial.DepartamentoA,
                    arregloInicial.DistritoA,
                    arregloInicial.ProvinciaA,
                    arregloInicial.DirrecionA,
                    arregloInicial.EstadoCivilA,
                    arregloInicial.EmailA,
                    arregloInicial.TelefonoA,
                    id);
            })
        })
    });

    res.json({ status: 'proceso terminado' });
};


let AsignacionPostulante = async(
    Pais_Origen_PostulanteA,
    Tipo_Docu_Identidad_PostulanteA,
    Num_Docu_Identidad_PostulanteA,
    Nombre_PostulanteA,
    Apellido_Paterno_PostulanteA,
    Apellido_Materno_PostulanteA,
    Fecha_Naci_PostulanteA,
    Edad_PostulanteA,
    Sexo_PostulanteA) => {
    let postulante = new Postulante({
        Pais_Origen_Postulante: Pais_Origen_PostulanteA,
        Tipo_Docu_Identidad_Postulante: Tipo_Docu_Identidad_PostulanteA,
        Num_Docu_Identidad_Postulante: Num_Docu_Identidad_PostulanteA,
        Nombre_Postulante: Nombre_PostulanteA,
        Apellido_Paterno_Postulante: Apellido_Paterno_PostulanteA,
        Apellido_Materno_Postulante: Apellido_Materno_PostulanteA,
        Fecha_Naci_Postulante: Fecha_Naci_PostulanteA,
        Edad_Postulante: Edad_PostulanteA,
        Sexo_Postulante: Sexo_PostulanteA
    });

    await postulante.save();
    //console.log(`este es el id del postulante ${postulante._id}`);
    return postulante._id;
};

let AsignacionAposderado = async(
    Tipo_Docu_Identidad_ApoderadoA,
    Num_Docu_Identidad_ApoderadoA,
    Nombre_ApoderadoA,
    Apellido_Paterno_ApoderadoA,
    Apellido_Materno_ApoderadoA,
    Fecha_Naci_ApoderadoA,
    Edad_ApoderadoA,
    Sexo_ApoderadoA,
    Direccion_ApoderadoA,
    Telefono_ApoderadoA,
    a) => {
    //console.log(`${a}`);
    let newApoderado = new Apoderado({
        Tipo_Docu_Identidad_Apoderado: Tipo_Docu_Identidad_ApoderadoA,
        Num_Docu_Identidad_Apoderado: Num_Docu_Identidad_ApoderadoA,
        Nombre_Apoderado: Nombre_ApoderadoA,
        Apellido_Paterno_Apoderado: Apellido_Paterno_ApoderadoA,
        Apellido_Materno_Apoderado: Apellido_Materno_ApoderadoA,
        Fecha_Naci_Apoderado: Fecha_Naci_ApoderadoA,
        Edad_Apoderado: Edad_ApoderadoA,
        Sexo_Apoderado: Sexo_ApoderadoA,
        Direccion_Apoderado: Direccion_ApoderadoA,
        Telefono_Apoderado: Telefono_ApoderadoA
    });
    const postulante = await Postulante.findById(a);
    postulante.apoderado = newApoderado;
    await postulante.save();
    newApoderado.postulante.push(postulante);
    await newApoderado.save();

    return postulante._id;
};

let asignacionInfoAca = async(Tipo_IEA, Nombre_IEA, Año_EgresoA, a) => {
    //console.log(`ID --> ${a}`);
    let newInfoAca = new InfoAca({
        Tipo_IE: Tipo_IEA,
        Nombre_IE: Nombre_IEA,
        Año_Egreso: Año_EgresoA
    });
    const postulante = await Postulante.findById(a);
    newInfoAca.postulante = postulante;
    await newInfoAca.save();
    postulante.infoAca.push(newInfoAca);
    await postulante.save();
    return postulante._id;
};

let asigPreInscripcion = async(DepartamentoA, DistritoA, ProvinciaA, DirrecionA, EstadoCivilA, EmailA, TelefonoA, a) => {
    let newPreInscripcion = new PreInscripcion({
        Departamento: DepartamentoA,
        Distrito: DistritoA,
        Provincia: ProvinciaA,
        Dirrecion: DirrecionA,
        EstadoCivil: EstadoCivilA,
        Email: EmailA,
        Telefono: TelefonoA
    });
    const postulante = await Postulante.findById(a);
    newPreInscripcion.postulante = postulante;
    await newPreInscripcion.save();
    postulante.preInscripcion.push(newPreInscripcion);
    await postulante.save();
    console.log(newPreInscripcion._id);
};




module.exports = PreInscripcionCtrl;