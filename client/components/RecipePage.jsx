import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/recipePage.scss';

export default function RecipePage() {
  const { pathname } = window.location;
  const id = pathname.split('/').pop();
  const [recipe, setRecipe] = useState({
    ingredients: [],
    instructions: [],
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/recipes/${id}`)
      .then((res) => res.json())
      .then((recipe) => setRecipe(recipe))
      .catch((err) => console.log('ERROR: Fetching recipe failed', err));
  }, []);

  const ingredientList = recipe.ingredients.map((ingredient, index) => {
    return <li key={`ingredient${index}`}>{ingredient}</li>;
  });

  const instructionList = recipe.instructions.map((instruction, index) => {
    return <li key={`instruction${index}`}>{instruction}</li>;
  });

  return (
    <div className='recipe-page-contents'>
      <Link to='/' className='home-link'>
        &#8592; Home
      </Link>
      <div className='header'>
        <img src={recipe.imageSource} alt='' />
        <div className='title-block'>
          <h1>{recipe.title}</h1>
          <p className='recipeDescription'>{recipe.description}</p>
        </div>
      </div>
      <div className='recipe-details'>
        <div className='ingredients'>
          <h2>Ingredients</h2>
          <ul>{ingredientList}</ul>
        </div>
        <div className='instructions'>
          <h2>Instructions</h2>
          <ol>{instructionList}</ol>
        </div>
      </div>
    </div>
  );
}
