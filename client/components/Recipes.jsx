import React from 'react';
import RecipeCard from './RecipeCard.jsx';
import '../stylesheets/recipes.scss';
// import { Stack } from '@mui/system';
import { Paper, Box, Typography, Stack } from '@mui/material';

export default function Recipes({ recipesList, searchQuery }) {
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
              key={index}
              title={recipe.title}
              description={recipe.description}
              instructions={recipe.instructions}
              id={recipe._id}
              img={recipe.imageSource}
            />
          ))}
        </Stack>
      </Box>
    </div>
  );
}
