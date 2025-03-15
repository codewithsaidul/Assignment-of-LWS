import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes"

export const AddFlight = (booking) => {
    return {
        type: ADD_BOOKING,
        payload: booking
    }
}

export const DeleteFlight = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        payload: bookingId
    }
}