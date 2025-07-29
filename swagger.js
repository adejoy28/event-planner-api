const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Events Planner API',
        description: 'Events Planner API'
    },
    host: 'event-planner-api-ob41.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);    