import React, {Component} from 'react';
// import { useParams } from "react-router-dom";

class RecipePage extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   recipesList: {},
    //   fetchedRecipes: false
    // };

    // this.addRecipes = this.addRecipes.bind(this);
    // const { id } = useParams();
    // console.log(id);
  }


  componentDidMount() {
 
    // fetch('/recipe/*')
    // fetch('/api/recipes')
    //   // .then(res=> console.log(res))
    //   .then(res => res.json())
    //   // .then(() => console.log('console.log'))
    //   .then(res => this.addRecipes(res))
    //   .catch(err => console.log('App.componentDidMount: get recipes ERROR: ', err));
  }

  // addRecipes(recipes) {
  //   const recipesList = [...recipes];
  //   this.setState( {recipesList});
  //   this.setState({fetchedRecipes: true});
  // }

  render() {
    // if(!this.state.fetchedRecipes) return null;

    return (
      <div className="app">
        <header className="appHeader">
          <h1>Recipe Page</h1>
          <p>Subheading all about Recipe Box</p>
        </header>
        {/* <Recipes {...this.state.recipesList}/> */}
      </div>
    );
  }
}


export default RecipePage;