const express = require('express');
const router = express.Router();

const personaCtrl = require('../controllers/persona.controller');


router.get('/', personaCtrl.getPersonas);
router.get('/:id', personaCtrl.getPersona);
router.get('/', personaCtrl.getPersonasActi);

router.get('/lista/:id', personaCtrl.getPersonaUsuarioRol);
router.put('/:id', personaCtrl.editPersona);
router.delete('/:id', personaCtrl.deletePersona);


router.post('/', personaCtrl.Arreglo);


module.exports = router;