import {
  SET_DATA,
  SEARCH_SPINNER,
  SPINNER,
  SEARCHED_DATA,
  FILTER_LOCATION,
  TOP_COUNTRIES,
  FILTERD_DATA,
  TYPE,
  PAGE,
} from "./action.types";

const jobsReducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        jobsData: action.payload,
        filterdData: action.payload,
      };

    case FILTERD_DATA:
      return { ...state, filterdData: action.payload };

    case SEARCHED_DATA:
      return {
        ...state,
        jobsData: [...state.jobsData, ...action.payload.data],
        filterdData: [...state.filterdData, ...action.payload.data],
        data_loading_spinner: false,
      };

    case PAGE:
      return {
        ...state,
        page: action.payload.page,
        data_loading_spinner: action.payload.spinner,
      };

    case SEARCH_SPINNER:
      return {
        ...state,
        search_spinner: action.payload,
      };

    case SPINNER:
      return {
        ...state,
        spinner: action.payload,
      };
    case TYPE:
      return { ...state, type: action.payload };

    case FILTER_LOCATION:
      return { ...state, location: action.payload };

    case TOP_COUNTRIES:
      if (action.payload.country === "london") {
        return { ...state, london: action.payload.value };
      }
      if (action.payload.country === "amsterdom") {
        return { ...state, amsterdom: action.payload.value };
      }
      if (action.payload.country === "new-york") {
        return { ...state, new_york: action.payload.value };
      }
      if (action.payload.country === "berlin") {
        return { ...state, berlin: action.payload.value };
      }

    default:
      return state;
  }
};

export default jobsReducer;
