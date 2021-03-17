import { combineReducers } from "redux";

import authReducer from "./authReducer";
import flightReducer from "./flightReducer";
import airlineReducer from "./airlineReducer";
import locationReducer from "./locationReducer";
import bookingReaducer from "./bookingReaducer";

const rootReducer = combineReducers({
  authReducer,
  flightReducer,
  airlineReducer,
  locationReducer,
  bookingReaducer,
});

export default rootReducer;
