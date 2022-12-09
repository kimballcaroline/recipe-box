import React, {Component} from 'react';
import Recipes from './Recipes.jsx'; 
import { Link } from 'react-router-dom';
import '../stylesheets/home.scss';
import recipe_box_home from "../../docs/assets/images/recipe_box_home.jpg";

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
      <div className="home-contents">
        <header className="header">
          <h1>Recipe Box</h1>
          <h2>Wherever you go, your recipes will follow</h2>
        </header>
        <img src={recipe_box_home} alt="illustration of common foods" />
        <div className="primary-btn-wrapper">
          <Link to="/allRecipes" className="primary-btn">My Recipes</Link>
        </div>
        <div className="secondary-btn-wrapper">
          <Link to="/addRecipe" className="secondary-btn">Add Recipe</Link>
        </div>
        
        {/* <Recipes {...this.state.recipesList}/> */}
      </div>
    );
  }
}


export default Home;