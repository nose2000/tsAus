const express = require('express');
const router = express.Router();

const emploCtrl = require('../controllers/employees.controller');


router.get('/',emploCtrl.getEmployees ) ;
router.post('/', emploCtrl.createEmployee);
router.get('/:id', emploCtrl.getEmployee);
router.put('/:id', emploCtrl.editEmployee);
router.delete('/:id', emploCtrl.deleteEmployee);

module.exports = router;