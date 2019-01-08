const express = require('express');
const router = express.Router();

const requisitoCtrl = require('../controllers/requisito.controller');


router.get('/',requisitoCtrl.getRequisitos);
router.get('/activos',requisitoCtrl.getRequisitosAct);
router.post('/', requisitoCtrl.createRequisito);
router.get('/:id', requisitoCtrl.getRequisito);
router.put('/:id', requisitoCtrl.editRequisito);

//elimiar esto para pasar a alberto
router.delete('/:id', requisitoCtrl.deleteRequisito);

module.exports = router;