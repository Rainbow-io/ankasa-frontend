// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import signUp from './signUp';
import Flights from './flights';
import Users from './users';
import UserID from './userByID';
import EditPicLink from './editPicLink';
import PostFlight from './postFlightDetail'
import FlightDetail from './flight-detail'
import PostBookingList from './postbookinglist'

const rootReducers = combineReducers({
  login,
  signUp,
  Flights,
  Users,
  UserID,
  EditPicLink,
  PostFlight,
  FlightDetail,
  PostBookingList
})

export default rootReducers