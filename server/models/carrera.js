const mongoose = require('mongoose');
const { Schema } = mongoose;

//coleccion carrera
let CarreraSchema = new Schema ({
    Nombre_Carrera :{
        type:String,
        required:true
    },
    Activo_Carrera:{
        type:Boolean,
        required: true
    }
});

module.exports = mongoose.model('Carrera', CarreraSchema);

