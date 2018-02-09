export function recipes(state = {
  loading: true,
  recipes: []
}, action) {
  switch(action.type) {
    case 'FETCH_RECIPES':
      return Object.assign({}, state, { loading: false, recipes: action.payload });
      case 'ADD_RECIPE':
      const recipe = Object.assign({}, action.recipe, {id: state.length + 1} );
        return [...state, recipe]
    default:
      return state;
  }
}
