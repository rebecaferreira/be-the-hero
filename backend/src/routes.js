const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* rota/recurso */ 
 routes.get('/ongs', OngController.index);

 routes.post('/ongs', OngController.create);

 routes.post('/incidents', IncidentController.create);

 routes.get('/incidents', IncidentController.index);

 routes.delete('/incidents/:id', IncidentController.delete);

 routes.get('/profile', ProfileController.index);

 routes.post('/sessions', SessionController.create);

 module.exports = routes;