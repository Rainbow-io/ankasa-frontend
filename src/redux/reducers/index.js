// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import Flights from './flights'

const rootReducers = combineReducers({
  login,
  Flights
})

export default rootReducers