const express = require('express');
const router = express.Router();

const usuRolCtrl = require('../controllers/perRol.controller');


router.get('/', usuRolCtrl.getUsuRols);
router.post('/', usuRolCtrl.createUsuRol);
router.get('/:id', usuRolCtrl.getUsuRol);
router.put('/:id', usuRolCtrl.editUsuRol);
router.delete('/:id', usuRolCtrl.deleteEmployee);

module.exports = router;