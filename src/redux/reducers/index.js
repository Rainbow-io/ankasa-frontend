// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import signUp from './signUp';
import Flights from './flights';
import Users from './users';
import UserID from './userByID';
import EditPicLink from './editPicLink';
import EditBiodata from './editBiodata';
import GetBookingDetail from './getBookingDetail';
import PostFlight from './postFlightDetail'
import FlightDetail from './flight-detail'
import PostBookingList from './postbookinglist'
import BookingSuccess from './bookingSuccess';
import BookingPayment from './bookingPayment';
import PostPay from './postPay';

const rootReducers = combineReducers({
  login,
  signUp,
  Flights,
  Users,
  UserID,
  EditPicLink,
  EditBiodata,
  GetBookingDetail,
  PostFlight,
  FlightDetail,
  PostBookingList,
  BookingSuccess,
  BookingPayment,
  PostPay
})

export default rootReducers