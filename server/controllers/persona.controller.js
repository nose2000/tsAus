const Persona = require('../models/persona');
const Usuario = require('../models/usuario');
const PersonaRol = require('../models/perRol');
const Rol = require('../models/rol');

const personaCtrl = {};

personaCtrl.getPersonas = async(req, res, next) => {
    const personas = await Persona.find();
    res.json(personas);
};


personaCtrl.getPersona = async(req, res, next) => {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    res.json(persona);
};

//mostar los Personas que estan activos 
personaCtrl.getPersonasActi = async(req, res, next) => {
    const personas = await Persona.find({Activo_Persona: true});
    res.json(personas);
};

personaCtrl.editPersona = async(req, res) => {
    const { id } = req.params;
    const persona = {
        DNI_Persona: req.body.DNI_Persona,
        Nombre_Persona: req.body.Nombre_Persona,
        Apellido_Paterno_Persona: req.body.Apellido_Paterno_Persona,
        Apellido_Materno_Persona: req.body.Apellido_Materno_Persona,
        Telefono_Persona: req.body.Telefono_Persona,
        Activo_Persona : req.body.Activo_Persona
    };
    await Persona.findByIdAndUpdate(id, { $set: persona }, { new: true });
    res.json({ status: 'persona actualizada' });
};


personaCtrl.deletePersona = async(req, res, next) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({ status: 'persona eliminada' });
};



//creando una nueva persona como fazt 
/*personaCtrl.createPersona = async(req, res) => {
    const persona = new Persona({
        DNI_Persona: req.body.DNI_Persona,
        Nombre_Persona: req.body.Nombre_Persona,
        Apellido_Paterno_Persona: req.body.Apellido_Paterno_Persona,
        Apellido_Materno_Persona: req.body.Apellido_Materno_Persona,
        Telefono_Persona: req.body.Telefono_Persona
    });
    await persona.save();
    res.json({ status: 'persona guardada' });
};*/



/*************************************************************************************************** */
/// USO DE PROMESAS PARA GUARDAR EL ARREGLO Y HACER EL ENCADENAMIENTO

personaCtrl.Arreglo = async(req, res) => {
    let arregloInicial = {
        DNI_PersonaA: req.body.DNI_PersonaF,
        Nombre_PersonaA: req.body.Nombre_PersonaF,
        Apellido_Paterno_PersonaA: req.body.Apellido_Paterno_PersonaF,
        Apellido_Materno_PersonaA: req.body.Apellido_Materno_PersonaF,
        Telefono_PersonaA: req.body.Telefono_PersonaF,
        Usuario_usuarioA: req.body.Usuario_usuarioF,
        Contrasena_usuarioA: req.body.Contrasena_usuarioF,
        Fecha_Inicio_URA: req.body.Fecha_Inicio_URF,
        Fecha_Fin_URA: req.body.Fecha_Fin_URF,
        Nombre_rolA: req.body.Nombre_rolF,

        getArreglo() {
            return `
                ${this.DNI_PersonaA} 
                ${this.Nombre_PersonaA}
                ${this.Apellido_Paterno_PersonaA}
                ${this.Apellido_Materno_PersonaA}
                ${this.Telefono_PersonaA}
                ${this.Usuario_usuarioA}
                ${this.Contrasena_usuarioA}
                ${this.Fecha_Inicio_URA}
                ${this.Fecha_Fin_URA}
                ${this.Nombre_rolA}`
        }
    };
    console.log(arregloInicial.getArreglo());
    await AsignacionArregloPersona(
        arregloInicial.DNI_PersonaA,
        arregloInicial.Nombre_PersonaA,
        arregloInicial.Apellido_Paterno_PersonaA,
        arregloInicial.Apellido_Materno_PersonaA,
        arregloInicial.Telefono_PersonaA).then(function(id) {
        PersonaUsuario(
            arregloInicial.Usuario_usuarioA,
            arregloInicial.Contrasena_usuarioA,
            id).then(function(id) {
            asigPersonaRol(arregloInicial.Fecha_Inicio_URA,
                arregloInicial.Fecha_Fin_URA,
                arregloInicial.Nombre_rolA,
                id);
        })
    });

    res.json({ status: 'proceso terminado' });

};

let AsignacionArregloPersona = async(DNI_PersonaA, Nombre_PersonaA, Apellido_Paterno_PersonaA, Apellido_Materno_PersonaA, Telefono_PersonaA, req) => {

    let persona = new Persona({
        DNI_Persona: DNI_PersonaA,
        Nombre_Persona: Nombre_PersonaA,
        Apellido_Paterno_Persona: Apellido_Paterno_PersonaA,
        Apellido_Materno_Persona: Apellido_Materno_PersonaA,
        Telefono_Persona: Telefono_PersonaA,
        Activo_Persona :  true
    });
    var a;
    await persona.save(function() { a = persona._id; });
    return persona._id;
}

let PersonaUsuario = async(Contrasena_usuarioA, Usuario_usuarioA, a) => {
    let newUsuario = new Usuario({
        Contrasena_usuario: Contrasena_usuarioA,
        Usuario_usuario: Usuario_usuarioA
    });
    const persona = await Persona.findById(a);
    newUsuario.persona = persona;
    await newUsuario.save();
    persona.usuario.push(newUsuario);
    await persona.save();
    return persona._id;
};

let asigPersonaRol = async(Fecha_Inicio_URA, Fecha_Fin_URA, Nombre_rolA, a) => {
    console.log(`inicio ${Fecha_Inicio_URA} fin ${Fecha_Fin_URA}  rol ${Nombre_rolA}   A=${a}`);
    let newpersonaRol = new PersonaRol({
        Fecha_Inicio_UR: Fecha_Inicio_URA,
        Fecha_Fin_UR: Fecha_Fin_URA,
        Nombre_rol: Nombre_rolA
    });
    const persona = await Persona.findById(a);
    newpersonaRol.persona = persona;
    await newpersonaRol.save();
    persona.perUsu.push(newpersonaRol);
    await persona.save();

};


/*************************************************************************************************** */
/// mostarndo todos los datos con populate 
personaCtrl.getPersonaUsuarioRol = async(req, res, next) => {
    const { id } = req.params;
    const persona = await Persona.findById(id).populate('usuario').populate('perUsu');
    res.status(200).json(persona);
};



module.exports = personaCtrl;