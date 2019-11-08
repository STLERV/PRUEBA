const express = require('express');
const router = express.Router(); 

const UsuCtrl = require('../controllers/escuela.controller');

 router.get('/', UsuCtrl.getSubjects);
 router.get('/todos', UsuCtrl.getStudents);
 router.get('/:name', UsuCtrl.getSubject);
 router.post('/subject', UsuCtrl.postSubject);
 router.post('/student', UsuCtrl.postStudent);
 router.put('/subject/:name', UsuCtrl.AñadirStudent);
 router.get('/student/:name', UsuCtrl.getStudent);


module.exports = router;
