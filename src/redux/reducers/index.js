import { combineReducers } from "redux";
import { currentWeatherReducer } from "./currentWeather";
import { locationReducer } from "./location";
import { forecastReducer } from "./forecast";

export const reducers = combineReducers({
  location: locationReducer,
  current: currentWeatherReducer,
  forecast: forecastReducer,
});
