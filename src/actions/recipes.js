import fetch from 'isomorphic-fetch';

export function fetchRecipes() {
  return(dispatch) => {
    dispatch({ type: 'LOADING_RECIPES' });

    return fetch('/api/v1/recipes')
      .then(response => response.json())
      .then(recipes => dispatch({
        type: 'FETCH_RECIPES',
        payload: recipes.recipes
      }));
  };
}

export function addRecipe(recipe) {
  return {
    type: 'ADD_RECIPE',
    recipe
  };
};
