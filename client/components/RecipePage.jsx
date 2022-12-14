import React, {Component} from 'react';
import { Link, Navigate } from 'react-router-dom';
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
      fetchedRecipe: false,
      recipeDeleted: false
    };

    // this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    fetch('/api/recipes')
      .then(res => res.json())
      .then(res => this.addRecipes(res))
      .catch(err => console.log('App.componentDidMount: get recipes ERROR: ', err));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(this.state.recipeDeleted === true){
  //   const navigate = useNavigate();
  //   navigate("/allRecipes");
  //   }
  // }

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

  deleteRecipe(event) {
    const { recipe } = this.state;
    event.preventDefault();
    const postPath = "/api/recipes";
    fetch(postPath, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        title: recipe.title
      })
    })
    .then((res)=> {
      alert('Congrats! You successfully deleted a recipe to your database!');
      this.setState({recipeDeleted: true});
    })
    .catch(err => console.log('RecipePage: delete recipe ERROR: ', err));
  }

  render() {
    if(!this.state.fetchedRecipe) return null;
    if(this.state.recipeDeleted) return <Navigate to="/allRecipes"/>
    const { recipe } = this.state;

    return (
      <div className="recipe-page-contents">
        <header className="header">
            <Link to="/allRecipes" className="home-btn">My Recipes</Link>
            <Link to="/addRecipe" className="add-recipe-btn">Add Recipe</Link>
        </header>
        <div className="recipe-info">
          {/* <h1>Recipe Page</h1> */}
          <h1>{recipe.title}</h1>
          <p className="recipeDescription">{recipe.description}</p>
          <img src={recipe.imageSource} alt="" />
          {/* <h2>Description</h2> */}
          <h2>Instructions</h2>
        <p >{recipe.instructions}</p>
        </div>
        {/* <button onClick={deleteRecipe}>Delete Recipe</button> */}
          <button onClick={this.deleteRecipe}>Delete Recipe</button>
      </div>
    );
  }
}


export default RecipePage;