const express = require('express');
const routes = express.Router();
const Usuario = require('./controllers/user.controller');
const Produto = require('./controllers/produtos.controller');

//Rotas Usuario
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.post('/api/usuarios', Usuario.create);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios.update/:_id', Usuario.update);

//Rotas Produtos
routes.get('/api/produtos', Produto.index);
routes.get('/api/produtos.details/:_id', Produto.details);
routes.post('/api/produtos', Produto.create);
routes.delete('/api/produtos/:_id', Produto.delete);
routes.put('/api/produtos.update/:_id', Produto.update);

module.exports = routes;