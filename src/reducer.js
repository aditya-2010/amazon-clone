export const initialState = {
  basket: [],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // logic
      return { state };
    default:
      return state;
  }
}

export default reducer;
