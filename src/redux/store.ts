import { createStore, applyMiddleware, Store, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import type { State } from "./reducer";
import reducer from "./reducer";
import apiMiddleWare from "./middlewares/api";
import { configureStore } from "@reduxjs/toolkit";

export type { State } from "./reducer";

const makeStore = () => {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  // const enhancer = composeEnhancers(applyMiddleware(apiMiddleWare));
  // const store = createStore(reducer, enhancer);
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiMiddleWare),
  });
  return store;
};

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
