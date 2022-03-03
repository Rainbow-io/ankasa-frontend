// import internal modules
import { combineReducers } from "redux";

// import external modules
import login from './login';
import signUp from './signUp'

const rootReducers = combineReducers({
  login,
  signUp,
})

export default rootReducers