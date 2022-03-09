// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import signUp from './signUp';
import Flights from './flights';
import Users from './users';
import UserID from './userByID';
import EditPicLink from './editPicLink';
<<<<<<< HEAD
import EditBiodata from './editBiodata';
import GetBookingDetail from './getBookingDetail';
=======
import PostFlight from './postFlightDetail'
import FlightDetail from './flight-detail'
import PostBookingList from './postbookinglist'
>>>>>>> flight-detail

const rootReducers = combineReducers({
  login,
  signUp,
  Flights,
  Users,
  UserID,
  EditPicLink,
<<<<<<< HEAD
  EditBiodata,
  GetBookingDetail
=======
  PostFlight,
  FlightDetail,
  PostBookingList
>>>>>>> flight-detail
})

export default rootReducers