const request = require('supertest')
const app = require('../app')
  
const mongoose = require('mongoose');
const Tool = require('../models/Tool');
const tool = 
          {
            title: 'Figma',
            description: 'This is a Design software', 
            link: 'www.figma.com',
            tags: ["figma"]
          }
          
describe('Tool Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});

it('should be able to create e save tool successfully', async () => {
  const validTool = new Tool(tool);
  const savedTool = await validTool.save();
 
  expect(savedTool._id).toBeDefined();
  expect(savedTool.title).toBe(tool.title);
  expect(savedTool.description).toBe(tool.description);
  expect(savedTool.link).toBe(tool.link);
  expect(savedTool.tags).toEqual(expect.arrayContaining(tool.tags));
});

it('should be able to list the tools', async () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });

    
    expect.arrayContaining(tool)
    });

   
  });

it('should be able to delete a tool.', async () => {
    beforeAll(async () => {
      await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
          if (err) {
              console.error(err);
              process.exit(1);
          }
      });

      const savedTool = await validTool.findOneAndDelete();
      expect(savedTool).toHaveProperty('');
  });
});

});