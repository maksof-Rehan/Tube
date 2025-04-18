const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Accounts API',
      version: '1.0.0',
      description: 'API for managing user accounts'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsDoc(options);

module.exports = specs;