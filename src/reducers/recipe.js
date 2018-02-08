export function recipesReducer(state = {
  loading: true,
  recipes: []
}, action) {
  switch(action.type) {
    case 'LOADING_RECIPES':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_RECIPES':
      return Object.assign({}, state, { loading: false, recipes: action.payload });
    default:
      return state;
  }
}
