import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import RecipePage from "./components/RecipePage.jsx";
import AddRecipe from "./components/AddRecipe.jsx";
import AllRecipes from "./components/AllRecipes.jsx";

export default function App() {
  return (
    // // <Router>
    //   <Home />
    // // </Router>

    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/allRecipes" exact element={<AllRecipes />} />
      <Route path="recipe/:id" element={<RecipePage />} />
      <Route path="/addRecipe" element={<AddRecipe />} />
    </Routes>

  )
}