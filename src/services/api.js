const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const postNewRecipe = recipe = {
  return fetch('/api/v1/recipes', {
    method: "POST",
    headers,
    body: JSON.stringify({ recipe })
  }).then(response => response.json());
};
