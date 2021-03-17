import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// import { checkForToken, fetchProfile } from "./actions/authActions";
import { fetchFlights, searchFlights } from "./actions/flightActions";
import { fetchAirlines } from "./actions/airlineActions";
import {
  fetchOriginLocation,
  fetchDestinationLocation,
} from "./actions/locationActions";
import { fetchBooking } from "./actions/bookingActions";

const store = createStore(rootReducer, applyMiddleware(thunk));
// ADD BOOKING
store.dispatch(fetchFlights());
// store.dispatch(checkForToken());
store.dispatch(fetchAirlines());
store.dispatch(fetchOriginLocation());
store.dispatch(fetchDestinationLocation());
// store.dispatch(fetchProfile());
store.dispatch(searchFlights());
store.dispatch(fetchBooking());

export default store;
