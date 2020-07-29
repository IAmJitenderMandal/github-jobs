import { SET_SEARCH_DATA } from "./action.types";

const jobsReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return [...action.payload];
    default:
      return state;
  }
};

export default jobsReducer;
