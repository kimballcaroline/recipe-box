import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import RecipePage from './components/RecipePage.jsx';
import Footer from './components/Footer.jsx';
import './stylesheets/styles.scss';

export default function App() {
  return (
    <div>
      <div id='main-content'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/recipe/:_id' element={<RecipePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
