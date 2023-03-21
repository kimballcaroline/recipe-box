import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/recipeCard.scss';

const RecipeCard = (props) => {
  const { title, description, instructions, id, img } = props;

  const path = '/recipe/' + id;

  return (
    <section className='recipeCard'>
      <h3 className='recipeTitle'>{title}</h3>
      <p className='recipeDescription'>{description}</p>
      <Link to={path} className='read-more-link'>
        Read More
      </Link>
    </section>
  );
};

export default RecipeCard;
