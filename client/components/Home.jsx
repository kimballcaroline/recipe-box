import React from 'react';
import recipe_box_home from '../../docs/assets/images/recipe_box_home.jpg';
import AllRecipes from './AllRecipes.jsx';
import '../stylesheets/home.scss';

const Home = () => {
  return (
    <div className='home-contents'>
      <header className='header'>
        <img src={recipe_box_home} alt='illustration of common foods' />
        <h1>Recipe Box</h1>
      </header>
      <AllRecipes />
    </div>
  );
  // }
};

export default Home;
