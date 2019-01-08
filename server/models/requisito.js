const mongoose = require('mongoose');
const { Schema } = mongoose;

let RequisitosSchema = new Schema ({
    Nombre_Requisito:{
        type:String,
        required: true
    },
    Activo_Requisito :{
        type:Boolean,
        required: true
    }
});

module.exports = mongoose.model('Requisitos', RequisitosSchema);