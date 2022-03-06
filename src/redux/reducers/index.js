// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import Flights from './flights'
import Users from './users'
import UserID from './userByID'

const rootReducers = combineReducers({
  login,
  Flights,
  Users,
  UserID
})

export default rootReducers