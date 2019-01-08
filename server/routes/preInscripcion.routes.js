const express = require('express');
const router = express.Router();

const PreInscripcionCtrl = require('../controllers/preInscripcion.controller');

//**delete de collections temporal  */
router.delete('/:id/infoAca', PreInscripcionCtrl.deleteInfoAca);
router.delete('/:id/apoderado', PreInscripcionCtrl.deleteApoderado);
router.delete('/:id/postulante', PreInscripcionCtrl.deletePostulante);
router.delete('/:id/preInscripcion', PreInscripcionCtrl.deletePreInscripcion);

//para trasladar
router.get('/infoAca', PreInscripcionCtrl.getInfoAcademicas);
router.get('/apoderado', PreInscripcionCtrl.getApoderados);
router.get('/postulante', PreInscripcionCtrl.getPostulantes);
router.get('/preInscripcion', PreInscripcionCtrl.getPreInscripciones);


router.post('/', PreInscripcionCtrl.Arreglo);


module.exports = router;