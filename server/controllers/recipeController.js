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
  const { title } = req.body;
  Recipe.deleteOne({ title }, (err, recipe) => {
    if(err) return next('Error in recipeController.deleteRecipe delete request: ' + JSON.stringify(err));
    res.locals.title = title;
    return next();
  });
}


//STRETCH FEATURE: EDIT PRE-EXISTING RECIPES
// recipeController.updateRecipe = (req, res, next) => {
//   const { body } = req;
//   console.log(body);
//   //we'll need the recipe id from the onClick event
//   //then use the rest of the info from the body to update the file
//   return next();
// }

module.exports = recipeController;