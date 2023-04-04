const express = require('express');
const userRouter = require('./src/routers/loginRouter');
const movelRouter = require('./src/routers/movelRouter');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('HELLOWWWWWW')
});

app.use('/user', userRouter);
app.use('/movel', movelRouter);

module.exports = app;
