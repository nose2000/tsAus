const mongoose = require('mongoose');
const { Schema } = mongoose;

let ModalidadSchema = new Schema({
    Nombre_Modalidad :{
        type:String,
        required: true
    },
    Activo_Modalidad :{
        type:Boolean,
        required: true
    }
});

module.exports = mongoose.model('Modalidad', ModalidadSchema); 