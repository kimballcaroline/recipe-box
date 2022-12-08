import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/recipePage.scss';

class RecipePage extends Component {
  constructor(props) {
    super(props);

    const {pathname} = window.location;
    const id = pathname.split("/").pop();

    this.state = {
      recipesList: {},
      id: id,
      recipe: {},
      fetchedRecipe: false
    };

    // this.addRecipe = this.addRecipe.bind(this);
  }

  componentDidMount() {

    fetch('/api/recipes')
      .then(res => res.json())
      .then(res => this.addRecipes(res))
      .catch(err => console.log('App.componentDidMount: get recipes ERROR: ', err));
  }

  addRecipes(recipes) {
    const recipesList = [...recipes];
    this.setState( {recipesList});
    return this.findRecipe(this.state.recipesList);
  }

  findRecipe(recipes) {
    for(let i=0; i<recipes.length; i++) {
      if(recipes[i]._id === this.state.id) {
        this.setState({recipe: {...recipes[i]}});
        this.setState({fetchedRecipe: true});
      }
    }
  }

  render() {
    if(!this.state.fetchedRecipe) return null;
    const { recipe } = this.state;
    return (
      <div className="recipe-page-contents">
        <header className="header">
            <Link to="/allRecipes" className="home-btn">Back</Link>
            <Link to="/addRecipe" className="add-recipe-btn">Add Recipe</Link>
        </header>
        <div className="recipe-info">
          {/* <h1>Recipe Page</h1> */}
          <h1>{recipe.title}</h1>
          <img src={recipe.imageSource} alt="" />
          <h2>Description</h2>
          <p>{recipe.description}</p>
          <h2>Instructions</h2>
        <p >{recipe.instructions}</p>
        </div>
      </div>
    );
  }
}


export default RecipePage;