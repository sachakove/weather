import { UPDATE_FORECAST } from "../actions/forecast";

export const forecastReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FORECAST:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
