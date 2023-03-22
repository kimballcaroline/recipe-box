import React, { useEffect, useState } from 'react';
import AllRecipes from '../AllRecipes.jsx';
import SearchBar from '../customMUI/SearchBar.jsx';
import '../../stylesheets/recipesContainer.scss';

const RecipesContainer = () => {
  const [recipesList, setRecipesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/recipes', { mode: cors })
      .then((res) => res.json())
      .then((recipes) => {
        setRecipesList(recipes);
      })
      .catch((err) => console.error('ERROR: Get recipes failed:  ', err));
  }, []);

  return (
    <section className='recipes-container'>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className='recipes-component-wrapper'>
        <AllRecipes recipesList={recipesList} searchQuery={searchQuery} />
      </div>
    </section>
  );
};

export default RecipesContainer;
