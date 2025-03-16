import { ADD_BOOKING, DELETE_BOOKING, RESET_MESSAGE } from "./actionTypes"

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

export const Reset_Message = () => {
    return {
        type: RESET_MESSAGE
    }
}