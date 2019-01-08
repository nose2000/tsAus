const mongoose = require('mongoose');
const { Schema } = mongoose;

let PostulanteSchema = new Schema({
    Pais_Origen_Postulante: {
        type: String,
        //required: true
    },
    Tipo_Docu_Identidad_Postulante: {
        type: String,
        //required: true
    },
    Num_Docu_Identidad_Postulante: {
        type: Number,
        //required: true
    },
    Nombre_Postulante: {
        type: String,
        //required: true
    },
    Apellido_Paterno_Postulante: {
        type: String,
        //required: true
    },
    Apellido_Materno_Postulante: {
        type: String,
        //required: true
    },
    Fecha_Naci_Postulante: {
        type: Date,
        //required: true
    },
    Edad_Postulante: {
        type: Number,
        //required: true
    },
    Sexo_Postulante: {
        type: String,
        //required: true
    },
    apoderado: { type: mongoose.Schema.Types.ObjectId, ref: 'Apoderado' },
    infoAca: [{ type: mongoose.Schema.Types.ObjectId, ref: 'InfoAcademica' }],
    preInscripcion: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PreInscripcion' }]

});


module.exports = mongoose.model('Postulante', PostulanteSchema);