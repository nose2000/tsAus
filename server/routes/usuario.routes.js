const express = require('express');
const router = express.Router();

const usuarioCtrl = require('../controllers/usuario.controller');


router.get('/',usuarioCtrl.getUsuarios) ;
router.post('/', usuarioCtrl.createUsuario);
router.get('/:id', usuarioCtrl.getUsario);
router.put('/:id', usuarioCtrl.editUsuario);
router.delete('/:id', usuarioCtrl.deleteusiario);

module.exports = router;