const express = require('express')
const routes = express.Router();
const Usuario = require('./controllers/user.controller')

routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.post('/api/usuarios', Usuario.create);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios.update/:_id', Usuario.update);

module.exports = routes;