const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./knex');

app.set('port', 8080);
app.locals.title = 'Study-Haul-2';

app.use(express.json());
app.use(cors());

app.get('/api/v1/questions', async (request, response) => {
  try{
    const questions = await knex.select().from('questions');
    response.status(200).json(questions);
  }catch(error){
    response.status(500).json({error:'failed to retrieve questions'})
  }
});

app.get('/api/v1/debug', async (request, response) => {
  const result = process.env
  response.status(200).json(result)
})

app.get('/api/v1/questions/:id', async(request, response) => {
  const id = request.params.id;
  console.log('paramsID: ', id);
  try {
    const foundQuestion = await knex('questions').where('id', id).first()
    if (foundQuestion) {
      console.log('foundQuestion: ', foundQuestion);
      response.status(200).json(foundQuestion);
    } else {
      return response.status(404).send('Page not found.');
    }
  }catch(error){
    response.status(500).json({error:'failed to retrieve questions'})
  }
});

app.get('/', (request, response) => {
  response.send('Oh hey Study Haul');
});

app.listen(8080, () => {
  console.log('Server has started on port 8080');
});