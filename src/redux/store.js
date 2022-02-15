import { applyMiddleware, createStore } from "redux";
import { currentMdl } from "./middleware/currentWeather";
import { locationMdl } from "./middleware/location";
import { api } from "./middleware/api";
import { reducers } from "./reducers";
import { forecastMdl } from "./middleware/forecast";

export const store = createStore(
  reducers,
  applyMiddleware(...locationMdl, ...currentMdl, ...forecastMdl, api)
);
