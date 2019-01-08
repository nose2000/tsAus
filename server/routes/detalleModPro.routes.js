const express = require('express');
const router = express.Router();

const detalleModProCtrl = require('../controllers/detalleModPro.controller');

router.delete('/:id/modPro', detalleModProCtrl.deleteModPro);
router.delete('/:id/', detalleModProCtrl.deleteDetalleModPro);

router.get('/modPro', detalleModProCtrl.getModPros);
router.get('/', detalleModProCtrl.getDetalleModPros);

router.post('/', detalleModProCtrl.Arreglo);

 
module.exports = router;