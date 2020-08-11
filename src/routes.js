const express = require('express');

const ToolController = require('./controllers/ToolsController');

const routes = express.Router();


routes.get('/tools', 
  //#swagger.tags = ['Tool']
  //#swagger.description = 'Endpoint for a list of registered tools'

  /*
    #swagger.parameters['tag'] = {
      in: 'query',
      description: "Find by Tag",
      type: "string"
    }
  */

  //#swagger.responses[404]
  //#swagger.responses[200]

ToolController.index);

routes.post('/tool', 
 /* #swagger.tags = ['Tool']
    #swagger.description = 'Endpoint to add a tool.' 

      #swagger.parameters['newTool'] = {
        in: 'body',
        description: 'Informações da Ferramenta.',
        required: true,
        type: 'object',
              
      } 
    #swagger.responses[201] = { description: 'Tool successfully registered!' }
    #swagger.responses[500] 
  */
ToolController.create);


routes.delete('/tools/:id', 
  
  /*  #swagger.tags = ['Tool']
        #swagger.parameters['id'] = {
            description: 'Tool ID.'
        }
        
        #swagger.responses[200]
        #swagger.responses[204]
        #swagger.responses[404]
    */
ToolController.delete);


module.exports = routes;