const routes = require('express').Router();

// Import Swagger documentation
routes.use('/', require('./swagger'));

// Define routes for users and events
routes.use('/users', require('./users.js'));

// Define routes for events
routes.use('/events', require('./events.js'));


module.exports = routes;