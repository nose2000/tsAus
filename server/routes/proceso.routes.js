const express = require('express');
const router = express.Router();

const eprocesoCtrl = require('../controllers/proceso.controller');


router.get('/',eprocesoCtrl.getProcesos ) ;
router.get('/activos', eprocesoCtrl.getProcesosAct);
router.post('/', eprocesoCtrl.createProceso);
router.get('/:id', eprocesoCtrl.getProceso);
router.put('/:id', eprocesoCtrl.editProceso);
router.delete('/:id', eprocesoCtrl.deleteProceso);

module.exports = router;