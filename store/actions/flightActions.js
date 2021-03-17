import instance from "./instance";
import * as types from "./types";

export const fetchFlights = () => async (dispatch) => {
  try {
    const res = await instance.get("/flights");
    dispatch({
      type: types.FETCH_FLIGHT,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const addFlight = (newFlight) => async (dispatch) => {
  try {
    const res = await instance.post(
      `/airlines/${newFlight.airlineId}/flights`,
      newFlight
    );
    dispatch({
      type: types.ADD_FLIGHT,
      payload: { newFlight: res.data },
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateFlight = (updatedFlight) => async (dispatch) => {
  try {
    const res = await instance.put(
      `/flights/${updatedFlight.id}`,
      updatedFlight
    );
    dispatch({
      type: types.UPDATE_FLIGHT,
      payload: { updatedFlight: res.data },
    });
  } catch (err) {
    console.error(err);
  }
};
// Is this the flights.flight problem in searchList index?
export const searchFlights = (flight) => async (dispatch) => {
  try {
    const res = await instance.post("/flights/search", flight);
    dispatch({
      type: types.SEARCH_FLIGHT,
      payload: { flight: res.data },
    });
  } catch (err) {
    console.error(err);
  }
};
