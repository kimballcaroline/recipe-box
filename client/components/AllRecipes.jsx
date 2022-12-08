import React, {Component} from 'react';
import Recipes from './Recipes.jsx'; 
import { Link } from 'react-router-dom';
import '../stylesheets/allRecipes.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipesList: {},
      fetchedRecipes: false
    };

    this.addRecipes = this.addRecipes.bind(this);

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
    this.setState({fetchedRecipes: true});
  }

  render() {
    if(!this.state.fetchedRecipes) return null;
    return (
      <div className="all-recipes-contents">
        <header className="header">
            <Link to="/" className="home-btn">Home</Link>
            <Link to="/addRecipe" className="add-recipe-btn">Add Recipe</Link>
        </header>
        <div className="recipes-component-wrapper"><Recipes {...this.state.recipesList}/></div>
      </div>
    );
  }
}


export default Home;