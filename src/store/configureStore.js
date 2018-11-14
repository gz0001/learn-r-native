import { createStore, combineReducers } from "redux";

import placesReducer from "./reducers/places";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
  places: placesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
