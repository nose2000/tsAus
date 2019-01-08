const mongoose = require('mongoose');
const { Schema } = mongoose;

let DetalleModProSchema = new Schema({
    Nombre_Carrera: Array,
    id_Carrera: Array,
    modPro: { type: mongoose.Schema.Types.ObjectId, ref: 'ModPro' }
})


module.exports = mongoose.model('DetalleModPro', DetalleModProSchema);