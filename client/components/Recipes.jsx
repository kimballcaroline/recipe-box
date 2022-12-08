import React, { Component } from 'react';
import RecipeCard from './RecipeCard.jsx';


class Recipes extends Component {
  constructor(props) {
    super(props);
    
  }

  render(props) {  
    const recipes = this.props;
    const recipesList = [];
    for(const recipe in recipes) {
      recipesList.push(recipes[recipe]);
    };
   //now we have an array of recipes with _id, title, descriptions, and instructions props

   const recipeCards = recipesList.map((el, index, array) => {
    return (
      <RecipeCard key={index} title={el.title} description={el.description} instructions={el.instructions} id={el._id} img={el.imageSource}/>
    )
   })

    return(
      <section className="recipesContainer">
        <h2 className="recipesHeader">Recipes</h2>
        <div className="recipeCardsContainer">{recipeCards}</div>
      </section>
    )
  };

}

export default Recipes;