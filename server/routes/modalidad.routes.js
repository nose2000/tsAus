const express = require('express');
const router = express.Router();

const modalidadCtrl = require('../controllers/modalidad.controller');


router.get('/',modalidadCtrl.getModalidades) ;
router.get('/activos',modalidadCtrl.getModalidadesAct);
router.post('/', modalidadCtrl.createModalidad);
router.get('/:id', modalidadCtrl.getModalidad);
router.put('/:id', modalidadCtrl.editModalidad);
router.delete('/:id', modalidadCtrl.deleteModalidad);

module.exports = router; 