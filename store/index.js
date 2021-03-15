import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import { checkForToken } from "./actions/authActions";
import { fetchOriginLocation, fetchDestinationLocation } from "./actions/locationActions";

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(checkForToken());
store.dispatch(fetchOriginLocation());
store.dispatch(fetchDestinationLocation());

export default store;
