const mongoose = require('mongoose');
const { Schema } = mongoose;

let infoAcademicaSchema = new Schema({
    Tipo_IE: {
        type: String,
        //required: true
    },
    Nombre_IE: {
        type: String,
        //required: true
    },
    Año_Egreso: {
        type: Date,
        //required: true
    },
    postulante: { type: mongoose.Schema.Types.ObjectId, ref: 'Postulante' }
});


module.exports = mongoose.model('InfoAcademica', infoAcademicaSchema);