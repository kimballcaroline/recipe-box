const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const ingredientsSchema = new Schema ({
//   name: {type: String},
//   quantity: {type: Number},
//   quantityType: {type: String}
// })

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  instructions: {type: String, required: true},
  imageSource: {type: String,  default:"https://biritemarket.com/wp-content/uploads/2020/03/FEAST_Recipe_Placeholder_Image-768x576.jpg"},
  createdDate: {type: Date, default: Date.now},
  // ingredients: [
  //   { 
  //     name: {type: String},
  //     quantity: {type: Number},
  //     quantityType: {type: String}
  //   }
  // ]
}, {strictQuery: true});

//got the updateOne to push into the ingredients array!!!
//for tomorrow: I need to get the create request to: 
  //first: create the recipe with the title and description
  //second: iterate through the ingredients input and run updateOne for each el in the array
  //third: iterate through the instructions input and run updateOne for each el in the array


module.exports = mongoose.model('Recipe', recipeSchema);