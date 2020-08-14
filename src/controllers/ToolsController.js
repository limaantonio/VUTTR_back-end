const Tool = require('../models/Tool');

module.exports = {
  async index (request, response){
    let tools;
    

    if(request.query.tag){
     tools = await Tool.find({
       tags: request.query.tag
     });
    }else{
      tools = await Tool.find();
    }

    return response.status(200).json(tools);
  },

  async create(request, response){

    const {title, link, description, tags} = request.body;

    const tagsArray = tags.toString().split(',');
    const tool = await Tool.create({
      title,
      link,
      description,
      tags: tagsArray
    });

    return response.status(201).json(tool);
  },

  async delete(request, response){
    const {id} = request.params;
    
    const tool = await Tool.findById(id);

    await tool.deleteOne();

    return response.status(204).send();
  },
 
}

