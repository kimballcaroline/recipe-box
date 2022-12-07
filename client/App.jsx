import React, {Component} from 'react';

class App extends Component {
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
      .then(console.log('fetched recipes!'));
  }

  addRecipes(recipes) {
    console.log('add recipes fired!');
    const recipesList = [...recipes];
    console.log(recipesList)
    this.setState( {recipesList});
    console.log(this.state.recipesList);
    this.setState({fetchedRecipes: true});
  }

  render() {
    if(!this.state.fetchedRecipes) return null;
    const pageProps = {
      recipes: this.state.recipes
    }
    return (
      <div>Testing from App.jsx
        <RecipesContainer {...pageProps} />
      </div>
    );
  }
}

export default App;