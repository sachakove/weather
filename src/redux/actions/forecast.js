export const GET_FORECAST = "[forecast] Get Forecast";
export const UPDATE_FORECAST = "[forcast] Update Forecast";
export const FETCH_FORECAST_SUCCESS = "[forecast] Fetch Success";
export const FETCH_FORECAST_ERROR = "[forecast] Fetch Error";

export const getForecast = (id) => ({
  type: GET_FORECAST,
  payload: id,
});

export const updateForecast = (forecast) => ({
  type: UPDATE_FORECAST,
  payload: forecast,
});
