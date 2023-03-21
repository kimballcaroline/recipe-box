const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const recipeController = require('./controllers/recipeController');

const PORT = 3000;

// const mongoURI = 'mongodb://localhost/recipeBox';
mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'client')));

app.put('/api/recipes', recipeController.addRecipe, (req, res) => {
  return res.status(200).send(res.locals.recipe);
});

app.get('/api/recipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).json(res.locals.allRecipes);
});

app.delete('/api/recipes', recipeController.deleteRecipe, (req, res) => {
  return res.status(200).send(res.locals.title);
});

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
