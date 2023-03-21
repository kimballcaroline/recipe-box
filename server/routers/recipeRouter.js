const express = require('express');
const recipeController = require('../controllers/recipeController');

const recipeRouter = express.Router();

recipeRouter.post('/', recipeController.addRecipe, (req, res) => {
  return res.status(200).send(res.locals.newRecipe);
});

recipeRouter.get('/:id', recipeController.getOneRecipe, (req, res) => {
  return res.status(200).json(res.locals.recipe);
});

recipeRouter.get('/', recipeController.getRecipes, (req, res) => {
  return res.status(200).json(res.locals.allRecipes);
});

recipeRouter.patch('/:id', recipeController.updateRecipe, (req, res) => {
  return res.status(200).send(res.locals.updatedRecipe);
});

recipeRouter.delete('/:id', recipeController.deleteRecipe, (req, res) => {
  return res
    .status(200)
    .send(`Recipe successfully deleted: ${res.locals.recipe.title}`);
});

module.exports = recipeRouter;
