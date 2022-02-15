import { UPDATE_LIST, UPDATE_LOCATION } from "../actions/location";

const initState = {
  name: "Tel Aviv",
  rank: "",
  id: "215793",
  list: [],
};

export const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return { ...state, list: action.payload };
    case UPDATE_LOCATION:
      const { name, id, rank } = action.payload;
      return { ...state, name, rank, id };
    default:
      return state;
  }
};
