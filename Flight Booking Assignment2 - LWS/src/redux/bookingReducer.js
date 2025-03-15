import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";


let initialState = []

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return [
                ...state,
                action.payload
            ]
        case DELETE_BOOKING:
            return state.filter((booking) => booking.bookingId !== action.payload)
    
        default:
            return state;
    }
}


export default bookingReducer






