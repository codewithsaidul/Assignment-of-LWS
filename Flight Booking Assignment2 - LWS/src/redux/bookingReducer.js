import { ADD_BOOKING, DELETE_BOOKING, RESET_MESSAGE } from "./actionTypes";


let initialState = {
    flights: [],
    successMessage: false,
    error: false
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                flights: [...state.flights, action.payload],
                successMessage: true,
            }
        case DELETE_BOOKING:
            return {
                ...state,  // পুরাতন state রেখে দাও
                flights: state.flights.filter((booking) => booking.bookingId !== action.payload),
                error: true
            };
        case RESET_MESSAGE:
             return {
                ...state,
                successMessage: false,
                error: false
             }
        default:
            return state;
    }
}


export default bookingReducer






