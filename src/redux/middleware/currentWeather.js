import { REQUEST } from "../../constant";
import { apiRequest } from "../actions/api";
import {
  FETCH_CURRENT_ERROR,
  FETCH_CURRENT_SUCCESS,
  GET_CURRENT,
  updateCurrent,
} from "../actions/currentWeather";

export const getCurrentFlow =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === GET_CURRENT) {
      dispatch(
        apiRequest(
          "GET",
          `${REQUEST.currentURL}${action.payload}?apikey=${REQUEST.apiKey}&language=en-us&details=true`,
          action.payload.id,
          null,
          FETCH_CURRENT_SUCCESS,
          FETCH_CURRENT_ERROR
        )
      );
      // Spinner
    }
  };

export const proccessCurrent =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === FETCH_CURRENT_SUCCESS) {
      console.log(...action.payload);
      dispatch(updateCurrent(...action.payload));
    }

    if (action.type === FETCH_CURRENT_ERROR) {
      alert(action.payload);
    }
    // hide Spinner
  };

export const currentMdl = [getCurrentFlow, proccessCurrent];

// export const currentError =
//   ({ dispatch }) =>
//   (next) =>
//   (action) => {
//     next(action);

//     if (action.type === FETCH_CURRENT_ERROR) {
//       alert(action.payload);
//     }
//   };
