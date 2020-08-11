const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    title: 'VUTTR (Very Useful Tools to Remeber)',
    description: 'This is a API from VUTTR. The application is a simple repository for managing tools with their respective names, links, descriptions and tags.'
  },
  host: "localhost:3000",
  schemes: ['http']
}

const outputFile = './src/swagger_output.json'
const endpointsFiles = ['./src/routes.js']

swaggerAutogen(outputFile, endpointsFiles, doc)