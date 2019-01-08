const express = require('express');
const router = express.Router();

const rolCtrl = require('../controllers/rol.controller');


router.get('/', rolCtrl.getRoles);
router.post('/', rolCtrl.createRol);
router.get('/:id', rolCtrl.getRol);
router.delete('/:id', rolCtrl.deleteRol);

module.exports = router;