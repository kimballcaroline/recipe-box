import React from 'react';
// import { redirect } from "react-router-dom";
import { useNavigate, Link } from 'react-router-dom';


const RecipeCard = (props) => {
 const {
    title, description, instructions, id, img
  } = props;

  // const navigate = useNavigate();
  const path = "/recipe/" + id;

  // const handleClick = () => {
  //   navigate(path);
  //   navigate(0);
  // }

  return (
    <section className="recipeCard">
      <div className="imgContainer"> <img src={img} alt="illustration of cooking" /></div>
      <div className="recipeInfoContainer">
        <h2 className="recipeTitle">{title}</h2>
        <p className="recipeDescription">{description}</p>
      </div>
      <div className="buttonContainer">
        {/* <button onClick={handleClick}>View</button> */}
        <Link to={path} className="button">View</Link>
      </div>
      
    </section>
  );
}

export default RecipeCard;