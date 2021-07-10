import { action } from "commander";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/actions";

export default function Inputs() {
  const amount = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { incrementValue, decrementValue, changeAmount } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className='inputs'>
      <input
        type='number'
        value={amount}
        onChange={(e) => changeAmount(e.target.value)}
      />
      <button onClick={() => incrementValue(amount)}>Add</button>
      <button onClick={() => decrementValue(amount)}>Subtract</button>
    </div>
  );
}
