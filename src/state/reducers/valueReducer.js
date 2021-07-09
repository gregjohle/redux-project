const reducer = (state = 0, action) => {
  switch (action.type) {
    case "incriment":
      return state + action.payload;
    case "decriment":
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
