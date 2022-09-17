import { AnyAction } from "redux";
import { Product } from "../../types";
// import { Product } from "src/types";
import { getSuccessType } from "../utils";
import { FETCH_PRODUCT } from "./actions";

export type State = Readonly<
  Partial<{
    data: Product;
  }>
>;

// create your reducer
export const product = (
  state: State = { data: undefined },
  action: AnyAction
): State => {
  switch (action.type) {
    case getSuccessType(FETCH_PRODUCT):
      return { data: action.payload.data };
    default:
      return state;
  }
};
