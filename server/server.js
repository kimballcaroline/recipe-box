const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./routers/recipeRouter');
const app = express();

const PORT = 3000;

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/recipes', recipeRouter);

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

app.use((req, res) => res.status(404).send('404 Page Not Found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
