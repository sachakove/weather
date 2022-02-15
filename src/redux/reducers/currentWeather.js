import { UPDATE_CURRENT } from "../actions/currentWeather";

export const currentWeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
