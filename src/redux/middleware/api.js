import { REQUEST } from "../../constant";
import { API_REQUEST } from "../actions/api";

export const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === API_REQUEST) {
      const { method, url, onSuccess, onError } = action.meta;

      // console.log(`${REQUEST.hostURL}${url}`);
      // const response =
      fetch(`${REQUEST.hostURL}${url}`, { method })
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          return dispatch({ type: onSuccess, payload: data });
        })
        .catch((error) => {
          console.log(`this is error: ${error}`);
          return dispatch({ type: onError, payload: error });
        });
    }
    return next(action);
  };
