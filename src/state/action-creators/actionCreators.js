export const incrementValue = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "increment",
      payload: amount,
    });
  };
};

export const decrementValue = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "decrement",
      payload: amount,
    });
  };
};

export const changeAmount = (num) => {
  return (dispatch) => {
    dispatch({
      type: "change",
      payload: num,
    });
  };
};
