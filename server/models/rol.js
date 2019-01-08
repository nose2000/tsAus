const mongoose = require('mongoose');
const { Schema } = mongoose;

let RolSchema = new Schema({
    Nombre_rol: {
        type: String,
        required: true
    }
    //Perrol: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PerRol', required: true }]
})


module.exports = mongoose.model('Rol', RolSchema);