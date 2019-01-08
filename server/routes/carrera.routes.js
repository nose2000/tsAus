const express = require('express');
const router = express.Router();


const carreraCtrl = require('../controllers/carrera.controller');

router.get('/',carreraCtrl.getCarreras ) ;
router.get('/activos', carreraCtrl.getCarreraAct);
router.post('/', carreraCtrl.createCarrera);
router.get('/:id', carreraCtrl.getCarrera);
router.put('/:id', carreraCtrl.editCarrra);

//elimar esto para pasar a laberto 
router.delete('/:id', carreraCtrl.deleteCarrera);


module.exports = router;