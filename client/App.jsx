import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
// import RecipePage from "./components/RecipePage.jsx";

export default function App() {
  return (
    // // <Router>
    //   <Home />
    // // </Router>

    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="/recipe" element={<RecipePage />} /> */}
      {/* <Route path="recipe/:id" element={<RecipePage />} /> */}
    </Routes>

  )
}