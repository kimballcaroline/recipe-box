import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipePage from './components/RecipePage.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import AllRecipes from './components/AllRecipes.jsx';
import Footer from './components/Footer.jsx';
import './stylesheets/styles.scss';

export default function App() {
  return (
    <div>
      <div id='main-content'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/allRecipes' element={<AllRecipes />} /> */}
          <Route path='/recipe/:id' element={<RecipePage />} />
          {/* <Route path='/addRecipe' element={<AddRecipe />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
