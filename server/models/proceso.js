const mongoose = require('mongoose');
const { Schema } = mongoose;

let ProcesoSchema = new Schema({
    Nombre_Proceso :{
        type:String,
        required: true
    },
    Activo_Proceso :{
        type:Boolean,
        required: true
    }
});

//expotando el modelo (nombre que se le da al modelo , schema)
module.exports = mongoose.model('Proceso', ProcesoSchema);

