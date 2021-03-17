import * as types from "../actions/types";

const initialState = {
  booking: [],
  passengers: [],
  loading: true,
};

const bookingReaducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_BOOK:
      return {
        ...state,
        booking: action.payload,
        loading: false,
      };
    case types.ADD_BOOK:
      const { newBooking } = action.payload;
      // newBooking.passengers = state.passengers || Maybe for history
      return {
        ...state,
        booking: [...state.booking, newBooking],
        passengers: [],
      };

    case types.ADD_PASSENGER:
      return {
        ...state,
        passengers: action.payload,
      };

    default:
      return state;
  }
};

export default bookingReaducer;
