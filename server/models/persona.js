const mongoose = require('mongoose');
const { Schema } = mongoose;

let PersonaSchema = new Schema({
    DNI_Persona: {
        type: Number,
        required: true
    },
    Nombre_Persona: {
        type: String,
        required: true
    },
    Apellido_Paterno_Persona: {
        type: String,
        required: true
    },
    Apellido_Materno_Persona: {
        type: String,
        required: true
    },
    Telefono_Persona: {
        type: Number,
        required: true
    },
    Activo_Persona :{
        type:Boolean,
        required: true
    },
    usuario: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
    perUsu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PerRol' }]
})

module.exports = mongoose.model('Persona', PersonaSchema);