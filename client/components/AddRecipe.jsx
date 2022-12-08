import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/addRecipe.scss';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="add-recipe-content">
        <header className="header">
            <Link to="/" className="home-btn">Home</Link>
            <Link to="/allRecipes" className="add-recipe-btn">All Recipes</Link>
          
        </header>
        <h1>Add Recipe</h1>
          <h2>Enter your recipe information below:</h2>
        <form>
            <label>Recipe Title</label>
            <textarea rows="1" cols="30" id="title-input"></textarea>
            <label>Description</label>
            <textarea rows="1" cols="30"id="description-input"></textarea>
            <label>Instructions</label>
            <textarea rows="1" cols="30" id="instructions-input"></textarea>
            <label>Image URL</label>
            <textarea rows="1" cols="30" id="image-url-input"></textarea>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default AddRecipe;