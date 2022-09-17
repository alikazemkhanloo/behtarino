import { AnyAction, Middleware, MiddlewareAPI, Store } from "redux";
import axios from "axios";
import { _SUCCESS, _FAILURE } from "../constants";
import { State } from "../reducer";

const apiMiddleWare: Middleware<{}, State> =
  (storeApi) => (next) => async (action: AnyAction) => {
    const result = next(action);
    console.log("s", action);
    if (action.api) {
      const baseURL: string = process.env.NEXT_PUBLIC_API;
      const request = {
        baseURL,
        ...action.payload,
      };
      console.log("here");
      try {
        const apiResults = await axios(request);
        console.log("first");
        return next({
          type: action.type + _SUCCESS,
          payload: apiResults,
          data: action.data,
        });
      } catch (error) {
        next({ type: action.type + _FAILURE, payload: error.response });
        return Promise.reject(error);
      }
    }

    return result;
  };
export default apiMiddleWare;
