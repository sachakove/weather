import { apiRequest } from "../actions/api";
import { REQUEST } from "../../constant";
import {
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
  GET_LOCATIONS_LIST,
  SELECT_LOCATION,
  updateList,
  updateLocation,
} from "../actions/location";
import { getCurrentWeather } from "../actions/currentWeather";
import { getForecast } from "../actions/forecast";

export const getListFlow =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === GET_LOCATIONS_LIST) {
      dispatch(
        apiRequest(
          "GET",
          `${REQUEST.locationURL}apikey=${REQUEST.apiKey}&q=${action.payload}&language=en-us`,
          action.payload.str,
          null,
          FETCH_LOCATION_SUCCESS,
          FETCH_LOCATION_ERROR
        )
      );
      // Spinner
    }
  };

export const proccessList =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === FETCH_LOCATION_SUCCESS) {
      const data = action.payload.map((item) => {
        return {
          name: item.LocalizedName,
          id: item.Key,
          rank: item.Rank,
        };
      });
      console.log(data);
      dispatch(updateList(data));
    }

    if (action.type === FETCH_LOCATION_ERROR) {
      alert(action.payload.error);
    }

    // hide Spinner
  };

export const selectLocationFlow =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === SELECT_LOCATION) {
      // Spinner
      // dispatch(updateLocation({ name: "Tel Aviv", id: "215793", rank: "31" }));
      // dispatch(getCurrentWeather("215793"));
      // dispatch(getForecast("215793"));
      dispatch(updateLocation(action.payload));
      dispatch(getCurrentWeather(action.payload.id));
      dispatch(getForecast(action.payload.id));
      // hide Spinner
    }
  };

export const locationMdl = [proccessList, getListFlow, selectLocationFlow];

// export const locationError =
//   ({ dispatch }) =>
//   (next) =>
//   (action) => {
//     next(action);

//     if (action.type === FETCH_LOCATION_ERROR) {
//       alert(action.payload.error);

//     }
//   };
