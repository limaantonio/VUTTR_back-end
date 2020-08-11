const request = require('supertest');
const {isUuid} = require('uuidv4');
const app = require('../app')

const id = '56cb91bdc3464f14678934ca';

describe('Tool', () => {
  it('should be able to create a new tool', async () => {
    const response = await request(app)
      .post('/tools')
      .send({
        title: "Figma",
        decription: "É uma ferramenta para criação de prototipos.",
        link: "www.figma.io",
        tags: [
          "Design",
          "Prototipo"
        ]
      });


      expect(response.body).toMatchObject({
        tags: [
          "Design",
          "Prototipo"
        ],
        title: "Figma",
        link: "www.figma.io",
        description: "É uma ferramenta para criação de prototipos.",
        __v: 0
      });
  });

  // it('should be able to list the tools', async () => {
  //   const tools = await request(app)
  //     .post('/tools')
  //     .send({
  //       title: "Figma",
  //       decription: "É uma ferramenta para criação de prototipos.",
  //       link: "www.figma.io",
  //       tags: [
  //         "Design",
  //         "Prototipo"
  //       ]
  //     });

  //     const response = await request(app).get("/tools")

  //     expect(response.body).toEqual(
  //       expect.arrayContaining([
  //         {
  //           id: tools.body.id,
  //           decription: "É uma ferramenta para criação de prototipos.",
  //           link: "www.figma.io",
  //           tags: [
  //             "Design",
  //             "Prototipo"],
  //           }
  //        ])
  //       );
  //     });
  // it('should be able to delete a tool.', async () => {
  //   const response = await request(app)
  //     .delete('/tools/:id')
  //     .send()

  //     expect(response.body).toHaveProperty('');
  // });
  
});