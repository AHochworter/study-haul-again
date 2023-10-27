const express = require('express');
const app = express();

app.locals.questions = [
  {
    id: 1,
    mod: 2,
    topic: 'Array Prototype Methods',
    question: 'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )',
    answer: 'Call back function'
  },
  {
    id: 4,
    mod: 2,
    topic: 'Array Prototype Methods',
    question: 'What are the two arguments passed into the .reduce() prototype method?',
    answer: 'Call back function and the initial value'
  },
  {
    id: 5,
    mod: 2,
    topic: 'Array Prototype Methods',
    question: 'What are the two arguments we pass into the callback function of reduce()? (Technically the callback function of reduce() can accept 4 arguments but we commonly pass just 2)',
    answer: 'initialValue(accumulator) and currentValue'
  }
]



app.set('port', process.env.PORT || 3000);
app.locals.title = 'Study-Haul';

app.get('/api/v1/questions', (request, response) => {
  const questions = app.locals.questions;
  response.json({questions})
})

app.get('/', (request, response) => {
  response.send('Oh hey Study Haul');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});