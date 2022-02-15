import { REQUEST } from "../../constant";
import { apiRequest } from "../actions/api";
import {
  FETCH_FORECAST_ERROR,
  FETCH_FORECAST_SUCCESS,
  GET_FORECAST,
  updateForecast,
} from "../actions/forecast";

export const getForecastFlow =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === GET_FORECAST) {
      dispatch(
        apiRequest(
          "GET",
          `${REQUEST.forecastURL}${action.payload}?apikey=${REQUEST.apiKey}&language=en-us&details=true&metric=true`,
          null,
          null,
          FETCH_FORECAST_SUCCESS,
          FETCH_FORECAST_ERROR
        )
      );
      // Spinner
    }
  };

export const proccessForecast =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === FETCH_FORECAST_SUCCESS) {
      console.log(action.payload);
      const data = action.payload;
      const forecast = data.DailyForecasts;
      const arr = forecast.map((item) => ({
        date: item.Date,
        temperature: {
          minimum: item.Temperature.Minimum.Value,
          maximum: item.Temperature.Maximum.Value,
        },
        unit: item.Temperature.Minimum.Unit,
        icon: "",
        title: item.Day.IconPhrase,
      }));
      dispatch(updateForecast(arr));
    }

    if (action.type === FETCH_FORECAST_ERROR) {
      alert(action.payload);
    }
  };

export const forecastMdl = [getForecastFlow, proccessForecast];
