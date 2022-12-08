const recipeController = {};

const Recipe = require('../models/recipeModel');

recipeController.addRecipe = (req, res, next) => {
  const {body} = req;
  // res.locals.body = body;
  // return next();
  Recipe.create({title: body.title, description: body.description, instructions: body.instructions, imageSource: body.imageSource}, (err, recipe) => {
    if(err) return next('Error in recipeController.addRecipe: ' + JSON.stringify(err));
    res.locals.recipe = recipe;
    return next();
  });
}

recipeController.getRecipes = (req, res, next) => {
  Recipe.find({}, (err, recipes) => {
    if(err) return next('Error in recipeController.getRecipes: ' + JSON.stringify(err));
    res.locals.allRecipes = recipes;
    return next();
  });
}

recipeController.deleteRecipe = (req, res, next) => {
  const { title } = req.body;
  
  Recipe.deleteOne({ title }, (err, recipe) => {
    if(err) return next('Error in recipeController.deleteRecipe delete request: ' + JSON.stringify(err));
    res.locals.title = title;
    return next();
  });
}

recipeController.getOneRecipe = (req, res, next) => {
  console.log('req params: ' + req.params);
//   const _id = req.params[0];
//   Recipe.findOne({_id}, (err, recipe) => {
//     if(err) return next('Error in recipeController.findOneRecipe get request: ' + JSON.stringify(err));
//     res.locals.recipe = recipe;
//     return next();
//  });
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