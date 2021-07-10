const reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      // I don't know why this works, but state + action.payload concats the numbers.
      return action.payload - state * -1;
    case "decrement":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
