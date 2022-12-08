import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/recipeCard.scss';


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
      <div className="view-btn-wrapper">
        <Link to={path} className="view-btn">View</Link>
      </div>
      
    </section>
  );
}

export default RecipeCard;