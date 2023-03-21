import React, { useEffect, useState } from 'react';
import Recipes from './Recipes.jsx';
import SearchBar from './custom/SearchBar.jsx';
import '../stylesheets/allRecipes.scss';

const AllRecipes = () => {
  const [recipesList, setRecipesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/recipes')
      .then((res) => res.json())
      .then((recipes) => {
        setRecipesList(recipes);
      })
      .catch((err) => console.error('ERROR: Get recipes failed:  ', err));
  }, []);

  return (
    <section className='all-recipes-contents'>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className='recipes-component-wrapper'>
        <Recipes recipesList={recipesList} searchQuery={searchQuery} />
      </div>
    </section>
    // );
  );
};

export default AllRecipes;
