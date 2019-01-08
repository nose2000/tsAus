const mongoose = require('mongoose');
const { Schema } = mongoose;

let ModProSchema = new Schema({
    Fecha_Inicio_MP: {
        type: Date,
        required: true
    },
    Fecha_Fin_MP: {
        type: Date,
        required: true
    },
    Nombre_Modalidad: {
        type: String,
        required: true
    },
    id_Modalidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Modalidad', required: true },
    proceso: { type: mongoose.Schema.Types.ObjectId, ref: 'Proceso', required: true },
    detalleModPro: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DetalleModPro' }]
})


module.exports = mongoose.model('ModPro', ModProSchema);