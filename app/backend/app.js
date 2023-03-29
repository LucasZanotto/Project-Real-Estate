const express = require('express');
const userRouter = require('./src/routers/loginRouter');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('HELLOWWWWWW')
});

app.use('/user', userRouter);

module.exports = app;
