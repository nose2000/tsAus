const mongoose = require('mongoose');
const { Schema } = mongoose;

let PreInscripcionSchema = new Schema({
    Departamento: {
        type: String,
        //required: true
    },
    Distrito: {
        type: String,
        //required: true
    },
    Provincia: {
        type: String,
        //required: true
    },
    Dirrecion: {
        type: String,
        //required: true
    },
    EstadoCivil: {
        type: String,
        //required: true
    },
    Email: {
        type: String,
        //required: true
    },
    Telefono: {
        type: Number,
        //required: true
    },
    postulante: { type: mongoose.Schema.Types.ObjectId, ref: 'Postulante' }
});


module.exports = mongoose.model('PreInscripcion', PreInscripcionSchema);