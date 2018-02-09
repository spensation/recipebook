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
  debugger
  return(dispatch) => {

    dispatch({ type: 'ADDING_RECIPE' });

    return fetch('/api/v1/recipes', {
      method: 'POST',
      data: {
        title: recipe.title,
        category: recipe.category,
        serves: recipe.serves,
        prep_time: recipe.prep_time,
        cook_time: recipe.cook_time,
        total_time: recipe.total_time,
        ingredients: recipe.ingredients,
        directions: recipe.directions,
        user_id: recipe.user_id
      }
    })
    .then(response => response.json())
    .then(recipes => {
      dispatch({
        type: 'SUCCESSFULLY_ADDED_RECIPE',
        payload: recipes.recipe,
      })
      return recipes;
    })
  }
}
