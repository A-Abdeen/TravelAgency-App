import instance from "./instance";
import * as types from "./types";

export const fetchBooking = () => async (dispatch) => {
  try {
    const res = await instance.get("/booking");
    dispatch({
      type: types.FETCH_BOOK,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addBooking = (booking) => async (dispatch) => {
  try {
    const res = await instance.post("/bookingCreate", booking);

    dispatch({
      type: types.ADD_BOOK,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addPassenger = (passengers) => ({
  type: types.ADD_PASSENGER,
  payload: passengers,
});
