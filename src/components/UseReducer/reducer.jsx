const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      let newState = 0;
      state == 0 ? (newState = 0) : (newState = state - 1);
      return newState;
    default:
      state;
  }
};

export default reducer;
