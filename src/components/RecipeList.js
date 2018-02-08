import React from 'react';

export const RecipeList = props =>
  <div>
    {props.recipes.map(r => (
      <div className="recipe-card">{r.title}-{r.category}-{r.serves}</div>
    ))}
  </div>;
