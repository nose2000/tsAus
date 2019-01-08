const mongoose = require('mongoose');
const { Schema } = mongoose;

let ApoderadoSchema = new Schema({
    Tipo_Docu_Identidad_Apoderado: {
        type: String,
        //required: true
    },
    Num_Docu_Identidad_Apoderado: {
        type: Number,
        //required: true
    },
    Nombre_Apoderado: {
        type: String,
        //required: true
    },
    Apellido_Paterno_Apoderado: {
        type: String,
        //required: true
    },
    Apellido_Materno_Apoderado: {
        type: String,
        //required: true
    },
    Fecha_Naci_Apoderado: {
        type: Date,
        //required: true
    },
    Edad_Apoderado: {
        type: Number,
        //required: true
    },
    Sexo_Apoderado: {
        type: String,
        //required: true
    },
    Direccion_Apoderado: {
        type: String,
        //required: true
    },
    Telefono_Apoderado: {
        type: Number,
        //required: true
    },
    postulante: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Postulante' }]
});

module.exports = mongoose.model('Apoderado', ApoderadoSchema);