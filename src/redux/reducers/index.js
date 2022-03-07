// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import signUp from './signUp';
import Flights from './flights'
import Users from './users'
import UserID from './userByID'

const rootReducers = combineReducers({
  login,
  signUp,
  Flights,
  Users,
  UserID
})

export default rootReducers