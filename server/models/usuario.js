const mongoose = require('mongoose');
const { Schema } = mongoose;

let UsuarioSchema = new Schema({
    Contrasena_usuario:{
        type: String,
        required: true 
    },
    Usuario_usuario:{
        type:String,
        required:true 
    },
    persona:{type: mongoose.Schema.Types.ObjectId, ref: 'Persona'}
}) 

module.exports = mongoose.model('Usuario', UsuarioSchema);
