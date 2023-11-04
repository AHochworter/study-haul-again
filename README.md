# Study Haul API

To be used with the Study Haul React Application

## Endpoints

### GET all questions

URl: 'https://study-haul-api.vercel.app/api/v1/questions'

```js
[
    {
      id: 1,
      mod_num: '2',
      topic: 'Array Prototype Methods',
      question:
        'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )',
      answer: 'Call back function',
    },
    {
      id: 2,
      mod_num: '2',
      topic: 'Array Prototype Methods',
      question:
        'What are the two arguments passed into the .reduce() prototype method?',
      answer: 'Call back function and the initial value',
    }
]
```

### GET a question by its id

URL: 'https://study-haul-api.vercel.app/api/v1/questions/:id'

Sample URL: 'https://study-haul-api.vercel.app/api/v1/questions/25'

```js
[
    {
      id: 1,
      mod_num: '2',
      topic: 'Array Prototype Methods',
      question:
        'For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )',
      answer: 'Call back function',
    }
```

Sample response (404) for All Questions

```
{message: "We're sorry we can't find the requested page. Please try again."}

```

Sample response (500) for a Selected Question
```
{message: "We're sorry, we can't find the requested page.  Please hit the 'Home' button above."}

```

