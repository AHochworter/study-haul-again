/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()
  await knex('questions').insert([
    {
        "id": 1,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "For iterative array prototypes, what is the first argument? E.g. array.find( /*what goes here*/ )",
        "answer": "Call back function",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 2,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "What are the two arguments passed into the .reduce() prototype method?",
        "answer": "Call back function and the initial value",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 3,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "What are the two arguments we pass into the callback function of reduce()? (Technically the callback function of reduce() can accept 4 arguments but we commonly pass just 2)",
        "answer": "initialValue(accumulator) and currentValue",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 4,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "What does forEach() return?",
        "answer": "Trick Question! forEach() does not/cannot return a value. You can use it to 'do things' but not to get anything back.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 5,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "What is a prototype?",
        "answer": "A model of something and how it should look or behave",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 6,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "What is a method?",
        "answer": "A function that is defined on an object",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 7,
        "mod_num": 2,
        "topic": "Array Prototype Methods",
        "question": "What is a callback function?",
        "answer": "A function passed into another function as an argument, which is then invoked inside the outer function",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 8,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What does TDD stand for?",
        "answer": "Test Driven Development / Design",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 9,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What is an assertion?",
        "answer": "An expression containing some testable logic",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 10,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What is an Assertion Library?",
        "answer": "A package of assertion functionality. Usually distinct from a Testing Framework",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 11,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What is a Testing Framework?",
        "answer": "A library that determines how tests are organized and executed",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 12,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What is \"Red Green Refactor\"?",
        "answer": "The process of writing a test first (which will fail), then writing the implementation code to make it pass, then refactoring the tests and/or implementation with confidence",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 13,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What are the four Test Phases?",
        "answer": "Setup, Execution, Assertion, Teardown",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 14,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What goes into the Setup phase of a test?",
        "answer": "Setup the conditions required to execute the action on your SUT",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 15,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What goes into the Execution phase of a test?",
        "answer": "Execute some action on your SUT",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 16,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What goes into the Assertion phase of a test?",
        "answer": "Assert that the action you did had the results you expect",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 17,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What are 4 benefits of TDD?",
        "answer": "1. Computers can test things faster and more accurately than humans: testing things manually in the browser is tedious, error prone and slowForces you to slow down and pseudocode: which helps you think more thoroughly about potential pitfalls before you write your code; it’s much easier to course-correct yourself before you write any code than it is to refactor broken code after it’s been written.\n2. Provides a blueprint for new developers to see how the codebase should work: if your tests are thorough and well-written, a new developer should be able to hop directly into the test folder and get a solid understanding of how each piece of the codebase works.\n3. Provides future integrity for your code as you iterate on your application: applications are never done and can always be improved, added to, pivoted, etc. Tests ensure that as we make these changes, we won’t accidentally introduce new bugs.\n4. Forces you to write more modular, SRP-style code: often times you’ll only recognize opportunities to refactor as you go to write tests for you code and find that it’s not testable.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 18,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What does SUT stand for?",
        "answer": "Subject Under Test",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 19,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "In a test file, what is a describe block?",
        "answer": "A describe block to groups related tests together.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 20,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "In a test file, what is an it block?",
        "answer": "An 'it block' contains the context of each specific test and has 4 phases: Setup, Execution, Assertion, Tear Down",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 21,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What is the difference between Mocha an Chai?",
        "answer": "Mocha is a JavaScript test framework running on Node. js.\nChai is a BDD / TDD assertion library for NodeJS that can be paired with Mocha",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 22,
        "mod_num": 2,
        "topic": "Testing: TDD, Mocha, and Chai",
        "question": "What does BDD stand for?",
        "answer": "Behavior Driven Developmen",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 23,
        "mod_num": 2,
        "topic": "Object Literals: Accessing, Creating, and Modifying Values",
        "question": "When do you use dot notation?",
        "answer": "When you want to access an explicit property of an object",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 24,
        "mod_num": 2,
        "topic": "Object Literals: Accessing, Creating, and Modifying Values",
        "question": "When do you use bracket notation?",
        "answer": "1. When a key inside an object is a number. (not likely to encounter)\n2. When key inside an object has space . (not likely to encounter)\n3. When we want to access keys in an object dynamically using variables and parameters. (most common scenario to encounter)",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 25,
        "mod_num": 3,
        "topic": "React",
        "question": "What are some of the benefits of React, specifically",
        "answer": "React forces us to write modular, reusable pieces of code. React also makes it easy to keep the DOM and data model (state) in sync. React listens for changes in state, and when it hears some, it automatically re-renders.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 26,
        "mod_num": 3,
        "topic": "React",
        "question": "How does React allow us to handle DOM manipulation and rendering in an easy, efficient way?",
        "answer": "React allows us to handle DOM manipulation and render in an easy, efficient way through the Virtual DOM. The Virtual DOM represents a copy of the actual DOM and allows React to only update the DOM with any changes that have been made, rather than updating the entire DOM for every change. It makes the smallest amount of DOM manipulations possible by comparing the Virtual DOM and the actual DOM then only renders the deltas of what has actually changed.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 27,
        "mod_num": 3,
        "topic": "React",
        "question": "How do we move data between components?",
        "answer": "Data flows from parent component to child component through Props. Props is an object that holds onto this data. Think of them like arguments - we can send different values down to the child. Props should remain immutable.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 28,
        "mod_num": 3,
        "topic": "React",
        "question": "What is state?",
        "answer": "State is how components store, or “remember”, the data and current “state” of the application at any given point.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 29,
        "mod_num": 3,
        "topic": "React",
        "question": "What does JSX allow us to do?",
        "answer": "JSX is a special syntax that allows you to write HTML in your JavaScript, and JavaScript in your HTML. It’s technically XML, but you can just think of it as HTML and JavaScript working together to create that Virtual DOM.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 47,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "Why should you never end a test with a ‘click’?",
        "answer": "A click is always part of the user's actions/user flow that you are simulating in the test. The real test is to then assert against what you expect the user to see/experience AFTER they click something/finish the flow.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 30,
        "mod_num": 3,
        "topic": "React",
        "question": "What is the difference between a framework and a library?",
        "answer": "Both frameworks and libraries are reusable pieces of code created by others to help developers solve common problems in software development. However, they differ in how they interact with your code and the level of control they offer:     \n1. Libraries are more flexible and provide a set of functions that you can use in your code as needed.          \n2. Frameworks are more structured and provide specific architecture and set of rules for our applications.   When we use a framework, the framework itself is in charge of the application's flow. It provides places and ways for us to plug in our code, but it calls our code as needed according to its predefined structure.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 31,
        "mod_num": 3,
        "topic": "React",
        "question": "What is a controlled form? Why would we use it?",
        "answer": "A controlled form is an input element in React whose value is controlled so that it stays in sync with that Form's State. We use a form like this to collect and hold a user's input values",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 32,
        "mod_num": 3,
        "topic": "React",
        "question": "Describe the steps you would take to pass props down to a child component from a parent component.",
        "answer": "In the Render of the parent component, we render the child component. We can give the child component props with a syntax similar to attributes (<Ideas ideas={ideas} />. In the Child component, we then need to receive these props as a parameter. We can call it props, and dig into it with dot notation, or we can use destructuring to create variables from the key names of the props object.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 33,
        "mod_num": 3,
        "topic": "React",
        "question": "State is mutable, but we should not change it directly. What method do we use to manipulate state? What arguments is it expecting?",
        "answer": "1. If we used .push() to add new items to our state, this would be directly manipulating state, which we don't want to do.*\n    \n 2. Instead, in React, to manipulate state in a proper and recommended way, we use the setter function returned by the useState hook. This setter function is conventionally named with a prefix of \"set\" followed by the name of the state variable.*\n    \n3. The setter function expects an argument that represents the new value we want to set for the state variable. When we call the setter function and provide the new value as an argument, React will internally handle the update process and trigger a re-render of the component.*",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 34,
        "mod_num": 3,
        "topic": "React",
        "question": "Why should you avoide calling hooks, such as useState, within for loops and conditional statements in React components?",
        "answer": "Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, check this example from React Docs)",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 35,
        "mod_num": 3,
        "topic": "useEffect",
        "question": "When and why do we reach for the useEffect hook?",
        "answer": "The `useEffect` Hook allows us to manage side effects and *control WHEN the functionality inside it gets invoked*. We often use useEffect for invoking our network request fetch calls.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 36,
        "mod_num": 3,
        "topic": "useEffect",
        "question": "Why is it important to pass an empty array as the second argument to useEffect in some cases?",
        "answer": "1. By default, an effect runs every single time you re-render the component.*\n    \n 2. It is unlikely we want to run our network request on every re-render.*\n    \n3. To control this behavior, you can provide an array of dependencies. If you give an empty array of dependencies, the effect will only run once - when the component mounts. However, if you want to fetch data every time state changes in your component, you can pass the state into the useEffect dependency array, and it will fetch the data for you every single time that state changes. Be cautious to avoid creating an infinite loop when adding state to the dependency array.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 37,
        "mod_num": 3,
        "topic": "useEffect",
        "question": "What does .fetch( ) return? When would the .then( ) fire?",
        "answer": "Fetch returns a Promise! The .then fires when the promise resolves successfully! If the promise is rejected instead of resolved, the .then would not be fired - instead a .catch block would be fired.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 38,
        "mod_num": 3,
        "topic": "useEffect",
        "question": "What is this code doing? {error && <p> Something went wrong, please try again</>\nWhen would we use it?",
        "answer": "1. This is conditional rendering.\n\n2. It says: if `error` is truthy.... display this p tag.\n\n3. We'd use this any time there is an error in state, which would typically come from a failed fetch. There are plenty of other use cases for conditional rendering in React as well.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 39,
        "mod_num": 3,
        "topic": "Network Requests",
        "question": "What are some examples of other types of Network Requests besides GET?",
        "answer": "POST, PUT, PATCH, DELETE",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 40,
        "mod_num": 3,
        "topic": "Network Requests",
        "question": "What do each of these status codes levels mean? 1xx, 2xx, 3xx, 4xx, 5xx?",
        "answer": "1xx - Informational\n2xx - Success\n3xx - Redirects\n4xx - Client Errors\n5xx - Server Errors",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 41,
        "mod_num": 3,
        "topic": "Network Requests",
        "question": "How would you describe a Promise?",
        "answer": "1. The eventual completion of an action. A Promise will either be resolved upon completion, or rejected upon failure.*\n\na. An example of a resolved Promise is a network request that successfully GETs the requested data. A rejected Promise could be a GET request that returns some error instead of the requested data.*",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 42,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "What are some of the major features of Cypress?",
        "answer": "Time Travel or snapshots, Debugging, Automatic Waiting, Spies Stubs and Clocks, Network Traffic control, Screenshots and videos, Cross Browser testing",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 43,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "If I wanted to go to a specific URL, find an input, type into it and then submit the information with Cypress, what methods might I reach for?",
        "answer": ".visit([url]) .get([input]) .type([value]) .click().[make some kind of assertion about what the user should see/experience after the click]",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 44,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "What is user flow? Describe a user flow in Rancid Tomatillos (happy and sad if possible)",
        "answer": "1. A user flow is a series of actions a user is likely to take in your application.*\n\n2. User flow describes the overall user experience when they visit our website. Our user flow in Rancid Tomatillos would include displaying all the movies on the opening page for our user to scroll through. Allowing them to skim and click on different movies that opens a more detailed view, including a description and a trailer. The sad path should communicate if there are issues with the data loading from the server, or problems with the client side.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 45,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "What is a stub? How does that work with the intercept method from Cypress?",
        "answer": "A stub is a piece of mock data that allows you to control every aspect of a response object. An intercept would catch an outgoing network request before it reaches the server. You can then \"send\" the stub back to your application. Useful for testing happy and sad paths.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 46,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "Should your intercept be before or after the functionality that would trigger the network request? Why?",
        "answer": "You need to write your intercepts before the network request would be triggered by the test so that the network request can actually be intercepted. If you write the intercept after the part of the test that triggers the network request, it would be too late.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 48,
        "mod_num": 3,
        "topic": "E2E Testing",
        "question": "In the Cypress UI, how can you tell if a network request is being properly intercepted?",
        "answer": "The Cypress UI should you a step by step of what it's doing as it runs each test. Anytime a network request occurs, it will show it.\n\nA filled in circle next to the fetch means it was not intercepted correctly and actually hit the api. When a fetch is properly intercepted, the circle will be empty and there will be an alias tag as well.\n",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 49,
        "mod_num": 3,
        "topic": "Express",
        "question": "What is express and why do we use it?",
        "answer": "Express is a small framework built on top of web server functionality in Node.js. We use it as syntactical sugar over to make these servers easier to write",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 50,
        "mod_num": 3,
        "topic": "Express",
        "question": "Describe what express middleware is ?",
        "answer": "Express middleware makes up the bulk of the code you'll write with express, and generally it will be pieces of routes, broken out into small, maintainable functions. Generally middle wear is what decides which responses get sent for which routes.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 51,
        "mod_num": 3,
        "topic": "Express",
        "question": "What is app.locals?",
        "answer": "an Object given to us through Express that we can store some data in.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 52,
        "mod_num": 3,
        "topic": "Express",
        "question": "What is CORS?",
        "answer": "Cross Origin Resource Sharing - it allows protected resources on a web page to be requested from outside of the current domain. Basically a security feature. To use it, we need to install it as a dependency, import it and tell the app to use it.",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    },
    {
        "id": 53,
        "mod_num": 3,
        "topic": "MVC Architecture",
        "question": "What are the layers of MVC?",
        "answer": "Model - focused solely on the data\nView - concerned only with the UI\nController - acts as a go-between for Model and View",
        "created_at": "2023-10-29T20:36:58.848Z",
        "updated_at": "2023-10-29T20:36:58.848Z"
    }
]);
};
