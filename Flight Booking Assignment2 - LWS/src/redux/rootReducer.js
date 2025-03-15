import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";



const rootReducer = combineReducers({
    flightBooking: bookingReducer
})

export default rootReducer