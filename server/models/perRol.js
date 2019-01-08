const mongoose = require('mongoose');
const { Schema } = mongoose;

let PerRolSchema = new Schema({
    Fecha_Inicio_UR: {
        type: Date,
        required: true
    },
    Fecha_Fin_UR: {
        type: Date,
        required: true
    },
    Nombre_rol: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true },
    persona: { type: mongoose.Schema.Types.ObjectId, ref: 'Persona', required: true }
})

module.exports = mongoose.model('PerRol', PerRolSchema);