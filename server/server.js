const path = require('path');
const express = require('express');
// const exp = require('constants');
const mongoose = require('mongoose');

const app = express();

const recipeController = require('./controllers/recipeController');
const { resourceLimits } = require('worker_threads');

const PORT = 3000;

const mongoURI = 'mongodb://localhost/recipeBox';
mongoose.connect(mongoURI);

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, 'client')));

/**
 * define route handlers
 */
app.put('/api/recipes', recipeController.addRecipe, (req, res) => {
  return res.status(200).send(res.locals.recipe);
})

app.get('/api/recipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).json(res.locals.allRecipes);
});

app.delete('/api/recipes', recipeController.deleteRecipe, (req, res) => {
  return res.status(200).send('Successfully deleted: ' + res.locals.title);
});

// //handle requests to recipe page
app.get('/recipe/*', recipeController.getOneRecipe, (req, res) => {
  return res.status(200).render('../client/components/RecipePage.jsx');
});


// respond with main app
app.get('/', (req, res) => (
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
));

//STRETCH FEATURE: EDIT PRE-EXISTING RECIPES
// app.patch('/api/recipes', recipeController.updateRecipe, (req, res) => {
//   return res.status(200).send('Successfully patched record!');
// })

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log('THIS IS THE GLOBAL ERROR: ' + err);
  res.status(500).send({ error: err });
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;