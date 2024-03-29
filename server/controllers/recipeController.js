const recipeController = {};

const Recipe = require('../models/recipeModel');

recipeController.addRecipe = (req, res, next) => {
  const { title, description, instructions, ingredients, imageSource } =
    req.body;
  Recipe.create(
    { title, description, instructions, ingredients, imageSource },
    (err, recipe) => {
      if (err)
        return next({
          log: `The following error occured: ${err}`,
          status: 418,
          message: { err: 'An error occured while trying to create a recipe' },
        });
      res.locals.newRecipe = recipe;
      return next();
    }
  );
};

recipeController.getRecipes = (req, res, next) => {
  Recipe.find({}, (err, recipes) => {
    if (err)
      return next({
        log: `The following error occured: ${err}`,
        status: 418,
        message: { err: 'An error occured while trying to get all recipes' },
      });
    res.locals.allRecipes = recipes;
    return next();
  });
};

recipeController.getOneRecipe = (req, res, next) => {
  const { id } = req.params;
  Recipe.findOne({ _id: id }, (err, recipe) => {
    if (err) {
      return next({
        log: `The following error occured: ${err}`,
        status: 418,
        message: { err: 'An error occured while trying to find a recipe' },
      });
    } else if (!recipe) {
      return next({
        status: 400,
        message: { err: 'No recipe with the given id is in the database' },
      });
    }
    res.locals.recipe = recipe;
    return next();
  });
};

recipeController.deleteRecipe = (req, res, next) => {
  const { id } = req.params;

  Recipe.findOneAndDelete({ _id: id }, (err, recipe) => {
    if (err) {
      return next({
        log: `The following error occured: ${err}`,
        status: 418,
        message: { err: 'An error occured while trying to delete a recipe' },
      });
    } else if (!recipe) {
      return next({
        status: 400,
        message: { err: 'No recipe with the given id is in the database' },
      });
    }
    res.locals.recipe = recipe;
    return next();
  });
};

recipeController.updateRecipe = (req, res, next) => {
  const { id } = req.params;
  const { title, description, instructions, ingredients, imageSource } =
    req.body;

  Recipe.findOneAndUpdate(
    { _id: id },
    { title, description, instructions, ingredients, imageSource },
    { new: true },
    (err, recipe) => {
      if (err) {
        return next({
          log: `The following error occured: ${err}`,
          status: 418,
          message: {
            err: 'An error occured while trying to update a recipe',
          },
        });
      } else if (!recipe) {
        return next({
          status: 400,
          message: { err: 'No recipe with the given id is in the database' },
        });
      }
      res.locals.updatedRecipe = recipe;
      return next();
    }
  );
};

module.exports = recipeController;
