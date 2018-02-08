import React from 'react';

export const RecipeList = props =>
  <ul>
    {props.recipes.map(r => (
      <li>{r.title}-{r.category}-{r.serves}</li>
    ))}
  </ul>;
