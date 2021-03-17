import instance from "./instance";
import * as types from "./types";

export const fetchAirlines = () => async (dispatch) => {
  try {
    const res = await instance.get("/airlines");
    dispatch({
      type: types.FETCH_AIRLINE,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
