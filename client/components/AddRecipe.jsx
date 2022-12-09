import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../stylesheets/addRecipe.scss';

export const AddRecipe = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [instructions, setInstructions] = useState();
    const [imageUrl, setImageUrl] = useState();

    const titleUpdate = (event) => {setTitle(event.target.value)};
    const descriptionUpdate = (event) => {setDescription(event.target.value)};
    const instructionsUpdate = (event) => {setInstructions(event.target.value)};
    const imageUrlUpdate = (event) => {setImageUrl(event.target.value)};

    const handleSubmit=(event)=> {
      event.preventDefault();
      const postPath = "/api/recipes";
      fetch(postPath, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          instructions: instructions,
          imageSource: imageUrl
        })
      })
      .then(res => res.json())
      .then((res)=> {
        const {_id} = res; 
        const path = "/recipe/" + _id;
        navigate(path);
      })
      .catch(err => console.log('AddRecipes handleSubmit: add recipe ERROR: ', err));
    }

    return (
      <div className="add-recipe-content">
        <header className="header">
            <Link to="/" className="home-btn">Home</Link>
            <Link to="/allRecipes" className="add-recipe-btn">My Recipes</Link>
          
        </header>
        <h1>Add Recipe</h1>
          <h2>Enter your recipe information below:</h2>
        <form onSubmit={handleSubmit}>
            <label>Recipe Title</label>
            <textarea rows="1" cols="30" id="title-input" onChange={titleUpdate}></textarea>
            <label>Description</label>
            <textarea rows="1" cols="30"id="description-input" onChange={descriptionUpdate}></textarea>
            <label>Instructions</label>
            <textarea rows="1" cols="30" id="instructions-input" onChange={instructionsUpdate}></textarea>
            <label>Image URL</label>
            <textarea rows="1" cols="30" id="image-url-input" onChange={imageUrlUpdate}></textarea>
            <button type="submit" >Submit</button>
        </form>
      </div>
    );
}


export default AddRecipe;