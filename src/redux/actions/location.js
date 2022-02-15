// export const GET_LOCATION = "[location] GET location";
export const SELECT_LOCATION = "[locaiton] Select location";
export const GET_LOCATIONS_LIST = "[location] GET locations list";
export const UPDATE_LOCATION = "[location] Update location";
export const UPDATE_LIST = "[location] Update list";
export const FETCH_LOCATION_SUCCESS = "[location] Fetch success";
export const FETCH_LOCATION_ERROR = "[location] Fetch error";

export const selectLocation = (location) => {
  return {
    type: SELECT_LOCATION,
    payload: location,
  };
};

export const updateLocation = (location) => ({
  type: UPDATE_LOCATION,
  payload: location,
});

export const getList = (str) => ({
  type: GET_LOCATIONS_LIST,
  payload: str,
});

export const updateList = (data) => ({
  type: UPDATE_LIST,
  payload: data,
});
