import React, {Component} from 'react';
import Recipes from './Recipes.jsx'; 

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
      // .then(res=> console.log(res))
      .then(res => res.json())
      // .then(() => console.log('console.log'))
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
      <div className="app">
        <header className="appHeader">
          <h1>Recipe Box</h1>
          <p>Subheading all about Recipe Box</p>
        </header>
        <Recipes {...this.state.recipesList}/>
      </div>
    );
  }
}


export default Home;