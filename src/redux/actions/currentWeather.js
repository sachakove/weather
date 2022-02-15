export const GET_CURRENT = "[current] GET current";
export const UPDATE_CURRENT = "[current] Update current";
export const FETCH_CURRENT_SUCCESS = "[current] Fetch success";
export const FETCH_CURRENT_ERROR = "[current] Fetch error";

export const getCurrentWeather = (id) => ({
  type: GET_CURRENT,
  payload: id,
});

export const updateCurrent = (data) => ({
  type: UPDATE_CURRENT,
  payload: data,
});
