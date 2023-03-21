import React from 'react';
import RecipeCard from './RecipeCard.jsx';
import '../stylesheets/allRecipes.scss';
import { Box, Stack } from '@mui/material';

export default function AllRecipes({ recipesList, searchQuery }) {
  const filteredRecipes = recipesList.filter((recipe) => {
    if (searchQuery === '') {
      return recipe;
    } else {
      return (
        recipe.title.toLowerCase().includes(searchQuery) ||
        recipe.description.toLowerCase().includes(searchQuery)
      );
    }
  });

  return (
    <div className='recipeCardsContainer'>
      <Box>
        <Stack
          spacing={2}
          sx={{
            overflow: 'auto',
          }}
        >
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={`recipe${index}`}
              title={recipe.title}
              description={recipe.description}
              instructions={recipe.instructions}
              ingredients={recipe.ingredients}
              _id={recipe._id}
              img={recipe.imageSource}
            />
          ))}
        </Stack>
      </Box>
    </div>
  );
}
