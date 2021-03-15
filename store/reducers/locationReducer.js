import * as types from "../actions/types";

const initialState = {
  origins: [],
  destinations:[],
  loading: true,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    // //------------------------------FETCHING FROM BACKEND
    case types.FETCH_ORIGIN:
      return {
        ...state,
        origins: action.payload,
        loading: false,
      };
      case types.FETCH_DESTINATION:
        return {
          ...state,
          destinations: action.payload,
          loading: false,
        };

    default:
      return state;
  }
};

export default locationReducer;
