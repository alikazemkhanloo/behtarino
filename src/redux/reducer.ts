import { combineReducers, AnyAction, Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import { product } from "./product/reducer";

const reducers = {
  product,
};

type Reducers = typeof reducers;

export type State = {
  [Property in keyof Reducers]: ReturnType<Reducers[Property]>;
};

const combinedReducer = combineReducers(reducers);
const reducer: Reducer = (state: State, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

export default reducer;
