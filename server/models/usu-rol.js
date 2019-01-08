const mongoose = require('mongoose');
const { Schema } = mongoose;

let Usu_RolSchema = new Schema ({
    Fecha_Inicio_UR:{
        type:Date,
        required:true 
    }, 
    Fecha_Fin_UR:{
        type:Date, 
        required:true 
    },
    //role:{type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true },
    //usuario:{type: mongoose.Schema.Types.ObjectId, ref:'Usuario', required:true},
})

module.exports = mongoose.model('Usu_Rol', Usu_RolSchema);
