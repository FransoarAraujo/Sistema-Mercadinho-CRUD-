const express = require('express');
const controller = require('../controllers/login');


const router = express.Router();

  router.get('/', controller.login);
  router.get('/home', controller.home);
  router.get('/newUsuario',controller.cadastrar);

  router.post('/login', controller.login_post);
  router.post('/newUserSave', controller.newUsuarioSave);


     
  module.exports = router;


  
