import React from 'react';

export const RecipeList = props =>
  <div>
    {props.recipes.map(r => (
      <div className="recipe-card">
        <p>{r.title}</p>
        <p>{r.category}</p>
        <p>{r.serves}</p>
      </div>
    ))}
  </div>;
