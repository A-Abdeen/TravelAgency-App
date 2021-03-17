import instance from "./instance";
import * as types from "./types";

export const fetchOriginLocation = () => async (dispatch) => {
  try {
    const res = await instance.get("/origins");
    dispatch({
      type: types.FETCH_ORIGIN,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const fetchDestinationLocation = () => async (dispatch) => {
  try {
    const res = await instance.get("/destinations");
    dispatch({
      type: types.FETCH_DESTINATION,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};
