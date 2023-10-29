const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./knex');

app.set('port', process.env.PORT || 8080);
app.locals.title = 'Study-Haul';

app.use(express.json());
app.use(cors());

app.locals.questions = [
  {
    id: '1',
    mod: 2,
    topic: 'Array Prototype Methods',
    question:
      'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )',
    answer: 'Call back function',
  },
  {
    id: '4',
    mod: 2,
    topic: 'Array Prototype Methods',
    question:
      'What are the two arguments passed into the .reduce() prototype method?',
    answer: 'Call back function and the initial value',
  },
  {
    id: '5',
    mod: 2,
    topic: 'Array Prototype Methods',
    question:
      'What are the two arguments we pass into the callback function of reduce()? (Technically the callback function of reduce() can accept 4 arguments but we commonly pass just 2)',
    answer: 'initialValue(accumulator) and currentValue',
  },
];

//We might need to come back after and change this to study-haul
app.get('/api/v1/questions', async (request, response) => {
  const questions = await knex.select().from('questions');
  response.status(200).json(questions);
});

app.get('/api/v1/questions/:id', (request, response) => {
  const id = request.params.id;
  console.log('paramsID: ', id);

  const foundQuestion = app.locals.questions.find(
    (question) => question.id === id
  );
  if (foundQuestion) {
    console.log('foundQuestion: ', foundQuestion);
    response.status(200).json(foundQuestion);
  } else {
    return response.status(404).send('Page not found.');
  }
});

app.get('/', (request, response) => {
  response.send('Oh hey Study Haul');
});

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
  );
});
