import { combineReducers } from "redux";
import valueReducer from "./valueReducer";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  value: valueReducer,
  amount: amountReducer,
});

export default reducers;
