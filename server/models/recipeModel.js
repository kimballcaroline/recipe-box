const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    instructions: { type: String, required: true },
    imageSource: {
      type: String,
      default:
        'https://biritemarket.com/wp-content/uploads/2020/03/FEAST_Recipe_Placeholder_Image-768x576.jpg',
    },
    createdDate: { type: Date, default: Date.now },
  },
  { strictQuery: true }
);

module.exports = mongoose.model('recipe', recipeSchema);
