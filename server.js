const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Study-Haul';

app.use(express.json());

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




app.get('/api/v1/questions', (request, response) => {
  const questions = app.locals.questions;
  response.json({questions})
})

app.get('/api/v1/questions/:id', (request, response) => {
  const id = request.params.id
  // const questions = app.locals.questions;
 
  console.log('paramsID: ', id)
  // console.log('questions: ', questions)
  
  const foundQuestion = app.locals.questions.find((question) => 
    question.id === id
  );
  if (foundQuestion) {
    console.log('foundQuestion: ', foundQuestion)
    response.status(200).json(foundQuestion)
  } else {
    return response.status(404).send('Page not found.')
  }
  });


app.get('/', (request, response) => {
  response.send('Oh hey Study Haul');
});



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});